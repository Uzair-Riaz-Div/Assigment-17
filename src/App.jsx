import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Aside from "./components/Aside";

function App() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "dark-theme"
    );
  };

  return (
    <div className={theme}>
      <Header toggleTheme={toggleTheme} />
      <Hero />
      <div className="main-layout">
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
