import bgImg from "../../assets/Images/about-bg-image.jpg";
import { Layout } from "../Layout";
import { testimonialData } from "../../Constants";
import { Marquee } from "../Index";

export const Testimonials = () => {
  return (
    <section className="relative ">
      <div className=" absolute z-[-1] rounded-[0_3rem_3rem_0] overflow-hidden laptop:w-[80%] h-full">
        <img src={bgImg} alt="bg" className=" w-full h-full object-cover" />
      </div>
      <Layout className="realative w-full h-full bg-zinc-50/15 flex items-center gap-10  py-20 flex-col laptop:flex-row">
        <div className="text-center laptop:text-left laptop:w-[40%]">
          <h2 className="text-[2em] font-semibold">What they say about us</h2>
          <p className="text-[1.125em] text-light">
            We always provide the best service <br />
            and always maintain the quality of <br />
            coffee
          </p>
        </div>
        <div className="flex gap-5 laptop:w-[60%] overflow-auto w-full">
          <Marquee>
            {testimonialData.length > 0 &&
              testimonialData.map((data, idx) => (
                <div key={idx} className="flex-shrink-0">
                  <article className="relative w-[257.9px] mr-10">
                    <div>
                      <img src={data.image} alt="img" />
                    </div>
                    <div className="bg-[#FFD39062] p-2 rounded-md translate-x-[10%] absolute bottom-5">
                      <div className="rounded-md bg-[#FFD390] p-2">
                        <h4 className="text-[1.125em] font-medium">
                          {data.name}
                        </h4>
                        <p className="text-[.875em] leading-[1.1]">
                          {data.comment}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
          </Marquee>
        </div>
      </Layout>
    </section>
  );
};
