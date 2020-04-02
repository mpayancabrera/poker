import React, { useContext } from "react";
import { MyContext } from "../config/context";

interface IHeaderProps {
  onSelectLanguage: Function;
}

export const Header = (props: IHeaderProps) => {
  const { data, language } = useContext(MyContext);

  const onChangeLanguage = () => {
    props.onSelectLanguage();
  };

  return (
    <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            {data.menu &&
              data.menu.map((item: any, key: number) => {
                return (
                  <li
                    className={
                      item.text === "Home" || item.text === "Inicio" ? "current" : ""
                    }
                    key={key}
                  >
                    <a className="smoothscroll" href={"#" + item.ref}>
                      {item.text}
                    </a>
                  </li>
                );
              })}
            <li>
              <button
                className={
                  language === "es-ES"
                    ? "england-flag vertical horizontal"
                    : "spain-flag spain-flag-horizontal"
                }
                onClick={onChangeLanguage}
              />
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am {data.name}</h1>
            <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              {data.role}.{data.roleDescription}
            </h3>
            <hr />
            <ul className="social">
              {data.socialLinks &&
                data.socialLinks.map((item: any) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </React.Fragment>
  );
};
