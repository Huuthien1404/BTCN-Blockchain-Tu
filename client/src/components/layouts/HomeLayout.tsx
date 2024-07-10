import { Outlet } from "react-router-dom";
import NewNavbar from "../Home/Navbar";
import Footer from "../Home/Footer";

export default function HomeLayout() {
  return (
    <div>
      <NewNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
