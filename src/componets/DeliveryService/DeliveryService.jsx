import { Layout } from "../Layout";
import dService1 from "../../assets/Images/service_D1.png";
import dService2 from "../../assets/Images/service_D2.png";
import dService3 from "../../assets/Images/service_D3.png";

const deliveryServiceData = [
  {
    title: "choose your coffee",
    description: "there are 20+ coffees for you",
    image: dService1,
  },
  {
    title: "we delivery it to you",
    description: "Choose delivery service",
    image: dService2,
  },
  {
    title: "Enjoy your coffee",
    description: "Choose delivery service",
    image: dService3,
  },
];

export const DeliveryService = () => {
  return (
    <section>
      <Layout>
        <h3 className="text-[2em] font-semibold">
          How to use delivery{" "}
          <span className="inline-block border-b-4 border-primary leading-none">
            service
          </span>
        </h3>
        <div className="flex items-center justify-around py-20">
          {deliveryServiceData.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2 items-center ">
              <img
                src={item.image}
                alt={item.title}
                className="w-[159px] aspect-square"
              />
              <h3 className="font-semibold text-[1.5em]">{item.title}</h3>
              <p className="text-[1.125em] text-light">{item.description}</p>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
};
