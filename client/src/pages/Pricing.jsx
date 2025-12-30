import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";

export default function Pricing() {

  return (
    <section className="relative min-h-screen overflow-hidden text-lightGray">

      {/*Atmos Bg*/}
      <div className="absolute inset-0 -z-10 hero-bg" />

      <Navbar />

      <main className="relative z-10 flex items-center justify-center min-h-[90vh] px-6">
        <PricingCard />
      </main>

    </section>
  );
}
