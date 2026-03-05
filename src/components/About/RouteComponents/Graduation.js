import React from "react";

import "../../../styles/About/Route/Graduation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Graduation = () => {
  return (
    <>
      <div className="graduation">
        <div className="graduation__container">
          <div className="graduation__header">
            <h2 className="graduation__number">
              0<span>4</span>
            </h2>
            <h1
              data-aos="fade-down"
              data-aos-offset="0"
            >
              E<span>ngineering</span>.
            </h1>
          </div>

          <div className="graduation__description">
            <h1>COMSATS LAHORE</h1>
            <h2>
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="internships__calendar"
              />
              &nbsp;&nbsp;20/08/2020 - 27/06/2024
            </h2>

            <ul className="graduation__points">
              <li>
                Completed a Bachelor’s degree in Computer Engineering from COMSATS University Lahore with a strong
                foundation in software development, programming concepts, and computer systems.
              </li>

              <li>
                Built multiple academic and personal projects that helped apply theoretical knowledge to real-world
                problems and improved skills in designing and developing software solutions.
              </li>

              <li>
                Collaborated on team-based projects, strengthening problem-solving, communication, and teamwork while
                gaining practical experience in real development environments.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graduation;
