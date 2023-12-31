import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar({ handleClick }) {
  return (
    <motion.nav
      className={`z-10 mobile:absolute mobile:left-0 mobile:top-[7rem] mobile:w-full  mobile:bg-white`}
      initial={{ opacity: 0, scaleY: 0.5 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0.5 }}
    >
      <ul className="flex items-center gap-[3.7rem] uppercase mobile:flex-col mobile:gap-0 mobile:px-8 mobile:pb-8 mobile:pt-12">
        <li
          className="text-[1.2rem] font-bold tracking-[0.2rem] transition-all duration-300 hover:opacity-30 mobile:pb-[2rem]"
          onClick={handleClick}
        >
          <Link to="/stories">Stories</Link>
        </li>
        <li
          className="text-[1.2rem] font-bold tracking-[0.2rem] transition-all duration-300 hover:opacity-30 mobile:pb-[2rem]"
          onClick={handleClick}
        >
          <Link to="/features">features</Link>
        </li>
        <li
          className="text-[1.2rem] font-bold tracking-[0.2rem] transition-all duration-300 hover:opacity-30 mobile:w-full mobile:border-b mobile:border-black mobile:pb-[2rem] mobile:text-center"
          onClick={handleClick}
        >
          <Link to="/pricing">pricing</Link>
        </li>
        <li
          className="hidden bg-black px-10 py-5 text-[1.2rem] font-bold tracking-[0.2rem] text-white mobile:mt-8 mobile:block"
          onClick={handleClick}
        >
          <Link to="/">Get an invite</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
