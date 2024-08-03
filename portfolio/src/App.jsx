import { useState } from "react";

import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setPage] = useState("Home");

  const showPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const changePage = (page) => setPage(page);

  return (
    <section>
      <div className="topBar">
        <Header />
        <Navbar currentPage={currentPage} changePage={changePage} />
      </div>
      <main className="main"> {showPage()}</main>
      <Footer />
    </section>
  );
}

export default App;
