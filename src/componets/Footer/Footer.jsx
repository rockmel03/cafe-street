import { Layout } from "../Layout";
import footerBg from "../../assets/Images/footer-bg.png";

export const Footer = () => {
  return (
    <footer className=" py-10">
      <Layout
        className={`relative min-h-[60vh] flex items-center justify-center flex-col gap-5`}
      >
        <img src={footerBg} alt="" className="absolute" />
        <h3 className="relative z-[2] text-white font-semibold text-[2em]">
          Subscribe to get 50% discount price
        </h3>
        <form className="relative z-[2] bg-white text-black p-2 rounded-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="px-2 text-[.875em] font-medium outline-none bg-transparent text-inherit"
          />
          <button
            type="submit"
            className="bg-secondary text-white px-5 py-2 rounded-full text-[.875em] font-medium"
          >
            Order now
          </button>
        </form>
      </Layout>
    </footer>
  );
};
