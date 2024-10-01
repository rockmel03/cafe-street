import { Layout } from "../Layout";
import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";

export const Hero = () => {
  return (
    <section className="bg-cream text-black overflow-hidden">
      <Layout className="w-full min-h-screen flex items-center flex-col-reverse tablet:flex-row justify-around py-[10vh] tablet:py-0">
        <HeroLeft />
        <HeroRight />
      </Layout>
    </section>
  );
};
