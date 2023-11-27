import { Outlet } from "react-router-dom";
import { MobileAside } from "../components/reusables";

Outlet;
const GuestLayout = () => {
  // const location = useLocation()
  return (
    <div className="h-full relative">
      <MobileAside />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default GuestLayout;
