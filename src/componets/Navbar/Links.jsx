export const Links = () => {
  return (
    <ul className="flex items-center gap-5">
      {["About us", "Our Product", "Delivery"].map((item, i) => (
        <li key={i}>
          <a href="#" className="hover:text-primary text-[18px]">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
