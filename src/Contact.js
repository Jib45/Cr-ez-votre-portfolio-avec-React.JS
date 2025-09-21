import React from "react";

function Contact() {
  return (
    <main className="container my-5 pt-5">
      <div className="banner-content text-center text-dark mb-4">
        <h2>Contact</h2>
        <hr />
      </div>

      <div
        className="card mx-auto p-3 mb-5 bg-body rounded"
        style={{ maxWidth: "1200px" }}
      >
        <div className="row g-8">
          {/* Formulaire de contact */}
          <div className="col-md-6">
            <h5>Formulaire de contact</h5>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Votre adresse mail"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="sujet"
                  placeholder="Sujet"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Votre message"
                  rows="12"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </form>
          </div>

          {/* Coordonnées + carte */}
          <div className="col-md-6">
            <h5>Mes coordonnées</h5>
            <p>
              <strong>Adresse :</strong> 40 rue Laure Diebold, 69009 Lyon, France
            </p>
            <p>
              <strong>Téléphone :</strong> 10 20 30 40 50
            </p>
            <p>
              <strong>Email :</strong> john.doe@gmail.com
            </p>

            <h6 className="mt-4">Localisation</h6>
            <div className="ratio ratio-4x3 rounded shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.505292469715!2d4.799000515572874!3d45.776236979105804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb9f78e85a4b%3A0x20e7b0bff6ef8af2!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1695310000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adresse John Doe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;


