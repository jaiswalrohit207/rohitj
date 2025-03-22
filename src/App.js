import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
