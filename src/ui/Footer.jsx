import {
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiFacebookFill,
} from "react-icons/ri";

import { Link } from "react-router-dom";
import Cta from "./Cta";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-stretch gap-40 bg-black px-[16.5rem] py-[6.4rem] text-white desktop:min-h-[29rem] desktop:items-stretch desktop:px-36 mobile:flex-col mobile:px-8 mobile:py-[5.6rem]">
      <div className="grid grid-cols-2 gap-x-40 desktop:grid-cols-1 mobile:justify-items-center mobile:gap-y-12">
        <img
          src="./shared/desktop/footer-logo.svg"
          alt="logo"
          className="desktop:row-start-1"
        />
        <Reveal>
          <div className="row-start-2 flex items-center gap-4 desktop:row-start-3 mobile:col-start-1 mobile:row-start-2">
            <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full bg-white hover:bg-fb">
              <RiFacebookFill size="2rem" color="black" />
            </div>
            <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full bg-white hover:bg-yt">
              <RiYoutubeFill size="1.5rem" color="black" />
            </div>
            <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full bg-white hover:bg-x">
              <RiTwitterFill size="2rem" color="black" />
            </div>
            <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full bg-white hover:bg-pin">
              <RiPinterestFill size="2rem" color="black" />
            </div>
            <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full bg-white hover:bg-ig">
              <RiInstagramFill size="2rem" color="black" />
            </div>
          </div>
        </Reveal>

        <div className="col-start-2 row-start-1 row-end-2 desktop:col-start-1 desktop:row-start-2 mobile:col-start-1 mobile:row-start-3 mobile:row-end-4">
          <ul className="flex flex-col items-start gap-7 desktop:flex-row mobile:flex-col mobile:items-center">
            <Reveal>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:opacity-30"
              >
                <Link to="/">Home</Link>
              </motion.li>
            </Reveal>
            <Reveal>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:opacity-30"
              >
                <Link to="/stories">Stories</Link>
              </motion.li>
            </Reveal>

            <Reveal>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:opacity-30"
              >
                <Link to="/features">Features</Link>
              </motion.li>
            </Reveal>

            <Reveal>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:opacity-30"
              >
                <Link to="/pricing">Pricing</Link>
              </motion.li>
            </Reveal>
          </ul>
        </div>
      </div>

      <div className="ml-auto flex flex-col justify-between mobile:ml-0 mobile:items-center mobile:gap-[3.5rem]">
        <Reveal>
          <Cta color="white" text="Get an invite" />
        </Reveal>

        <Reveal>
          <p className="text-[1.5rem] opacity-50">
            Copyright {year}. All Rights Reserved
          </p>
        </Reveal>
      </div>
    </footer>
  );
}

export default Footer;
