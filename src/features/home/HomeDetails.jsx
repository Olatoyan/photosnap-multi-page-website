import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import BeautifulStories from "./BeautifulStories";
import DesignedSection from "./DesignedSection";
import HeroSection from "./HeroSection";
import HomeFeatures from "./HomeFeatures";
import HomeStories from "./HomeStories";

function HomeDetails() {
  return (
    <>
      <Header />
      <HeroSection />
      <BeautifulStories />
      <DesignedSection />
      <HomeStories />
      <HomeFeatures />
      <Footer />
    </>
  );
}

export default HomeDetails;
