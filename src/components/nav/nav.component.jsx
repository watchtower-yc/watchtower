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
    <div>
      <p>nav</p>
      <Outlet />
    </div>
  );
};

export default Nav;
