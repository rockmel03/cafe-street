import heroBg from "../../assets/Images/img-hero.png";
import bgHeroBg from "../../assets/Images/coffee_seeds.png";

export const HeroRight = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="relative max-w-[600px]">
        <img
          src={bgHeroBg}
          alt=""
          className="w-full h-full absolute z-[2] translate-x-1/2 -translate-y-1/2"
        />
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-contain object-center relative z-[10]"
        />
      </div>
    </div>
  );
};
