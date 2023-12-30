import { ImFacebook2 } from "react-icons/im";
import { RiYoutubeFill } from "react-icons/ri";
import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cta from "./Cta";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center gap-40 bg-black px-[16.5rem] py-[6.4rem] text-white desktop:min-h-[29rem] desktop:items-stretch desktop:px-36 mobile:flex-col mobile:px-8 mobile:py-[5.6rem]">
      <div className="grid grid-cols-2 gap-x-40 desktop:grid-cols-1 mobile:justify-items-center mobile:gap-y-12">
        {/* <div className="flex flex-col justify-between"> */}
        <img
          src="./shared/desktop/footer-logo.svg"
          alt="logo"
          className="desktop:row-start-1"
        />
        {/* </div> */}
        <div className="row-start-2 flex items-center gap-4 desktop:row-start-3 mobile:col-start-1 mobile:row-start-2">
          <ImFacebook2 size="2rem" />
          <RiYoutubeFill size="2rem" />
          <FaTwitter size="2rem" />
          <FaPinterest size="2rem" />
          <FaInstagram size="2rem" />
        </div>

        <div className="col-start-2 row-start-1 row-end-2 desktop:col-start-1 desktop:row-start-2 mobile:col-start-1 mobile:row-start-3 mobile:row-end-4">
          <ul className="flex flex-col items-start gap-7 desktop:flex-row mobile:flex-col mobile:items-center">
            <li className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white">
              <Link to="/stories">Stories</Link>
            </li>
            <li className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white">
              <Link to="/features">Features</Link>
            </li>
            <li className="text-[1.2rem] font-bold uppercase tracking-[0.2rem] text-white">
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-auto flex flex-col justify-between mobile:ml-0 mobile:items-center mobile:gap-[3.5rem]">
        <p className="flex items-center gap-6">
          <span className="text-[1.2rem] font-bold uppercase tracking-[0.2rem]">
            Get an invite
          </span>
          <Cta color="white" />
        </p>
        <p className="text-[1.5rem] opacity-50">
          Copyright {year}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

/*
  <svg className="h-[2rem] w-[2rem] fill-white">
            <use xlinkHref="./shared/desktop/facebook.svg#facebook"></use>
          </svg>
          <svg className="h-[2rem] w-[2rem] stroke-white">
            <use xlinkHref="./shared/desktop/youtube.svg#youtube"></use>
          </svg>
          <svg className="h-[2rem] w-[2rem] stroke-white">
            <use xlinkHref="./shared/desktop/twitter.svg#twitter"></use>
          </svg>
          <svg className="h-[2rem] w-[2rem] stroke-white">
            <use xlinkHref="./shared/desktop/pinterest.svg#pinterest"></use>
          </svg>
          <svg className="h-[2rem] w-[2rem] stroke-white">
            <use xlinkHref="./shared/desktop/instagram.svg#instagram"></use>
          </svg>
          */
