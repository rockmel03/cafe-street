import { Layout } from "../Layout";
import footerBg from "../../assets/Images/footer-bg.png";

export const Footer = () => {
  return (
    <footer className="py-5 laptop:py-10">
      <Layout
        className={`relative laptop:min-h-[60vh] flex items-center justify-center flex-col gap-5 p-10  `}
      >
        <img
          src={footerBg}
          alt=""
          className="absolute w-full h-full laptop:w-auto laptop:h-auto object-cover tablet:rounded-lg"
        />
        <h3 className="relative z-[2] text-white font-semibold text-[1.5em] laptop:text-[2em] text-center">
          Subscribe to get 50% discount price
        </h3>
        <form className="relative z-[2] bg-white text-black p-1 tablet:p-2 rounded-full flex items-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="px-2 text-[.875em] font-medium outline-none bg-transparent text-inherit w-[70%]"
          />
          <button
            type="submit"
            className="bg-secondary text-white px-5 py-2 rounded-full text-[.875em] font-medium whitespace-nowrap"
          >
            Order now
          </button>
        </form>
      </Layout>
    </footer>
  );
};
