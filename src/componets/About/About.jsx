import { Layout } from "../Layout";
import aboutCoffee from "../../assets/Images/about-coffee-9x16.jpg";
import aboutBg from "../../assets/Images/about-bg-image.jpg";

export const About = () => {
  return (
    <section
      style={{ backgroundImage: `url(${aboutBg})` }}
      className="bg-cover bg-center laptop:mt-28"
    >
      <Layout className="flex items-center gap-5 flex-col-reverse tablet:flex-row py-10 tablet:py-0">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-fit h-fit p-3 rounded-3xl bg-glass tablet:-translate-y-[10%]">
            <div className="rounded-md overflow-hidden">
              <img src={aboutCoffee} alt="about us" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center tablet:items-start gap-5 text-center tablet:text-left">
          <h2 className="text-[2em] font-semibold">
            About{" "}
            <span className="inline-block border-b-4 border-primary leading-none">
              us
            </span>
          </h2>
          <h3 className="font-semibold text-[1.3em] laptop:text-[1.5em]">
            We provide quality coffee,
            <br /> and ready to deliver.
          </h3>
          <p className="text-light text-[1.125em]">
            We are a company that makes and distributes
            <br className="hidden laptop:block" /> delicious drinks. our main
            product is made with <br className="hidden laptop:block" />a secret
            recipe and available in stores worldwide.
          </p>
          <button className="text-[.85em] px-4 py-2 rounded-full bg-secondary font-semibold text-[#F4AE26]">
            Get your coffee
          </button>
        </div>
      </Layout>
    </section>
  );
};
