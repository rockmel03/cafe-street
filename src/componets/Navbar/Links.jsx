export const Links = () => {
  return (
    <ul className="hidden tablet:flex items-center gap-2 tablet:gap-3 laptop:gap-5">
      {["About us", "Our Product", "Delivery"].map((item, i) => (
        <li key={i}>
          <a href="#" className="hover:text-primary laptop:text-[18px]">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
