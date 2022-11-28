import { Outlet } from "react-router-dom";

const AppNav = () => {
  return (
    <div>
      <p>nav</p>
      <Outlet />
    </div>
  );
};

export default AppNav;
