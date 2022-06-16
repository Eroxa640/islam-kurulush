import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";

export default function Layout({ children }) {
  return (
    <header className="wrapper">
      <Navbar />

      <Footer />
    </header>
  );
}
