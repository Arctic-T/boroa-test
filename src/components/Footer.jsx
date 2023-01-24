import Boron from "../icons/boron";
import Twitter from "../icons/twitter";
import Youtube from "../icons/youtube";
import RightArrow from "../icons/right-arrow";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-boron-icon">
          <Boron />
        </div>
        <div className="footer-links">
          <div className="footer-links-group">
            <a href="javascript:void(0)" className="footer-links-link">
              acerca de
            </a>
            <a href="javascript:void(0)" className="footer-links-link">
              proyectos
            </a>
            <a href="javascript:void(0)" className="footer-links-link">
              repositorio
            </a>
            <a href="javascript:void(0)" className="footer-links-link">
              novedades
            </a>
          </div>
          <div className="footer-links-group">
            <a href="javascript:void(0)" className="footer-links-link">
              contacto
            </a>
            <a href="javascript:void(0)" className="footer-links-link">
              lineas de investigación
            </a>
            <a href="javascript:void(0)" className="footer-links-link">
              información financiera
            </a>
          </div>
        </div>
        <div className="footer-social">
          <p className="footer-news">enterate de las últimas novedades</p>
          <div className="footer-information">
            <button className="footer-button">
              <span className="footer-button-name">
                Subscribite a nuestro newsletter
              </span>
              <RightArrow />
            </button>
            <div className="footer-social-network">
              <p className="footer-mail">info@boronstudio.com</p>
              <div className="footer-social-icons">
                <Youtube />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-copy">
          ©2023 Todos los derechos reservados. Boron studio
        </p>
        <p className="footer-by">bY boron studio</p>
      </div>
    </footer>
  );
}
