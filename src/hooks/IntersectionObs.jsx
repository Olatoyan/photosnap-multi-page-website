import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useScrollFadeIn = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animationControls, setAnimationControls] = useState({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  });

  useEffect(() => {
    if (inView) {
      setAnimationControls((prevControls) => ({
        ...prevControls,
        visible: { opacity: 1, y: 0 },
      }));
    } else {
      setAnimationControls((prevControls) => ({
        ...prevControls,
        hidden: { opacity: 0, y: 20 },
      }));
    }
  }, [inView]);

  return {
    ref,
    animationControls,
  };
};

export default useScrollFadeIn;
