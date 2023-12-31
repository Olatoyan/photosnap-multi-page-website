import { motion, useAnimation, useInView } from "framer-motion";
import StoriesItems from "../../ui/StoriesItems";
import { useEffect, useRef } from "react";

const items = [
  {
    imageDesktop: "./stories/desktop/mountains.jpg",
    imageTablet: "./stories/tablet/mountains.jpg",
    imageMobile: "./stories/mobile/mountains.jpg",
    title: "The Mountains",
    author: "John Appleseed",
  },
  {
    imageDesktop: "./stories/desktop/cityscapes.jpg",
    imageTablet: "./stories/tablet/cityscapes.jpg",
    imageMobile: "./stories/mobile/cityscapes.jpg",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
  },
  {
    imageDesktop: "./stories/desktop/18-days-voyage.jpg",
    imageTablet: "./stories/tablet/18-days-voyage.jpg",
    imageMobile: "./stories/mobile/18-days-voyage.jpg",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
  },
  {
    imageDesktop: "./stories/desktop/architecturals.jpg",
    imageTablet: "./stories/tablet/architecturals.jpg",
    imageMobile: "./stories/mobile/architecturals.jpg",
    title: "Architecturals",
    author: "Samantha Brooke",
  },
];

function HomeStories() {
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
      duration: 0.5,
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
      className="grid grid-cols-4 desktop:grid-cols-2 mobileSmall:grid-cols-1"
      ref={ref}
      {...staggeredChildrenTransition}
    >
      {items.map((item) => (
        <StoriesItems
          key={item.title}
          imageDesktop={item.imageDesktop}
          imageTablet={item.imageTablet}
          imageMobile={item.imageMobile}
          title={item.title}
          author={item.author}
          variants={listItemVariants}
        />
      ))}
    </motion.section>
  );
}

export default HomeStories;
