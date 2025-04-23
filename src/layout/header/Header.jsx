import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { GiLiver } from 'react-icons/gi';
import { IoMdHome } from "react-icons/io";
import { HiLightBulb } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import './Header.css';

const Header = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // Toggle submenu visibility
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  // Function to determine active NavLink class
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "nav-item active" : "nav-item";
  };

  // Function to determine active submenu NavLink class
  const getSubmenuNavLinkClass = ({ isActive }) => {
    return isActive ? "submenu-item active" : "submenu-item";
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/imagenes/LOGO.png" alt="3D Medical Models" className="header-logo" />
      </div>
      
      <nav className="nav-menu">
        <NavLink to="/" className={getNavLinkClass}>
          <IoMdHome className="nav-icon" /> Inicio
        </NavLink>
        
        <div className="nav-item-with-submenu">
          <div 
            className="nav-item submenu-trigger" 
            onClick={toggleSubmenu}
            role="button"
            tabIndex={0}
            aria-expanded={isSubmenuOpen}
          >
            <GiLiver className="nav-icon" /> 
            Enfermedades
            {isSubmenuOpen ? (
              <IoChevronUp className="submenu-icon" aria-hidden="true" />
            ) : (
              <IoChevronDown className="submenu-icon" aria-hidden="true" />
            )}
          </div>
          
          <div className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
            <NavLink to="/organo/higado-graso" className={getSubmenuNavLinkClass}>
              Higado Graso
            </NavLink>
            <NavLink to="/organo/cirrosis-hepatica" className={getSubmenuNavLinkClass}>
              Cirrosis Hepática
            </NavLink>
          </div>
        </div>
        
        <NavLink to="/quiz" className={getNavLinkClass}>
          <HiLightBulb className="nav-icon" /> Quiz
        </NavLink>
        
        <NavLink to="/contacto" className={getNavLinkClass}>
          <FaEnvelope className="nav-icon" /> Contactos
        </NavLink>
        
        <NavLink to="/sobre-nosotros" className={getNavLinkClass}>
          <CiCircleInfo className="nav-icon" /> Acerca de nosotros
        </NavLink>
      </nav>
      
      <button className="menu-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default Header;