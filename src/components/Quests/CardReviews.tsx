import { Button } from "../ui/Button/Button";

type CardProps = { top: string; middle: string; button: string; img?: string };

export const CardReviews = ({ top, middle, button, img }: CardProps) => (
  <div className="w-91.25 max-h-55 font-alumni relative rounded-lg border border-[#2E3139]">
    <span className="text-[20px] px-2 py-0.5 bg-[#FF0633] absolute top-0 left-6">
      Доступен
    </span>
    <div className="p-6">
      <h3 className="text-[32px] font-semibold tracking-[1%] uppercase pb-4 pt-4">
        {top}
      </h3>
      <p className="text-[20px] whitespace-pre-line tracking-[1%] pb-4">
        {middle}
      </p>
      <Button
        variant="success"
        className="uppercase w-full flex items-center justify-center gap-2 "
      >
        {button}
        {img && <img src={img} alt="fortune" className="w-6 h-6" />}
      </Button>
    </div>
  </div>
);
