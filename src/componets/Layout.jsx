export const Layout = ({ children, className }) => {
  return (
    <div className={`container mx-auto w-full px-[3vw] ${className}`}>{children}</div>
  );
};
