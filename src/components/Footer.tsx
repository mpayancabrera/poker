import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { MyContext } from "../config/context";

export const Footer = (props: any) => {
  const { data } = useContext(MyContext);

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {data.socialLinks &&
              data.socialLinks.map((item: any, key: number) => {
                return (
                  <li key={key}>
                    <a href={item.url}>
                      <i className={item.className} />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
        <div id="made-by">
          <span className="author">
            Made with <FaHeart className="icon-heart" /> Manuel Payán Cabrera
          </span>
        </div>
      </div>
    </footer>
  );
};
