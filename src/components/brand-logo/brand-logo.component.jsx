import { Link } from "react-router-dom";

const BrandLogo = ({ logoType, height }) => {
  return (
    <Link to="/" className="">
      {logoType === "white" && (
        <img
          src={require("../../assets/img/brand-logo.png")}
          alt="brand"
          className={height}
        />
      )}
      {logoType === "black" && (
        <img
          src={require("../../assets/img/brand-logo.png")}
          alt="brand"
          className={height}
        />
      )}
    </Link>
  );
};

export default BrandLogo;
