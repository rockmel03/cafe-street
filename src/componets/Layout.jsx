export const Layout = ({ children, className }) => {
  return (
    <div className={`container mx-auto w-full px-[2vw] laptop:px-[5vw] ${className}`}>{children}</div>
  );
};
