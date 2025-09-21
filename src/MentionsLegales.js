import React from "react";

function MentionsLegales() {
  return (
    <main className="mentions-legales container mt-5 pt-5">
      <div className="banner-content text-center text-dark">
        <h2>Mentions légales</h2>
        <hr />
      </div>

      <div className="accordion" id="mentionsAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEditeur">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEditeur"
              aria-expanded="true"
              aria-controls="collapseEditeur"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseEditeur"
            className="accordion-collapse collapse show"
            aria-labelledby="headingEditeur"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <h5>John Doe</h5>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-map me-2"></i>
                <span>40 rue Laure Diebold</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-geo me-2"></i>
                <span>69009 Lyon, France</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-telephone me-2"></i>
                <span>10 20 30 40 50</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-envelope me-2"></i>
                <span>john.doe@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingHebergeur">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHebergeur"
              aria-expanded="false"
              aria-controls="collapseHebergeur"
            >
              Hébergeur du site
            </button>
          </h2>
          <div
            id="collapseHebergeur"
            className="accordion-collapse collapse"
            aria-labelledby="headingHebergeur"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <p>
                Le site est hébergé par <strong>OVH</strong>.<br />
                Adresse : 2 rue Kellermann, 59100 Roubaix, France.<br />
                Site web :{" "}
                <a
                  href="https://www.ovh.com/fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ovh.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCredits">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCredits"
              aria-expanded="false"
              aria-controls="collapseCredits"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseCredits"
            className="accordion-collapse collapse"
            aria-labelledby="headingCredits"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  Images :{" "}
                  <a
                    href="https://pixabay.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pixabay
                  </a>
                </li>
                <li>
                  Favicon :{" "}
                  <a
                    href="https://www.flaticon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flaticon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MentionsLegales;
