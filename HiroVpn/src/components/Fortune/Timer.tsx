export const Timer = ({
  hours,
  minutes,
  seconds,
}: {
  hours: string;
  minutes: string;
  seconds: string;
}) => (
  <div>
    <div className="flex items-center gap-2 justify-center mt-6">
      <div className="flex flex-col items-center">
        <div className="flex gap-1">
          {hours.split("").map((n, i) => (
            <div
              key={i}
              className="w-12 h-15 bg-[#1c1f26] border border-[#2E3139] rounded-lg flex items-center justify-center text-white text-5xl"
            >
              {n}
            </div>
          ))}
        </div>
        <p className="text-[20px] uppercase">часы</p>
      </div>

      <span className="text-white text-2xl">:</span>

      <div className="flex flex-col items-center">
        <div className="flex gap-1">
          {minutes.split("").map((n, i) => (
            <div
              key={i}
              className="w-12 h-15 bg-[#1c1f26] border border-[#2E3139] rounded-lg flex items-center justify-center text-white text-5xl"
            >
              {n}
            </div>
          ))}
        </div>
        <p className="text-[20px] uppercase">минуты</p>
      </div>
      <span className="text-white text-2xl">:</span>

      <div className="flex flex-col items-center">
        <div className="flex gap-1">
          {seconds.split("").map((n, i) => (
            <div
              key={i}
              className="w-12 h-15 bg-[#1c1f26] border border-[#2E3139] rounded-lg flex items-center justify-center text-white text-5xl"
            >
              {n}
            </div>
          ))}
        </div>
        <p className="text-[20px] uppercase">секунды</p>
      </div>
    </div>
  </div>
);
