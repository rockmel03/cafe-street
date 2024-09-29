import logo from "../../assets/logo_coffe.svg";
import cartIcon from "../../assets/cart-icon.svg";
import { Searchbar } from "./Searchbar";
import { Links } from "./Links";
import { Layout } from "../Layout";

export const Navbar = () => {
  return (
    <nav>
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
