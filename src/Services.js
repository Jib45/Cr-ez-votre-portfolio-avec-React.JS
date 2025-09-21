import React from "react";

function Services() {
  return (
    <main className="banner pt-5">
      <img
        src="images/banner.jpg"
        alt="Background banner"
        className="banner-img w-100"
      />

      <div className="banner-content text-center text-dark my-4">
        <h2>Mon offre de services</h2>
        <h5>Voici les prestations sur lesquelles je peux intervenir</h5>
        <hr />
      </div>

      <div className="card-group my-4">
        {/* Carte 1 */}
        <div className="card text-center">
          <div className="card-body">
            <i
              className="bi bi-brush mb-3"
              style={{ fontSize: "2.5rem", color: "#1705b5" }}
            ></i>
            <h5 className="card-title">UX Design</h5>
            <p className="card-text">
              L'UX Design consiste à concevoir des produits en plaçant
              l'utilisateur au centre des préoccupations. Objectif : rendre
              l'expérience fluide et agréable.
            </p>
          </div>
        </div>

        {/* Carte 2 */}
        <div className="card text-center">
          <div className="card-body">
            <i
              className="bi bi-code-slash mb-3"
              style={{ fontSize: "2.5rem", color: "#1705b5" }}
            ></i>
            <h5 className="card-title">Développement web</h5>
            <p className="card-text">
              Création de sites web avec HTML, CSS, JavaScript, React, et
              Bootstrap. Objectif : un site moderne et performant.
            </p>
          </div>
        </div>

        {/* Carte 3 */}
        <div className="card text-center">
          <div className="card-body">
            <i
              className="bi bi-search mb-3"
              style={{ fontSize: "2.5rem", color: "#1705b5" }}
            ></i>
            <h5 className="card-title">Référencement</h5>
            <p className="card-text">
              Optimisation SEO pour améliorer la visibilité d’un site dans les
              moteurs de recherche et attirer plus de visiteurs qualifiés.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
