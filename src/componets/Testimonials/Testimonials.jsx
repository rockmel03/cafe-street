import bgImg from "../../assets/Images/about-bg-image.jpg";
import { Layout } from "../Layout";
import testImg1 from "../../assets/Images/testimonial1.jpg";
import testImg2 from "../../assets/Images/testimonial2.jpg";
import testImg3 from "../../assets/Images/testimonial3.jpg";

const testimonialData = [
  {
    name: "Naura",
    comment: "I really love the cappucino, the coffee was very smooth",
    image: testImg1,
  },
  {
    name: "John",
    comment: "this coffee shop is very convenient ",
    image: testImg2,
  },
  {
    name: "Azura",
    comment: "the coffee menu here is very much",
    image: testImg3,
  },
];

export const Testimonials = () => {
  return (
    <section className="relative">
      <div className="rounded-[0_3rem_3rem_0] overflow-hidden w-[80%]">
        <img src={bgImg} alt="bg" className=" w-full h-full object-cover" />
      </div>
      <Layout className="absolute top-0 w-full h-full bg-zinc-50/15 flex items-center gap-10">
        <div>
          <h2 className="text-[2em] font-semibold">What they say about us</h2>
          <p className="text-[1.125em] text-light">
            We always provide the best service <br />
            and always maintain the quality of <br />
            coffee
          </p>
        </div>
        <div className="flex gap-5">
          {testimonialData.length > 0 &&
            testimonialData.map((data, idx) => (
              <article key={idx} className="relative w-[257.9px] mr-5">
                <div>
                  <img src={data.image} alt="img" />
                </div>
                <div className="bg-[#FFD39062] p-2 rounded-md translate-x-[10%] absolute bottom-5">
                  <div className="rounded-md bg-[#FFD390] p-2">
                    <h4 className="text-[1.125em] font-medium">{data.name}</h4>
                    <p className="text-[.875em] leading-[1.1]">
                      {data.comment}
                    </p>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </Layout>
    </section>
  );
};
