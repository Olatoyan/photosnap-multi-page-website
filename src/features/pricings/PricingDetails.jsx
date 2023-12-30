import Beta from "../../ui/Beta";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import PricingComparison from "./PricingComparison";
import PricingHeroSection from "./PricingHeroSection";
import PricingPlans from "./PricingPlans";

function PricingDetails() {
  return (
    <>
      <Header />
      <PricingHeroSection />
      <PricingPlans />
      <PricingComparison />
      <Beta />
      <Footer />
    </>
  );
}

export default PricingDetails;
