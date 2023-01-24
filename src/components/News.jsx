export default function News() {
  return (
    <div>
      <h1 className="news-title">Novedades</h1>
      <div className="news-box-container">
        <div className="news-box">
          <figure className="news-box-figure">
            <img src="/news.png" className="news-box-image" alt="image" />
          </figure>
          <div className="news-box-wrapper">
            <div className="news-box-heading">
              <p className="news-box-title">WEBINAR</p>
              <span className="news-box-plus">+</span>
            </div>
            <p className="news-box-description">
              Boron Studio invita a webinar sobre educación híbrida
            </p>
          </div>
        </div>
        <div className="news-box second">
          <figure className="news-box-figure">
            <img src="/news2.png" className="news-box-image" alt="image" />
          </figure>
          <div className="news-box-wrapper">
            <div className="news-box-heading">
              <p className="news-box-title">EVENTOS</p>
              <span className="news-box-plus">+</span>
            </div>
            <p className="news-box-description">
              Boron Studio invita a webinar sobre educación híbrida
            </p>
          </div>
        </div>
        <div className="news-box third">
          <figure className="news-box-figure">
            <img src="/news3.png" className="news-box-image" alt="image" />
          </figure>
          <div className="news-box-wrapper">
            <div className="news-box-heading">
              <p className="news-box-title">WEBINAR</p>
              <span className="news-box-plus">+</span>
            </div>
            <p className="news-box-description">
              Boron Studio presenta experiencia de educación a distancia en
              México
            </p>
          </div>
        </div>
        <div className="news-box fourth">
          <figure className="news-box-figure">
            <img src="/news4.png" className="news-box-image" alt="image" />
          </figure>
          <div className="news-box-wrapper">
            <div className="news-box-heading">
              <p className="news-box-title">WEBINAR</p>
              <span className="news-box-plus">+</span>
            </div>
            <p className="news-box-description">
              Publicación del libro “Tecnología: Lo que puede y no puede hacer
              por la educación”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
