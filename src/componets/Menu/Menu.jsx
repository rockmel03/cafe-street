import { Card } from "../Cards/Card";
import { Layout } from "../Layout";
import { ProductData } from "../../Constants";

export const Menu = () => {
  return (
    <div className="py-20">
      <Layout>
        <h3 className="text-[2em] font-semibold text-center laptop:text-left mb-10">
          Special menu{" "}
          <span className="inline-block border-b-4 border-primary leading-none">
            for you
          </span>
        </h3>
        <section className="w-full flex flex-wrap items-center gap-3 justify-around laptop:px-10">
          {ProductData.length > 0 &&
            ProductData.map((item, idx) => (
              <Card key={idx} data={item} layout={2} />
            ))}
        </section>
      </Layout>
    </div>
  );
};
