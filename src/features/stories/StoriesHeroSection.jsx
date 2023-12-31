import Cta from "../../ui/Cta";
import Reveal from "../../ui/Reveal";

function StoriesHeroSection() {
  const bgImage =
    window.innerWidth >= 1024
      ? "url(./stories/desktop/moon-of-appalacia.jpg)"
      : window.innerWidth <= 700
        ? "none"
        : "url(./stories/tablet/moon-of-appalacia.jpg)";

  return (
    <section
      style={{
        backgroundImage: bgImage,
      }}
      className="relative bg-repeat-round px-44 py-48 text-white mobile:px-0 mobile:py-0"
    >
      <div className="relative z-[2] mobile:flex mobile:flex-col">
        <div className="hidden mobile:block">
          <img
            src="./stories/mobile/moon-of-appalacia.jpg"
            alt="moon of appalacia"
            className="w-full"
          />
        </div>
        <div className="mobile:bg-black mobile:px-8 mobile:pb-48 mobile:pt-12">
          <Reveal>
            <h2 className="pb-[2.4rem] text-[1.2rem] font-bold uppercase tracking-[0.2rem] mobile:pb-[1.6rem]">
              Last month&apos;s featured story
            </h2>
          </Reveal>
          <Reveal>
            <h1 className="pb-[1.6rem] text-[4rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem] mobile:text-[3.2rem] mobile:leading-[4rem] mobile:tracking-[0.3333rem]">
              Hazy full <br /> moon of <br />
              Appalachia
            </h1>
          </Reveal>
          <Reveal>
            <p className="pb-[2.4rem] text-[1.3rem]">
              <span className="pr-4 opacity-75">March 2nd 2020</span>
              <span>by John Appleseed</span>
            </p>
          </Reveal>
          <Reveal>
            <p className="max-w-[39rem] pb-[2.4rem] text-[1.5rem] leading-[2.5rem] opacity-60">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called &quot;mountains,&quot;
              especially in eastern Kentucky and West Virginia, and while the
              ridges are not high, the terrain is extremely rugged.
            </p>
          </Reveal>
          <Reveal>
            <Cta color="white" text="read the story" />
          </Reveal>
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-30"></div>
    </section>
  );
}

export default StoriesHeroSection;
