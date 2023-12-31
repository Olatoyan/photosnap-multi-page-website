import Reveal from "../../ui/Reveal";
import RevealImg from "../../ui/RevealImg";

function FeaturesHeroSection() {
  return (
    <section className="relative flex items-center bg-black mobile:flex-col">
      <div className="basis-[61rem] px-44 text-white tablet:px-20 mobile:basis-0 mobile:px-8 mobile:py-[7.2rem]">
        <Reveal>
          <h1 className="text-[4rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem] mobile:text-[3.2rem] mobile:leading-[4rem] mobile:tracking-[0.3333rem]">
            Features
          </h1>
        </Reveal>
        <Reveal>
          <p className="max-w-[39rem] pt-8 text-[1.5rem] leading-[2.5rem] opacity-60">
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photographers who wanted to share
            their stories.
          </p>
        </Reveal>
      </div>
      <RevealImg position={"right"}>
        <picture>
          <source
            media="(max-width: 43.75em)"
            srcSet="./features/mobile/hero.jpg"
          />
          <source
            media="(max-width: 64em)"
            srcSet="./features/tablet/hero.jpg"
          />
          <img
            src="./features/desktop/hero.jpg"
            alt="hero image"
            className="w-full"
          />
        </picture>
      </RevealImg>
      <div className="bg-lin-grad absolute left-0 h-[14.4rem] w-[0.6rem] mobile:left-10 mobile:top-[49.5%] mobile:h-[0.6rem] mobile:w-[12.8rem]"></div>
    </section>
  );
}

export default FeaturesHeroSection;
