import appstore from "../../assets/appstore.svg";
import googleplay from "../../assets/googleplay.svg";
import androidtv from "../../assets/androidtv.svg";
import windows from "../../assets/windows.svg";
import macos from "../../assets/macos.svg";
import linux from "../../assets/linux.svg";
import sbp from "../../assets/sbp.svg";
import sberpay from "../../assets/sberpay.svg";
import tpay from "../../assets/tpay.svg";
import tether from "../../assets/tether.svg";
import telegram from "../../assets/telegram.svg";
import card from "../../assets/card.svg";
import { Button } from "../ui/Button/Button";

export const Footer = () => {
  return (
    <footer className="bg-[#1E2025] text-[#ccc] p-10 text-sm border border-[#2E3139] rounded-lg">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <div className="flex flex-col gap-4 text-[#FDFDFD]">
          <span className="font-bold text-white">HIRO VPN</span>
          <a href="#" className="hover:text-white">
            FAQ
          </a>
          <a href="#" className="hover:text-white">
            Тарифы
          </a>
          <a href="#" className="hover:text-white">
            Блог
          </a>
          <a href="#" className="hover:text-white">
            Роутеры
          </a>
          <a href="#" className="hover:text-white">
            Партнёрам
          </a>
          <a href="#" className="hover:text-white">
            Аккаунт
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-bold text-white">Скачать</span>
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <img src={appstore} alt="ios" /> IOS
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <img src={googleplay} alt="android" /> Android
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <img src={androidtv} alt="android" /> Android TV
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <img src={windows} alt="windows" /> Windows
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <img src={macos} alt="macos" /> Mac OS
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <img src={linux} alt="linux" /> Linux
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <span className="font-bold text-white">Способы оплаты</span>
            <ul className="mt-2 flex flex-col gap-2">
              <li className="flex items-center">
                {" "}
                <img src={sbp} alt="sbp" className="flex items-center" /> СБП
              </li>
              <li className="flex items-center">
                <img
                  src={sberpay}
                  alt="sberpay"
                  className="flex items-center"
                />{" "}
                Sberpay
              </li>
              <li className="flex items-center">
                <img src={tpay} alt="tpay" className="flex items-center" />{" "}
                Tinkoff Pay
              </li>
              <li className="flex items-center">
                <img src={card} alt="card" /> Банковская карта
              </li>
              <li className="flex items-center">
                <img src={tether} alt="tether" /> Криптовалюта
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-white">Поддержка 24/7</span>
          <Button
            variant="success"
            className="flex items-center justify-center gap-2"
          >
            Telegram <img src={telegram} alt="telegram" />
          </Button>
          <a href="#" className="hover:text-white">
            {" "}
            Публичная оферта{" "}
          </a>
          <a href="#" className="hover:text-white">
            {" "}
            Пользовательское соглашение
          </a>
        </div>
      </div>

      <div className="mt-6 pt-6 text-center text-[#888] border-t border-[#2E3139]">
        © 2025 Wolle Development Limited. Все права защищены.
      </div>
    </footer>
  );
};
