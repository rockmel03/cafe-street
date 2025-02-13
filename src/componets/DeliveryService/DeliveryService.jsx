import { Layout } from "../Layout";
import { deliveryServiceData } from "../../Constants";

export const DeliveryService = () => {
  return (
    <section className="py-20 laptop:py-5">
      <Layout>
        <h3 className="text-[2em] font-semibold text-center tablet:text-left">
          How to use delivery{" "}
          <span className="inline-block border-b-4 border-primary leading-none">
            service
          </span>
        </h3>
        <div className="flex items-center justify-around py-20 flex-col laptop:flex-row gap-10">
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
