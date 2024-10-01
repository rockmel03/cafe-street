import { Layout } from "../Layout";
import { Card } from "../Cards/Card";
import coffee from "../../assets/Images/coffee_seeds.png";
import { popularData } from "../../Constants";

export const Popular = () => {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-1/2 bg-cream relative">
        <Layout>
          <img
            src={coffee}
            alt="coffe seeds"
            className="-translate-x-44 -translate-y-32 z-[1] h-full absolute left-0"
          />
        </Layout>
        <div className="relative z-[2]">
          <Layout>
            <h2 className="text-[2em] font-semibold leading-none mb-10">
              Popular{" "}
              <span className="inline-block border-b-4 border-primary ">
                Now
              </span>
            </h2>
            <section className="relative w-full flex items-center gap-3 justify-around px-10">
              <div className=" absolute z-[1] rounded-[4rem] -bottom-[20%] left-0 w-full h-[90%] bg-[#F9D9AA]" />
              {popularData.map((item, idx) => (
                <div key={idx} className="relative z-[2]">
                  <Card data={item} />
                </div>
              ))}
            </section>
          </Layout>
        </div>
      </div>
    </section>
  );
};
