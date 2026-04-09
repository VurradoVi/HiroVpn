type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success";
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  variant = "primary",
  isActive,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  const baseClasses = `cursor-pointer font-inherit font-normal outline-none text-xl ${
    disabled ? "opacity-50 cursor-none" : ""
  }`;

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-transparent text-inherit py-[8px] px-[67px] hover:text-[#ff0633]";
      case "secondary":
        return "bg-[#ff0633] text-[#fdfdfd] py-[8px] px-[52px] border border-[#ff0633] rounded-[40px] hover:text-[#ff0633] hover:bg-transparent";
      case "success":
        return "bg-white text-[#1E2025] py-[8px] px-[52px] border border-white rounded-[40px] hover:bg-transparent hover:text-white";
      default:
        return "bg-transparent text-inherit py-[8px] px-[67px] hover:text-[#ff0633]";
    }
  };

  const activeClasses = isActive
    ? "border border-[#fdfdfd] rounded-[40px] text-[#fdfdfd]"
    : "";

  return (
    <button
      className={`${baseClasses} ${getVariantClasses()} ${activeClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
