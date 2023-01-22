import RightArrow from "../icons/right-arrow";

export default function Repository() {
  return (
    <div className="repository">
      <div className="repository-heading">
        <p className="repository-title">Repositorio</p>
        <p className="repository-subtitle">
          Respositorio institucional de Boron Studio
        </p>
      </div>
      <ul className="repository-list">
        <li className="repository-item">
          <a href="#" className="repository-item-link">
            Autor
            <img
              src="/image.png"
              className="repository-item-image"
              alt="image"
            />
            <span className="repository-item-arrow">
              <RightArrow />
            </span>
          </a>
        </li>

        <li className="repository-item">
          <a href="#" className="repository-item-link">
            Título
            <img
              src="/image.png"
              className="repository-item-image"
              alt="image"
            />
            <span className="repository-item-arrow">
              <RightArrow />
            </span>
          </a>
        </li>

        <li className="repository-item">
          <a href="#" className="repository-item-link">
            Líneas de Navegación
            <img
              src="/image.png"
              className="repository-item-image"
              alt="image"
            />
            <span className="repository-item-arrow">
              <RightArrow />
            </span>
          </a>
        </li>

        <li className="repository-item">
          <a href="#" className="repository-item-link">
            Descripción
            <img
              src="/image.png"
              className="repository-item-image"
              alt="image"
            />
            <span className="repository-item-arrow">
              <RightArrow />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
