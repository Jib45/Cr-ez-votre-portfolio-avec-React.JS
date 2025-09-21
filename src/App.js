
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import MentionsLegales from "./MentionsLegales";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  const [currentPage, setCurrentPage] = useState("home");


  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "services":
        return <Services />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "mentions":
        return <MentionsLegales />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">

      <Header setCurrentPage={setCurrentPage} />


      <main className="container my-4">{renderPage()}</main>


      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;