import { Card } from "../Cards/Card";
import { Layout } from "../Layout";
import productImg1 from "../../assets/Images/product1.jpg";
import productImg2 from "../../assets/Images/product2.jpg";
import productImg3 from "../../assets/Images/product3.jpg";
import productImg4 from "../../assets/Images/product4.jpg";
import productImg5 from "../../assets/Images/product5.jpg";
import productImg6 from "../../assets/Images/product6.jpg";

const ProductData = [
  {
    image: productImg1,
    name: "Sandwich",
    description: "bread with meat and vegetables",
    price: 12,
    rating: 4.8,
  },
  {
    image: productImg2,
    name: "Hot Milk",
    description: "Hot Milk with less sugar",
    price: 10,
    rating: 4.4,
  },
  {
    image: productImg3,
    name: "Coffe Ice Cream",
    description: "Coffe with ice cream vanilla",
    price: 12,
    rating: 4.6,
  },
  {
    image: productImg4,
    name: "Cappucino",
    description: "Hot Cappucino",
    price: 12,
    rating: 4.8,
  },
  {
    image: productImg5,
    name: "Moccacinno",
    description: "Hot Moccacino ",
    price: 10,
    rating: 4.5,
  },
  {
    image: productImg6,
    name: "Waffle Ice Crem",
    description: "Wafle with Ice cream",
    price: 15,
    rating: 4.7,
  },
];

export const Menu = () => {
  return (
    <div className="py-20">
      <Layout>
        <h3 className="text-[2em] font-semibold">
          Special menu{" "}
          <span className="inline-block border-b-4 border-primary leading-none">
            for you
          </span>
        </h3>
        <section className="w-full flex flex-wrap items-center gap-3 justify-around px-10">
          {ProductData.length > 0 &&
            ProductData.map((item, idx) => (
              <Card key={idx} data={item} layout={2} />
            ))}
        </section>
      </Layout>
    </div>
  );
};
