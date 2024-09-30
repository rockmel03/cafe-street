import { Layout } from "../Layout";
import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";

export const Hero = () => {
  return (
    <section className="bg-cream text-black overflow-hidden">
      <Layout className="w-full min-h-screen flex items-center">
        <HeroLeft />
        <HeroRight />
      </Layout>
    </section>
  );
};
