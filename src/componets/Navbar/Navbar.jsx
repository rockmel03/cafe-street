import logo from "../../assets/icons/logo_coffe.svg";
import cartIcon from "../../assets/icons/cart-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import MenuIcon from "../../assets/icons/menu-bar.svg";
import { Searchbar } from "./Searchbar";
import { Links } from "./Links";
import { Layout } from "../Layout";

export const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-1/2 -translate-x-1/2 z-[99]">
      <Layout className="w-full flex items-center justify-between h-[10vh] ">
          <img src={MenuIcon} alt="" className="w-[28px] h-[28px] tablet:hidden" />
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[135px] h-[41px] object-contain"
          />
        </div>
        <Links />
        <div className="flex gap-2 tablet:gap-3 laptop:gap-10 items-center">
          <img src={searchIcon} alt="searchIcon" className="w-[25px] h-[25px] laptop:hidden" />
          <Searchbar />
          <div className="cart-icon">
            <img src={cartIcon} alt="cart" />
          </div>
        </div>
      </Layout>
    </nav>
  );
};
