import { Outlet } from "react-router-dom";

const AppNav = () => {
  return (
    <div className=" mx-16 " >
      <p>nav</p>
      <Outlet />
    </div>
  );
};

export default AppNav;
