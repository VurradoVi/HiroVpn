type ContainerProps = {
  children: React.ReactNode;
  size?: "sm" | "lg" | "full";
};

export const Container = ({ children, size = "lg" }: ContainerProps) => {
  const sizeClasses = {
    sm: "max-w-[640px]",
    lg: "max-w-[1200px]",
    full: "max-w-full px-0",
  };

  return (
    <div className={`w-full mx-auto ${sizeClasses[size]} px-8`}>{children}</div>
  );
};
