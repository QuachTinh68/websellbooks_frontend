import React from "react";
import Navbar from "./layouts/header-footer/Navbar";
import Footer from "./layouts/header-footer/Footer";
import HomePage from "./layouts/homepage/HomePage";
import ListBook from "./layouts/product/ListBook";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
    
      <Footer />
    </div>
  );
}

export default App;
