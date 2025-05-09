import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainLayout({ children }) {
  return (
    <div className="bg-black">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
