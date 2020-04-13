import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import { MyContext } from "./config/context";
import resumeDataES from "./config/resumeDataES";
import resumeDataEN from "./config/resumeDataEN";

export const App = () => {
  const [language, setLanguage] = useState<string>("");

  useEffect(() => {
    setLanguage(window.navigator.language);
  }, []);

  const onChangeLanguage = () => {
    setLanguage(language === "es-ES" ? "en-EN" : "es-ES");
  };

  return (
    <MyContext.Provider
      value={{
        data: language === "es-ES" ? resumeDataES : resumeDataEN,
        language: language
      }}
    >
      <div className="App">
        <Header onSelectLanguage={onChangeLanguage} />
        <About />
        <Resume />
        <Portfolio />
        <Footer />
      </div>
    </MyContext.Provider>
  );
};
