import BrandLogo from "../brand-logo/brand-logo.component";

import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { FacebookRounded, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer font-serrat flex flex-col justify-center items-center bg-[#0B0037] py-8 text-white">
      <div className="container flex flex-col  mx-auto px-8 md:px-0">
        <div className="flex gap-8 justify-between flex-wrap align-top">
          <div className="">
            <BrandLogo logoType="white" height="h-16" />
            <p className="text-xs md:max-w-xs mt-4 text-gray-400">
              The Tower, 
            </p>
            <p className="text-xs md:max-w-xs mt-4 text-gray-400">
              Adjacent Daniela Hostel
            </p>
            <p className="text-xs md:max-w-xs mt-4 text-gray-400">
              Under-G, LAUTECH,Ogbomoso,
            </p>
            <p className="text-xs md:max-w-xs mt-4 text-gray-400">
              Oyo state, Nigeria.
            </p>
          </div>
          <div>
            <p className="mb-4 font-medium text-xl">Explore</p>
            <ul className="text-xs text-gray-400">
              <li className="mt-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mt-2">
                <Link to="/about">About</Link>
              </li>
              <li className="mt-2">
                <Link to="/sermons">Sermons</Link>
              </li>
              <li className="mt-2">
                <Link to="/testimonies">Testimonies</Link>
              </li>
              <li className="mt-2">
                <Link to="/online-giving">Giving</Link>
              </li>
              <li className="mt-2">
                <Link to="/csr">CSR</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-medium text-xl">Get in touch</p>

            <div className=" flex gap-5">
              <FacebookRounded />
              <Twitter />
              <YouTube />
              <Instagram />
            </div>
            <ul className="text-xs mt-10 text-gray-400">
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
          </div>
        </div>

        <div className="border border-gray-400 mt-8 text-sm bg-black w-96 mx-auto"></div>
        <p className=" text-center">RCCG Watchtower       2022.   All Right Reserved .</p>
      </div>
    </div>
  );
};

export default Footer;
