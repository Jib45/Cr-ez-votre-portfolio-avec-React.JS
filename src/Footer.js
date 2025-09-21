import React from "react";

function Footer({ setCurrentPage }) {
  return (
    <footer className="text-bg-dark container-fluid text-center p-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-start">
            <h5>John Doe</h5>
            <ul className="list-unstyled">
              <li>40 rue Laure Diebold</li>
              <li>69009 Lyon, France</li>
              <li>10 20 30 40 50</li>
              <li>john.doe@gmail.com</li>
            </ul>
            <ul className="list-unstyled d-flex gap-3">
              <li>
                <a href="https://github.com/" target="_blank" className="text-light">
                  <i className="bi bi-github fs-4"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" className="text-light">
                  <i className="bi bi-twitter fs-4"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" className="text-light">
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-start">
            <h5>Liens utiles</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <span
                  className="nav-link p-0 text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("home")}
                >
                  Accueil
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link p-0 text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("services")}
                >
                  Services
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link p-0 text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("portfolio")}
                >
                  Portfolio
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link p-0 text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("contact")}
                >
                  Me contacter
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link p-0 text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("mentions")}
                >
                  Mentions légales
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-start">
            <h5>Mes dernières réalisations</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <span
                  className="nav-link p-0 text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("portfolio")}
                >
                  Fresh Food
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link p-0 text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("portfolio")}
                >
                  Restaurant Akira
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link p-0 text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("portfolio")}
                >
                  Espace bien-être
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link p-0 text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("portfolio")}
                >
                  SEO
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link p-0 text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("portfolio")}
                >
                  Création d'une API
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link p-0 text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("portfolio")}
                >
                  Maquette d'un site
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

