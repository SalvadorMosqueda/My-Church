import logo from "../assets/img/icono.jpg";
import bgImage from "../assets/img/sidebar-4.jpg";
import { dashboardRoutes } from "@/routes";
import Sidebar from "../components/Sidebar/Sidebar";
import { Head } from "./head";
import Navbar from "../components/Navbars/Navbar";
import { useState } from "react";
import AppStyle from "@/assets/jss/nextjs-material-dashboard/layouts/adminStyle";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [image, setImage] = useState(bgImage);
  const [color, setColor] = useState("white");
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    console.log("handleDrawerToggle called");
    setMobileOpen(!mobileOpen);
  };
  const handleImageClick = (image) => {
    setImage(image);
  };
  const handleColorClick = (color) => {
    setColor(color);
  };

  return (
    <AppStyle>
      <div className="wrapper">
        <Sidebar
          routes={dashboardRoutes}
          logoText={"SISTEMA CELULAR"}
          logo={logo.src}
          image={image.src}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
        />
        <div className="mainPanel">
          <Navbar
            routes={dashboardRoutes}
            handleDrawerToggle={handleDrawerToggle}
          />
          <div className="content">
            <div className="container">{children}</div>
          </div>
          <footer className="w-full py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} NovaVision Systems. Todos los derechos
            reservados.
          </footer>
        </div>
      </div>
    </AppStyle>
  );
}
