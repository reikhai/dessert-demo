import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "../../routers/main";

export default function MasterLayout() {
  return (
    <>
      <div id="home">
        <Header />
      </div>

      <Main />

      <div>
        <Footer />
      </div>
    </>
  );
}
