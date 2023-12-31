import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function RevealImg({ children, position }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: position === "left" ? -75 : 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.4, bounce: 0.5, damping: 15 }}
      className="w-[61.5%] mobile:-order-1 mobile:w-full"
    >
      {children}
    </motion.div>
  );
}

export default RevealImg;
