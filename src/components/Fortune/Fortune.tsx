import { useEffect, useRef, useState, useCallback } from "react";
import fortuneImg from "../../assets/img.svg";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import gift from "../../assets/gift.svg";
import union from "../../assets/Union.svg";
import { Card } from "./Card";
import { Button } from "../ui/Button/Button";
import { Modal } from "./Modal";
import { Timer } from "./Timer";

export type CardType = {
  id: number;
  top: string;
  img: string;
  bottom: string;
  winner: boolean;
};

const Cards: CardType[] = [
  { id: 1, top: "Бесплатные", img: card1, bottom: "6 часов", winner: true },
  { id: 2, top: "Cкидка", img: card2, bottom: "20%", winner: true },
  { id: 3, top: "Cкидка", img: card2, bottom: "50%", winner: true },
  { id: 4, top: "Попробуйте", img: card3, bottom: "завтра", winner: false },
  { id: 5, top: "Cкидка", img: card2, bottom: "30%", winner: true },
  { id: 6, top: "Cкидка", img: card2, bottom: "10%", winner: true },
  { id: 7, top: "Попробуйте", img: card3, bottom: "завтра", winner: false },
];

const extendedCards = Array(10)
  .fill(null)
  .flatMap(() => Cards);

const CARD_WIDTH = 120;
const GAP = 4;
const STEP = CARD_WIDTH + GAP;
const INITIAL_INDEX = 2;
const SPIN_DURATION = 3000;
const DAY_IN_SECONDS = 86400;

export const Fortune = () => {
  const [offset, setOffset] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winnerCard, setWinnerCard] = useState<CardType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const calculateCenterOffset = useCallback(() => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    return containerWidth / 2 - CARD_WIDTH / 2;
  }, []);

  const updateInitialOffset = useCallback(() => {
    const centerOffset = calculateCenterOffset();
    return INITIAL_INDEX * STEP - centerOffset;
  }, [calculateCenterOffset]);

  useEffect(() => {
    setOffset(updateInitialOffset());
  }, [updateInitialOffset]);

  useEffect(() => {
    const handleResize = () => {
      setOffset(updateInitialOffset());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateInitialOffset]);

  useEffect(() => {
    if (!timeLeft) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const spin = () => {
    if (isSpinning || winnerCard) return;

    setIsSpinning(true);

    const centerOffset = calculateCenterOffset();

    const winnerBaseIndex = Math.floor(Math.random() * Cards.length);
    const winner = Cards[winnerBaseIndex];

    const currentCenterIndex = Math.round((offset + centerOffset) / STEP);
    const minAdditionalSteps = Cards.length * 3;

    let targetIndex = currentCenterIndex + minAdditionalSteps;

    for (let i = targetIndex; i < extendedCards.length; i++) {
      if (extendedCards[i].id === winner.id) {
        targetIndex = i;
        break;
      }
    }

    const newOffset = targetIndex * STEP - centerOffset;
    setOffset(newOffset);

    setTimeout(() => {
      setIsSpinning(false);
      setWinnerCard(winner);
      setIsModalOpen(true);
      setTimeLeft(DAY_IN_SECONDS);
    }, SPIN_DURATION);
  };

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="w-82 lg:w-140 border border-[#2E3139] rounded-lg font-alumni">
      <div className="flex justify-between items-center p-6">
        <div>
          <h3 className="font-semibold text-[32px] pb-1 uppercase">
            Колесо Фортуны
          </h3>
          <p className="whitespace-pre-line text-[20px] text-[#C3C2BD]">
            Испытайте удачу раз в день {"\n"}и выигрывайте бонусы!
          </p>
        </div>
        <img src={fortuneImg} alt="fortune" />
      </div>

      <div
        ref={containerRef}
        className="overflow-hidden w-full border-y border-[#2E3139] pb-4 relative"
      >
        {!winnerCard && (
          <img
            src={union}
            alt="pointer"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
          />
        )}

        {winnerCard ? (
          <Timer hours={hours} minutes={minutes} seconds={seconds} />
        ) : (
          <div
            className="flex gap-1 transition-transform duration-3000 ease-out"
            style={{
              transform: `translateX(-${offset}px)`,
            }}
          >
            {extendedCards.map((card, index) => (
              <Card key={`${card.id}-${index}`} {...card} />
            ))}
          </div>
        )}
      </div>

      <div className="p-5">
        <Button
          onClick={spin}
          disabled={isSpinning || !!winnerCard}
          variant={winnerCard ? "success" : "secondary"}
          className="w-full uppercase text-[24px] flex items-center justify-center gap-3"
        >
          {winnerCard ? "Забрать награду" : "Испытать удачу"}
          <img src={gift} alt="gift" />
        </Button>

        <p className="text-[20px] whitespace-pre-line pt-2 pb-2">
          Крути колесо 7 дней подряд без пропусков и получи на 7-й день{"\n"}
          гарантированный 1 день подписки!
        </p>

        <h2 className="font-semibold text-[44px] p-5 tracking-[4px] lg:tracking-[22px] text-center border border-[#2E3139] rounded-lg relative">
          <div className="bg-[#FF0633] w-13 lg:w-20 h-4 absolute top-1/2 -translate-y-1/2 left-0 -z-1"></div>
          1 2 3 4 5 6 7
        </h2>
      </div>

      {isModalOpen && winnerCard && (
        <Modal card={winnerCard} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};
