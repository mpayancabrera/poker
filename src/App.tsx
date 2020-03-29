import React, { Component } from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { MyContext } from "./config/context";
import resumeData from "./config/resumeData";

export const App = () => {
  return (
    <MyContext.Provider value={{ data: resumeData }}>
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Footer />
      </div>
    </MyContext.Provider>
  );
};
