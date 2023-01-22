import Boron from "../icons/boron";
import Twitter from "../icons/twiiter";
import Youtube from "../icons/youtube";
import RightArrow from "../icons/right-arrow";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-boron">
          <div className="footer-boron-icon">
            <Boron />
          </div>
          <p className="footer-news">enterate de las últimas novedades</p>
          <div className="footer-information">
            <button className="footer-information-button">
              <span>Subscribite a nuestro newsletter</span> <RightArrow />
            </button>
            <p>info@coso</p>
            <Youtube />
            <Twitter />
          </div>
        </div>
        <div className="footer-list-wrapper">
          <ul className="footer-list">
            <li>acerca de</li>
            <li>proyectos</li>
            <li>repositorio</li>
            <li>novedades</li>
            <li>contacto</li>
            <li>lineas de investigación</li>
            <li>información financiera</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>©2023 Todos los derechos reservados. Boron studio</p>
        <p className="footer-by">bY boron studio</p>
      </div>
    </footer>
  );
}
