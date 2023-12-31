import { useEffect, useRef } from "react";
import FeaturesItem from "../../ui/FeaturesItem";
import { motion, useAnimation, useInView } from "framer-motion";

const items = [
  {
    img: "./features/desktop/responsive.svg",
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    img: "./features/desktop/no-limit.svg",
    title: "No Photo Upload Limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    img: "./features/desktop/embed.svg",
    title: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
  },
];

function HomeFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const listItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      duration: 1,
      bounce: 0.5,
    },
  };

  const staggerContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggeredChildrenTransition = {
    variants: staggerContainerVariants,
    initial: "hidden",
    animate: mainControls,
  };

  return (
    <motion.section
      className="grid grid-cols-3 gap-12 px-[16.5rem] py-48 desktop:grid-cols-1 desktop:px-36 mobile:px-8"
      ref={ref}
      {...staggeredChildrenTransition}
    >
      {items.map((item) => (
        <FeaturesItem key={item.title} {...item} variants={listItemVariants} />
      ))}
    </motion.section>
  );
}

export default HomeFeatures;
