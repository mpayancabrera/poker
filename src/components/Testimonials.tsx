import React, { useContext } from "react";
import { MyContext } from "../config/context";

export const Testimonials = () => {
  const { data } = useContext(MyContext);
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>
          <div className="twelve columns flex-container">
            <div className="flexslider">
              <ul className="slides">
                {data.testimonials &&
                  data.testimonials.map((item: any, key: number) => {
                    return (
                      <li key={key}>
                        <blockquote>
                          <p>{item.description}</p>
                          <cite>{item.name}</cite>
                        </blockquote>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
