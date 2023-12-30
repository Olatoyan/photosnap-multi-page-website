import { motion } from "framer-motion";

function StoriesItems({ imageDesktop, imageMobile, title, author, date }) {
  const bgImage = window.innerWidth >= 500 ? imageDesktop : imageMobile;

  return (
    <motion.div
      className="hover:before:bg-lin-grad relative flex h-[50rem] cursor-pointer flex-col justify-end bg-repeat-round p-16 text-white hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:h-[0.6rem] hover:before:w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
      whileHover={{ translateY: "-3rem" }}
    >
      <div className="z-10 border-b border-solid border-white border-opacity-25 pb-7">
        <p className="text-[1.3rem] opacity-60">{date}</p>
        <h3 className="text-[1.8rem] font-bold leading-[2.5rem]">{title}</h3>
        <h4 className="text-[1.3rem] leading-[normal] opacity-60">
          by {author}
        </h4>
      </div>

      <div className="z-10 flex items-center justify-between pt-8">
        <p className="text-[1.2rem] font-bold uppercase tracking-[0.2rem]">
          Read Story
        </p>
        <svg className="h-[1.4rem] w-[4.5rem] stroke-white">
          <use xlinkHref="./shared/desktop/arrow.svg#arrow"></use>
        </svg>
      </div>

      <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-30"></div>
    </motion.div>
  );
}

export default StoriesItems;
