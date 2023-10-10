import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";
import "./NavbarStyle.css";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  onSectionClick: (sectionName: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSectionClick }) => {
  const [state, setState] = useState(false);

  const handleItemClick = (sectionName: string) => {
    onSectionClick(sectionName);

    // Close the menu when an item is clicked
    setState(false);
  };

  return (
    <>
      <div className="flex mainheader">
        <div className="z-50 menulogo">
          <MenuIcon
            sx={{
              width: "52px",
              height: "42px",
              position: "absolute",
              cursor: "pointer",
            }}
            onClick={() => setState(!state)}
          />
        </div>

        <div className="logoname">
          <h3 className="font-bold logoNameText">FASCO</h3>
        </div>
        <div className={`flex ml-auto listitem ${state ? "active" : ""}`}>
          <ul className="flex font-semibold ullist">
            <li onClick={() => handleItemClick("mainBanner")}>Home</li>
            <li onClick={() => handleItemClick("dealsSection")}>Deals</li>
            <li onClick={() => handleItemClick("package")}>Package</li>
            <li onClick={() => handleItemClick("newArrivals")}>New Arrivals</li>
            <li> <Link to={'/login'}>Sign in</Link></li>
          </ul>
        </div>

        <div className="ml-auto singupbutton">
          <button><Link to={'/signup'}>SignUp</Link></button>
        </div>
      </div>
    </>
  );
}; 

export default NavBar;
