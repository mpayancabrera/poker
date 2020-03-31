import React, { useContext } from "react";
import { MyContext } from "../config/context";

export const About = () => {
  const { data } = useContext(MyContext);
  return (
    <section id="about">
      <div className="row">
        <div className="three columns profile-pic">
          <img
            className="profile-pic"
            src="../images/profilepic.jpg"
            alt=""
          />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          {data.aboutme &&
            data.aboutme.map((item: string, key: number) => (
              <p key={key}>{item}</p>
            ))}
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{data.name}</span>
                <br></br>
                <span>Email: {data.email}</span>
                <br></br>
                <span>{data.address}</span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
