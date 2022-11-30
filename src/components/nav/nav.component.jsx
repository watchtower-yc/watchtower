import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import { Slide } from "react-reveal";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Fragment } from "react";

import routes from "../../routes";
import BrandLogo from "../brand-logo/brand-logo.component";

const Nav = () => {
  let [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav((showNav = !showNav));
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <Fragment>
      <div>
        <nav className="flex justify-between container mx-auto px-0 md:px-10 items-center">
          <BrandLogo logoType="black" height="h-14" />
          <div className="lg:hidden absolute right-8 z-50" onClick={handleNav}>
            <Fade when={!showNav}>
              <button>
                <MenuRoundedIcon />
              </button>
            </Fade>
          </div>
          <span className="menu hidden lg:flex items-center gap-x-12 md:gap-x-8">
            {routes.map((route) => (
              <Link key={route.name} to={route.link} className="">
                {route.name}
              </Link>
            ))}
          </span>
        </nav>
        {/* mobile nav */}
        {/* {showNav && ( */}
        <Slide left when={showNav}>
          <div
            className={`fixed inset-0 z-50 lg:hidden flex ${
              !showNav && "hidden"
            }`}
          >
            <div className="w-full px-12 py-10 bg-[#030A49] h-screen">
              <div className="flex justify-between mb-8">
                <BrandLogo logoType="white" height="h-12" onClick={handleNav} />
                <button className="text-white p-4" onClick={handleNav}>
                  <CloseRoundedIcon fontSize="large" />
                </button>
              </div>
              <ul className="mt-12">
                {routes.map((route) => (
                  <li
                    className={`mb-10 ${!showNav && "hidden"}`}
                    onClick={closeNav}
                    key={route.name}
                  >
                    <Link
                      to={route.link}
                      className="text-white text-2xl font-medium uppercase"
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Slide>
        {/* )} */}
      </div>
      <div className="">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Nav;
