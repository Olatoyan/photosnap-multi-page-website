import { motion } from "framer-motion";
import Reveal from "./Reveal";

function FeaturesItem({ img, title, text, variants }) {
  return (
    <motion.div className="flex flex-col items-center" variants={variants}>
      <Reveal>
        <img src={img} alt={title} className="w-[7.2rem] pb-20" />
      </Reveal>
      <div className="mt-auto text-center">
        <Reveal>
          <h3 className="pb-7 text-[1.8rem] font-bold leading-[2.5rem]">
            {title}
          </h3>
        </Reveal>
        <Reveal>
          <p className="text-[1.5rem] leading-[2.5rem]">{text}</p>
        </Reveal>
      </div>
    </motion.div>
  );
}

export default FeaturesItem;
