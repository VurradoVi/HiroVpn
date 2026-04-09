import { Fortune } from "../Fortune/Fortune";
import { Button } from "../ui/Button/Button";
import { CardReviews } from "./CardReviews";
import share from "../../assets/share.svg";
import google from "../../assets/google.svg";
import telegram from "../../assets/telegram.svg";

const reviewsCards = [
  {
    top: "оставь отзыв",
    middle:
      "Поделитесь своим мнением о HiroVPN и получите 3 дня VPN бесплатно!",
    button: "Оставить отзыв",
  },
  {
    top: "Поделиться с Друзьями",
    middle: "Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!",
    button: "Поделиться",
    img: share,
  },
  {
    top: "Поддержите нас лайками",
    middle:
      "Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!",
    button: "поддержать",
    img: google,
  },
  {
    top: "Оцени нас в Google Картах",
    middle: "Поделись впечатлением и получи 1 день VPNв подарок!",
    button: "оценить",
  },
  {
    top: "Оцени нас в ЯНДЕКС Картах",
    middle: "Поделись впечатлением и получи 1 день VPNв подарок!",
    button: "оценить",
  },
  {
    top: "Подписаться на TG-канал ",
    middle:
      "Подпишитесь на канал HIroVPN - получайте новости и апдейты самыми первыми, а так же 1 день VPN бесплатно!",
    button: "подписаться",
    img: telegram,
  },
];

export const Quests = () => (
  <div>
    <div className="flex justify-between pt-8">
      <h2 className="text-[44px] pb-10">Квесты</h2>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
      >
        <path
          d="M17.6006 6.39893L12.3545 11.646L12.001 11.9995L17.6016 17.6001L17.6006 17.6011L12 12.0005L11.6465 12.354L6.39941 17.6001L6.39844 17.5991L11.6455 12.353L11.999 11.9995L6.39941 6.3999L6.40039 6.39893L12 11.9985L12.3535 11.645L17.5996 6.39795L17.6006 6.39893Z"
          fill="#FDFDFD"
          stroke="#FDFDFD"
        />
      </svg>
    </div>
    <div className="flex flex-wrap justify-center lg:justify-between md:flex-nowrap items-center gap-6">
      <Fortune />
      <div className="w-xl max-h-75 lg:max-h-68 bg-[#FDFDFD] font-alumni relative">
        <span className="text-[20px] px-2 py-0.5 bg-[#FF0633] absolute top-0 left-6">
          Доступен
        </span>
        <div className="p-6 min-w-85">
          <h3 className="text-[32px] text-[#1E2025] font-semibold tracking-[1%] uppercase pb-4 pt-2">
            Расскажи о Hiro
          </h3>
          <p className="text-[20px] text-[#2E3139] whitespace-pre-line tracking-[1%] pb-4">
            Просто напиши пост/статью о нас в крупном канале или на своей
            странице в соцсетях со ссылкой на нас. {"\n"}Пришли ссылку на
            пост/статью — и мы начислим тебе от 15 до 90 дней VPN бесплатно!
            {"\n"} Чем больше охват, тем длиннее подарок!
          </p>
          <Button variant="secondary" className="uppercase w-full">
            Отправить ссылки
          </Button>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
      {reviewsCards.map((card) => (
        <CardReviews key={card.top} {...card} />
      ))}
    </div>
  </div>
);
