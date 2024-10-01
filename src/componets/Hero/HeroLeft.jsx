import cartIcon from "../../assets/icons/cart-icon.svg";

export const HeroLeft = () => {
  return (
    <div className="tablet:flex-1 flex flex-col gap-2 items-center tablet:items-start text-center tablet:text-left">
      <h1 className="text-[2em] laptop:text-[3em] font-medium">
        Enjoy your <span className="text-primary">coffee</span> <br />
        before your activity
      </h1>
      <p className="text-[1.125em] text-light">
        Boost your productivity and build your <br />
        mood with a glass of coffee in the morning
      </p>
      <div className="flex gap-3 text-primary font-medium ">
        <button className="px-5 py-3 text-[14px] bg-secondary active:scale-95 ease duration-150 text-primary rounded-full flex items-center gap-2 ">
          Order now{" "}
          <span className="inline-block w-[22px] aspect-square bg-primary text-white p-1 rounded-full">
            <img src={cartIcon} alt="" />
          </span>
        </button>
        <button className="px-5 py-3 text-[14px] rounded-full ease duration-200">
          More Menu
        </button>
      </div>
    </div>
  );
};
