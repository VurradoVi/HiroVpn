type CardProps = {
  top: string;
  img: string;
  bottom: string;
};

export const Card = ({ top, img, bottom }: CardProps) => (
  <div className="flex flex-row">
    <div className="flex flex-col justify-between items-center border border-[#C3C2BD] rounded-lg min-w-30 max-w-30 min-h-52 py-4 shrink-0">
      <h4 className="font-semibold text-[24px]">{top}</h4>
      <img className="w-25 h-25" src={img} alt="fortune" />
      <h4 className="text-[30px] font-kelly">{bottom}</h4>
    </div>
  </div>
);
