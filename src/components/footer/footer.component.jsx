import BrandLogo from "../brand-logo/brand-logo.component";

import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-[#0B0037] py-8 text-white">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex gap-8 justify-between flex-wrap align-top">
          <div className="">
            <BrandLogo logoType="white" height="h-16" />
            <p className="text-xs md:max-w-xs mt-4 text-gray-400">
              The Tower, Adjacent Daniela Hostel, Under-G, LAUTECH,Ogbomoso, Oyo
              state, Nigeria.
            </p>
          </div>
          <div>
            <p className="mb-4 font-medium text-xl">Explore</p>
            <ul className="text-xs text-gray-400">
              <li className="mt-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mt-2">
                <Link to="/our-story">About</Link>
              </li>
              <li className="mt-2">
                <Link to="/testimony">Sermons</Link>
              </li>
              <li className="mt-2">
                <Link to="/courses">Testimonies</Link>
              </li>
              <li className="mt-2">
                <Link to="/">Giving</Link>
              </li>
              <li className="mt-2">
                <Link to="/">CSR</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-medium text-xl">Contact Us</p>
            <ul className="text-xs text-gray-400">
              <li className="mt-2 flex items-center gap-x-2">
                <LocalPhoneRoundedIcon />
                <div>
                  <p>+2348063260342</p>
                  <p>+2347060586105</p>
                </div>
              </li>
              <li className="mt-2 flex items-center gap-x-2">
                <MailOutlineRoundedIcon />
                <p>info@rccgwatchtower.com</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-2">connect with us</p>
            {/* <div className="flex gap-4">
              <a href="https://web.facebook.com/cephasict" target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
              </a>
              <a href="https://twitter.com/Cephasict" target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
              </a>
              <a href="/" target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
