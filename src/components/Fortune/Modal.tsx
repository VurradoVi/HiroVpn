import { Button } from "../ui/Button/Button";
import type { CardType } from "./Fortune";

type Props = {
  card: CardType;
  onClose: () => void;
};

export const Modal = ({ card, onClose }: Props) => (
  <div className="fixed inset-0 flex items-center justify-center z-100 bg-black/50 backdrop-blur-sm">
    <div className="max-w-90 bg-[#1E2025] border border-[#2E3139] rounded-lg p-8">
      <h2 className="whitespace-pre-line text-center text-4xl font-semibold">
        {card.winner ? "Поздравляем!\nВы выиграли" : "В другой раз\nповезёт!"}
      </h2>

      {card && (
        <div className="flex items-center justify-center gap-2 my-4">
          <p className="text-[24px] font-semibold">{card.top}</p>
          <img src={card.img} alt="fortune" className="w-30 h-30" />
          <p className="font-kelly text-xl font-semibold">{card.bottom}</p>
        </div>
      )}

      {card.winner && (
        <p className="text-center text-sm text-[#C3C2BD] mb-4">
          Активируйте в течение 24 часов
        </p>
      )}

      <Button
        onClick={onClose}
        variant="secondary"
        className="w-full uppercase"
      >
        Продолжить
      </Button>
    </div>
  </div>
);
