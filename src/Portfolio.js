import React from "react";

function Portfolio() {
  return (
    <main className="banner pt-5">
      <img
        src="images/banner.jpg"
        alt="Background banner"
        className="banner-img"
      />

      <div className="banner-content text-center text-dark mt-3">
        <h2>Portfolio</h2>
        <h5>Voici quelques-unes de mes réalisations</h5>
        <hr />
      </div>

      <div className="container my-5">
        <div className="row justify-content-center g-3">
          <div className="col-md-4">
            <div className="card">
              <img
                src="images/fresh-food.jpg"
                className="card-img-top"
                alt="Freshfood"
              />
              <div className="card-body text-center">
                <h3>Freshfood</h3>
                <p className="card-text">
                  Site de vente de produits frais en ligne
                </p>
                <button type="button" className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <div className="card-footer text-center">
                Site réalisé avec PHP et MySQL
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="images/restaurant-japonais.jpg"
                className="card-img-top"
                alt="Restaurant Akira"
              />
              <div className="card-body text-center">
                <h3>Restaurant Akira</h3>
                <p className="card-text">
                  Site de vente de produits frais en ligne
                </p>
                <button type="button" className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <div className="card-footer text-center">
                Site réalisé avec Wordpress
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="images/espace-bien-etre.jpg"
                className="card-img-top"
                alt="Espace bien-être"
              />
              <div className="card-body text-center">
                <h3>Espace bien-être</h3>
                <p className="card-text">
                  Site de vente de produits frais en ligne
                </p>
                <button type="button" className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <div className="card-footer text-center">
                Site réalisé avec LARAVEL
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center g-3">
          <div className="col-md-4">
            <div className="card">
              <img src="images/seo.jpg" className="card-img-top" alt="SEO" />
              <div className="card-body text-center">
                <h3>SEO</h3>
                <p className="card-text">
                  Amélioration du référencement d'un site e-commerce
                </p>
                <button type="button" className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <div className="card-footer text-center">
                Utilisation des outils SEO
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="images/coder.jpg" className="card-img-top" alt="API" />
              <div className="card-body text-center">
                <h3>Création d'une API</h3>
                <p className="card-text">
                  Création d'une API RESTFULL publique
                </p>
                <button type="button" className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <div className="card-footer text-center">PHP-SYMFONY</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="images/screens.jpg"
                className="card-img-top"
                alt="Maquette site web"
              />
              <div className="card-body text-center">
                <h3>Maquette d'un site web</h3>
                <p className="card-text">Création du prototype d'un site</p>
                <button type="button" className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <div className="card-footer text-center">Réalisé avec FIGMA</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Portfolio;