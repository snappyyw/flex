import React from "react";

import { Header, Footer } from "../../common";

import "./style.scss";

function MainLayout({ children }) {
  return (
    <div className="mainLayout">
      <Header />
      <div className="bodyMainLayout">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
