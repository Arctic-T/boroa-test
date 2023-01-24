import { useState } from "react";
import BoronBlack from "../icons/boron-black";
import HandLens from "../icons/hand-lens";
import Twitter from "../icons/twitter";
import Youtube from "../icons/youtube";
import RightArrow from "../icons/right-arrow";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "is-active" : ""}`}>
      <a href="#" className="navbar-icon">
        <BoronBlack />
      </a>
      <button className="navbar-menu-btn" onClick={openNavbar}>
        <p className="navbar-menu-btn-title">{isOpen ? "Cerrar" : "Menu"}</p>
        {!isOpen && (
          <div>
            <span className="navbar-menu-btn-line"></span>
            <span className="navbar-menu-btn-line second"></span>
          </div>
        )}
        {isOpen && <span className="menu-btn-cross">x</span>}
      </button>
      <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
        <div className="navbar-menu-links">
          <a href="#" className="navbar-menu-links-link">
            acerca de
          </a>
          <a href="#" className="navbar-menu-links-link">
            proyectos
          </a>
          <a href="#" className="navbar-menu-links-link">
            repositorio
          </a>
          <a href="#" className="navbar-menu-links-link">
            novedades
          </a>
          <a href="#" className="navbar-menu-links-link">
            contacto
          </a>
          <HandLens />
          <div className="navbar-languages">
            <span>EN </span>/
            <span>
              <strong> ES</strong>
            </span>
          </div>
        </div>
        <div className="navbar-social">
          <div className="navbar-information">
            <button className="navbar-button">
              <span className="navbar-button-name">
                Subscribite a nuestro newsletter
              </span>
              <RightArrow />
            </button>
            <div className="navbar-social-network">
              <p className="navbar-mail">info@boronstudio.com</p>
              <div className="navbar-social-icons">
                <Youtube />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
