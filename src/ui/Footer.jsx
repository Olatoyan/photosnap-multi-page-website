import {
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiFacebookFill,
} from "react-icons/ri";

import { Link } from "react-router-dom";
import Cta from "./Cta";

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
        <div className="row-start-2 flex items-center gap-4 desktop:row-start-3 mobile:col-start-1 mobile:row-start-2">
          <div className="hover:bg-fb flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full bg-white">
            <RiFacebookFill size="2rem" color="black" />
          </div>
          <div className="hover:bg-yt flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full bg-white">
            <RiYoutubeFill size="1.5rem" color="black" />
          </div>
          <div className="hover:bg-x flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full bg-white">
            <RiTwitterFill size="2rem" color="black" />
          </div>
          <div className="hover:bg-pin flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full bg-white">
            <RiPinterestFill size="2rem" color="black" />
          </div>
          <div className="hover:bg-ig flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full bg-white">
            <RiInstagramFill size="2rem" color="black" />
          </div>
        </div>

        <div className="col-start-2 row-start-1 row-end-2 desktop:col-start-1 desktop:row-start-2 mobile:col-start-1 mobile:row-start-3 mobile:row-end-4">
          <ul className="flex flex-col items-start gap-7 desktop:flex-row mobile:flex-col mobile:items-center">
            <li className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:opacity-30">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:opacity-30">
              <Link to="/stories">Stories</Link>
            </li>
            <li className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:opacity-30">
              <Link to="/features">Features</Link>
            </li>
            <li className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:opacity-30">
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-auto flex flex-col justify-between mobile:ml-0 mobile:items-center mobile:gap-[3.5rem]">
        <Cta color="white" text="Get an invite" />

        <p className="text-[1.5rem] opacity-50">
          Copyright {year}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
