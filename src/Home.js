import React from "react";

function Home() {
  return (
    <>
      <main className="hero position-relative">
        <img
          src="images/hero-bg.jpg"
          alt="Background hero"
          className="hero-img w-100"
        />
        
        <div className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button
            type="button"
            className="btn btn-danger mt-3"
            data-bs-toggle="modal"
            data-bs-target="#Modal"
          >
            En savoir plus
          </button>
        </div>
      </main>

      <div className="container my-5">
        <div
          className="card mx-auto p-3 mb-5 bg-body rounded"
          style={{ maxWidth: 1200 }}
        >
          <div className="row g-3">
            <div className="col-md-6">
              <h5>À propos</h5>
              <hr />
              <img
                src="images/john-doe-about.jpg"
                className="card-img-top mb-3"
                alt="About John Doe"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum, ante vel finibus sodales.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum, ante vel finibus sodales.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum, ante vel finibus sodales.
              </p>
            </div>

            <div className="col-md-6">
              <h5>Mes compétences</h5>
              <hr />

              <div className="mb-4">
                <p className="mb-1">HTML5 90%</p>
                <div className="progress" style={{ height: 25 }}>
                  <div
                    className="progress-bar progress-bar-striped"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-1">CSS3 80%</p>
                <div className="progress" style={{ height: 25 }}>
                  <div
                    className="progress-bar progress-bar-striped bg-success"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-1">JavaScript 70%</p>
                <div className="progress" style={{ height: 25 }}>
                  <div
                    className="progress-bar progress-bar-striped bg-info"
                    style={{ width: "70%" }}
                  >
                    70%
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-1">PHP 60%</p>
                <div className="progress" style={{ height: 25 }}>
                  <div
                    className="progress-bar progress-bar-striped bg-warning"
                    style={{ width: "60%" }}
                  >
                    60%
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-1">React 50%</p>
                <div className="progress" style={{ height: 25 }}>
                  <div
                    className="progress-bar progress-bar-striped bg-danger"
                    style={{ width: "50%" }}
                  >
                    50%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="Modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header border-bottom border-secondary">
              <h5 className="modal-title">Mon profil Github</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body border-bottom border-secondary">
              <div className="row align-items-center">
                <div className="col-4 d-flex justify-content-center">
                  <img src="images/20250628_105552.jpg" className="img-fluid" alt="John Doe"/>
                </div>

                <div className="col-8">
                  <div className="d-flex align-items-center mb-2 border-bottom border-secondary">
                    <i className="bi bi-person-circle me-2"></i>
                    <span>Nom : John Doe</span>
                  </div>
                  <div className="d-flex align-items-center mb-2 border-bottom border-secondary">
                    <i className="bi bi-card-text me-2"></i>
                    <span>
                      Bio : As we all know, John Doe's identity is unknown.
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2 border-bottom border-secondary">
                    <i className="bi bi-folder2-open me-2"></i>
                    <span>Repos publics : 0</span>
                  </div>
                  <div className="d-flex align-items-center mb-2 border-bottom border-secondary">
                    <i className="bi bi-people me-2"></i>
                    <span>Followers : 0</span>
                  </div>
                  <div className="d-flex align-items-center mb-2 border-bottom border-secondary">
                    <i className="bi bi-person-plus me-2"></i>
                    <span>Following : 0</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-link-45deg me-2"></i>
                    <a
                      href="https://github.com/github-johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-light"
                    >
                      Voir le profil GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

