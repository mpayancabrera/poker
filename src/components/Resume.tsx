import React, { useContext } from "react";
import { MyContext } from "../config/context";

export const Resume = () => {
  const { data } = useContext(MyContext);
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>{data.educationTitle}</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.education &&
            data.education.map((item: any, key: number) => {
              return (
                <div className="row item" key={key}>
                  <div className="twelve columns">
                    <h3>{item.specialization}</h3>
                    <p className="info">
                      {item.UniversityName}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>{data.workTitle}</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.work &&
            data.work.map((item: any, key: number) => {
              return (
                <div className="row item" key={key}>
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <div className="work-skills">
                      {item.Achievements &&
                        item.Achievements.map(
                          (achievement: string, key: number) => (
                            <span className="label-skill" key={key}>
                              {" "}
                              {achievement}{" "}
                            </span>
                          )
                        )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>{data.skillsTitle}</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.skillsSections &&
            data.skillsSections.map((section: any, key: number) => {
              return (
                <div key={key}>
                  <p>{section.skillsDescription}</p>
                  <div className="bars">
                    <ul className="skills">
                      {section.skills &&
                        section.skills.map((item: any, key: number) => {
                          return (
                            <li key={key}>
                              <span
                                className={`bar-expand ${item.skillname.toLowerCase()}`}
                              ></span>
                              <em>{item.skillname}</em>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
