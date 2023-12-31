import { motion, useAnimation } from "framer-motion";
import Cta from "../../ui/Cta";
import Reveal from "../../ui/Reveal";
import RevealImg from "../../ui/RevealImg";

function BeautifulStories() {
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="flex items-center mobile:flex-col"
      initial="hidden"
      animate={"visible"}
      variants={variants}
      transition={{ duration: 0.6 }}
      onAnimationStart={() => controls.start("visible")}
    >
      <RevealImg position="left">
        <picture>
          <source
            media="(max-width: 43.75em)"
            srcSet="./home/mobile/beautiful-stories.jpg"
          />
          <source
            media="(max-width: 64em)"
            srcSet="./home/tablet/beautiful-stories.jpg"
          />
          <img
            src="./home/desktop/beautiful-stories.jpg"
            alt="beautiful stories image"
            className="w-full"
          />
        </picture>
      </RevealImg>

      <div className="basis-[61rem] px-44 tablet:px-20 mobile:basis-0 mobile:px-8 mobile:py-[7.2rem]">
        <Reveal>
          <h1 className="text-[4rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem] mobile:text-[3.2rem] mobile:leading-[4rem] mobile:tracking-[0.3333rem] ">
            Beautiful <br /> stories <br /> every time
          </h1>
        </Reveal>
        <Reveal>
          <p className="max-w-[39rem] pb-20 pt-8 text-[1.5rem] leading-[2.5rem]">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
        </Reveal>
        <Reveal>
          <Cta color="black" text="View The stories" to="stories" />
        </Reveal>
      </div>
    </motion.section>
  );
}

export default BeautifulStories;
