import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
export const Footer = () => {

  return (
    <footer>
        <div>
          <span className="author">
            Made with <FaHeart className="icon-heart" /> by Manuel Payán Cabrera
          </span>
        </div>
    </footer>
  );
};
