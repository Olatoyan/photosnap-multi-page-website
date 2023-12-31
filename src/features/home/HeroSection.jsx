import Cta from "../../ui/Cta";
import Reveal from "../../ui/Reveal";
import RevealImg from "../../ui/RevealImg";

function HeroSection() {
  return (
    <section className="relative flex items-center bg-black mobile:flex-col">
      <div className="basis-[61rem] px-44 text-white tablet:px-20 mobile:basis-0 mobile:px-8 mobile:py-[7.2rem]">
        <Reveal>
          <h1 className="text-[4rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem] mobile:text-[3.2rem] mobile:leading-[4rem] mobile:tracking-[0.3333rem]">
            Create and <br /> share your <br /> photo stories.
          </h1>
        </Reveal>
        <Reveal>
          <p className="max-w-[39rem] pb-20 pt-8 text-[1.5rem] leading-[2.5rem]">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
        </Reveal>

        <Reveal>
          <Cta color="white" text="get an invite" />
        </Reveal>
      </div>
      <RevealImg position={"right"}>
        {/* <div> */}
        <picture>
          <source
            media="(max-width: 43.75em)"
            srcSet="./home/mobile/create-and-share.jpg"
          />
          <source
            media="(max-width: 64em)"
            srcSet="./home/tablet/create-and-share.jpg"
          />
          <img
            src="./home/desktop/create-and-share.jpg"
            alt="hero image"
            className="w-full"
          />
        </picture>
        {/* </div> */}
      </RevealImg>
      <div className="bg-lin-grad absolute left-0 h-[30.4rem] w-[0.6rem]"></div>
    </section>
  );
}

export default HeroSection;
