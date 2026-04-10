import { Button } from "../ui/Button/Button";

export const Header = () => {
  return (
    <header className="flex items-center h-20 relative">
      <div className="xl:hidden flex items-center">
        <button className="text-2xl">☰</button>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 xl:static xl:translate-x-0 flex items-center cursor-pointer hover:text-[#ff0633]">
        <div className="text-[44px]">HIRO</div>
        <span className="text-lg -rotate-90 tracking-tighter -ml-1">VPN</span>
      </div>

      <div className="hidden xl:flex items-center gap-2 ml-auto">
        <Button>FAQ</Button>
        <Button>Тарифы</Button>
        <Button variant="secondary">Скачать</Button>
        <Button>Блог</Button>
        <Button isActive>Аккаунт</Button>
      </div>

      <div className="hidden md:flex ml-auto xl:ml-0">
        <Button>
          <div className="flex gap-2.5 items-center cursor-pointer">
            РУ
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0005 12.2565L5.57715 7.83316L6.16715 7.24316L10.0005 11.0765L13.8338 7.24316L14.4238 7.83316L10.0005 12.2565Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Button>
      </div>
    </header>
  );
};
