import "./Marquee.css"

export const Marquee = ({ children }) => {
  return (
    <div className="marquee flex overflow-hidden">
      <div className=" flex items-center">
        {[1, 1].map((_, key) => (
          <div
            key={key}
            className="flex items-center flex-shrink-0 animate-[marquee_20s_infinite_linear]"
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};
