export const Layout = ({ children, className }) => {
  return (
    <div className={`container mx-auto w-full px-[5vw] ${className}`}>{children}</div>
  );
};
