import { useEffect, useRef } from "react";
import StoriesItems from "../../ui/StoriesItems";
import { useAnimation, useInView, motion } from "framer-motion";

const items = [
  {
    imageDesktop: "./stories/desktop/mountains.jpg",
    imageMobile: "./stories/mobile/mountains.jpg",
    title: "The Mountains",
    author: "John Appleseed",
    date: "April 16th 2020",
  },
  {
    imageDesktop: "./stories/desktop/cityscapes.jpg",
    imageMobile: "./stories/mobile/cityscapes.jpg",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    date: "April 14th 2020",
  },
  {
    imageDesktop: "./stories/desktop/18-days-voyage.jpg",
    imageMobile: "./stories/mobile/18-days-voyage.jpg",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    date: "April 11th 2020",
  },
  {
    imageDesktop: "./stories/desktop/architecturals.jpg",
    imageMobile: "./stories/mobile/architecturals.jpg",
    title: "Architecturals",
    author: "Samantha Brooke",
    date: "April 9th 2020",
  },
  {
    imageDesktop: "./stories/desktop/world-tour.jpg",
    imageMobile: "./stories/mobile/world-tour.jpg",
    title: "World Tour 2019",
    author: "Timothy Wagner",
    date: "April 7th 2020",
  },
  {
    imageDesktop: "./stories/desktop/unforeseen-corners.jpg",
    imageMobile: "./stories/mobile/unforeseen-corners.jpg",
    title: "Unforeseen Corners",
    author: "William Malcolm",
    date: "April 3rd 2020",
  },
  {
    imageDesktop: "./stories/desktop/king-on-africa.jpg",
    imageMobile: "./stories/mobile/king-on-africa.jpg",
    title: "King on Africa: Part II",
    author: "Tim Hillenburg",
    date: "March 29th 2020",
  },
  {
    imageDesktop: "./stories/desktop/trip-to-nowhere.jpg",
    imageMobile: "./stories/mobile/trip-to-nowhere.jpg",
    title: "The Trip to Nowhere",
    author: "Felicia Rourke",
    date: "March 21st 2020",
  },
  {
    imageDesktop: "./stories/desktop/rage-of-the-sea.jpg",
    imageMobile: "./stories/mobile/rage-of-the-sea.jpg",
    title: "Rage of the Sea",
    author: "Mohammed Abdul",
    date: "March 19th 2020",
  },
  {
    imageDesktop: "./stories/desktop/running-free.jpg",
    imageMobile: "./stories/mobile/running-free.jpg",
    title: "Running Free",
    author: "Michelle",
    date: "March 16th 2020",
  },
  {
    imageDesktop: "./stories/desktop/behind-the-waves.jpg",
    imageMobile: "./stories/mobile/behind-the-waves.jpg",
    title: "Behind the Waves",
    author: "Lamarr Wilson",
    date: "March 11th 2020",
  },
  {
    imageDesktop: "./stories/desktop/calm-waters.jpg",
    imageMobile: "./stories/mobile/calm-waters.jpg",
    title: "Calm Waters",
    author: "Samantha Brooke",
    date: "March 9th 2020",
  },
  {
    imageDesktop: "./stories/desktop/milky-way.jpg",
    imageMobile: "./stories/mobile/milky-way.jpg",
    title: "The Milky Way",
    author: "Benjamin Cruz",
    date: "March 5th 2020",
  },
  {
    imageDesktop: "./stories/desktop/dark-forest.jpg",
    imageMobile: "./stories/mobile/dark-forest.jpg",
    title: "Night at The Dark Forest",
    author: "Mohammed Abdul",
    date: "March 4th 2020",
  },
  {
    imageDesktop: "./stories/desktop/somwarpet.jpg",
    imageMobile: "./stories/mobile/somwarpet.jpg",
    title: "Somwarpet’s Beauty",
    author: "Michelle",
    date: "March 1st 2020",
  },
  {
    imageDesktop: "./stories/desktop/land-of-dreams.jpg",
    imageMobile: "./stories/mobile/land-of-dreams.jpg",
    title: "Land of Dreams",
    author: "William Malcolm",
    date: "February 25th 2020",
  },
];

function StoriesSection() {
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
          date={item.date}
          variants={listItemVariants}
        />
      ))}
    </motion.section>
  );
}

export default StoriesSection;
