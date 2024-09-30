import { DeliveryService, Hero, Popular } from "./componets/Index";
import { Navbar } from "./componets/Navbar/Navbar";

export default function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Popular />
      <DeliveryService />
    </main>
  );
}
