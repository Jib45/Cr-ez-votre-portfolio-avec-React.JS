import React from "react";

function Header({ setCurrentPage }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a
            className="navbar-brand p-3"
            style={{ cursor: "pointer" }}
            onClick={() => setCurrentPage("home")}
          >
            JOHN DOE
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("home")}
                >
                  HOME
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("services")}
                >
                  SERVICES
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("portfolio")}
                >
                  PORTFOLIO
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("contact")}
                >
                  CONTACT
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage("mentions")}
                >
                  MENTIONS LÉGALES
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
