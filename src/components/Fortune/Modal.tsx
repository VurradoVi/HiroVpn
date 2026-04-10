import { Button } from "../ui/Button/Button";
import type { CardType } from "./Fortune";

type Props = {
  card: CardType;
  onClose: () => void;
};

export const Modal = ({ card, onClose }: Props) => (
  <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center sm:justify-center">
    <div
      className="
        w-full 
        h-[50vh] 
        sm:h-auto 
        sm:max-w-90 
        bg-[#1E2025] 
        border border-[#2E3139] 
        rounded-t-2xl sm:rounded-lg 
        p-6 sm:p-8
        animate-[slideUp_0.4s_ease-out]
        sm:animate-[fadeIn_0.4s_ease-out]
      "
    >
      <div className="w-12 h-1 bg-gray-500 rounded-full mx-auto mb-4 sm:hidden" />

      <h2 className="whitespace-pre-line text-center text-3xl sm:text-4xl font-semibold">
        {card.winner ? "Поздравляем!\nВы выиграли" : "В другой раз\nповезёт!"}
      </h2>

      <div className="flex items-center justify-center gap-2 my-4">
        <p className="text-[22px] sm:text-[24px] font-semibold">{card.top}</p>
        <img src={card.img} alt="fortune" className="w-30 h-30" />
        <p className="font-kelly text-[20px] font-semibold">{card.bottom}</p>
      </div>

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
