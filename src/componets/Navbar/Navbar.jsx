import logo from "../../assets/logo_coffe.svg";
import cartIcon from "../../assets/cart-icon.svg";
import { Searchbar } from "./Searchbar";
import { Links } from "./Links";
import { Layout } from "../Layout";

export const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-1/2 -translate-x-1/2 z-[99]">
      <Layout className="w-full flex items-center justify-between h-[10vh] ">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[135px] h-[41px] object-contain"
          />
        </div>
        <Links />
        <div className="flex gap-10 items-center">
          <Searchbar />
          <div className="cart-icon">
            <img src={cartIcon} alt="cart" />
          </div>
        </div>
      </Layout>
    </nav>
  );
};
