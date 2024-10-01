import {
  About,
  DeliveryService,
  Footer,
  Hero,
  Menu,
  Popular,
  Testimonials,
} from "./componets/Index";
import { Navbar } from "./componets/Navbar/Navbar";

export default function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Popular />
      <DeliveryService />
      <About />
      <Menu />
      <Testimonials />
      <Footer />
    </main>
  );
}
