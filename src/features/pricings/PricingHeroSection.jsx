import Reveal from "../../ui/Reveal";
import RevealImg from "../../ui/RevealImg";

function PricingHeroSection() {
  return (
    <section className="relative flex items-center bg-black mobile:flex-col">
      <div className="basis-[61rem] px-44 text-white tablet:px-20 mobile:basis-0 mobile:px-8 mobile:py-[7.2rem]">
        <Reveal>
          <h1 className="text-[4rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem] mobile:text-[3.2rem] mobile:leading-[4rem] mobile:tracking-[0.3333rem]">
            Pricing
          </h1>
        </Reveal>
        <Reveal>
          <p className="max-w-[39rem] pt-8 text-[1.5rem] leading-[2.5rem] opacity-60">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </Reveal>
      </div>
      <RevealImg>
        <picture>
          <source
            media="(max-width: 43.75em)"
            srcSet="./pricing/mobile/hero.jpg"
          />
          <source
            media="(max-width: 64em)"
            srcSet="./pricing/tablet/hero.jpg"
          />
          <img
            src="./pricing/desktop/hero.jpg"
            alt="hero image"
            className="w-full"
          />
        </picture>
      </RevealImg>
      <div className="bg-lin-grad absolute left-0 h-[14.4rem] w-[0.6rem]"></div>
    </section>
  );
}

export default PricingHeroSection;
