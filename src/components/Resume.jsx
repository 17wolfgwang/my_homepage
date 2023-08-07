import React from "react";
import "./website.css";
import NavBar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faBuilding } from "@fortawesome/free-solid-svg-icons";

const Resume = (props) => {
  const { handleSectionClick, activeSection } = props;

  return (
    <div className="main-content">
      <NavBar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      ></NavBar>
      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FontAwesomeIcon
                icon={faSchool}
                name="book-outline"
              ></FontAwesomeIcon>
            </div>
            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            {/* <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Fullstack Developer
              </h4>
              <span>2021 — NOW</span>
              <p className="timeline-text">
                Contribute to the overall web design and development, frontend development, and backend development
              </p>
            </li> */}

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Korea Maritime Ocean University
              </h4>
              <span>2014 — 2018</span>
              <p className="timeline-text">
                Bachelor's degree in Marine System Engineering (B.S.)
              </p>
              <p className="timeline-text">
                (with a focus on Maritime Automous Surface Ship Major)
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FontAwesomeIcon
                icon={faBuilding}
                name="book-outline"
              ></FontAwesomeIcon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            {/* <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Fullstack Developer</h4>
              <span>2021 — Present</span>
              <p className="timeline-text">
                - Contribute to the overall web design and development, frontend development, and backend development <br></br>- Provide personalized
                assistance by leveraging the data model
              </p>
            </li> */}

            {/* <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Research Assistant</h4>
              <span>2021 — 2023</span>
              <p className="timeline-text">
                - Worked on development for the assistive robot for elderly{" "}
                <br></br>- Built user-friendly platform that enable intuitive
                interaction and communication with the robot using Natural
                Language Processing techniques <br></br>- Intuitive Computing
                Laboratory & advised by Dr. Huang
              </p>
            </li> */}

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Full Stack Developer</h4>
              <span className="corp-title"><a href="https://clobbler.com">Clobbler</a></span><span>2022 — Present</span>
              <p className="timeline-text">
                - Responsible for the development of promotional landing pages, official websites, and applications, contributing to the overall development process including app design and planning.
                <br></br> - Used figma to design UI/UX, and use React to build reusable components for the simulation and web.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Frontend Developer</h4>
              <span className="corp-title"><a href="#">Samil Corp</a></span><span>2022 - 2023</span>
              <p className="timeline-text">
                - Incharge of the first project for a startup, collaborating with the design and backend teams to plan and create a promotional and supplier-oriented website.
                <br></br>- Used React.JS, Python.
                to upload file
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Frontend Developer</h4>
              <span className="corp-title"><a href="https://www.medistream.co.kr">Medistream</a></span><span>2022</span>
              <p className="timeline-text">
                - Planning and developing a promotional webpage for the Integration development team. <br></br>
                - Showcasing acquired skills in impressive frontend technologies like Three.js and GSAP. Successfully executing the first corporate project in a captivating manner.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Product Manager</h4>
              <span className="corp-title"><a href="#">Ykang Enterprise</a></span><span>2022</span>
              <p className="timeline-text">
                - Based on an understanding of the company's industry, services, and customer characteristics, leading website planning team as a product manager. <br></br>
                - Also developed online marketing strategies for effective promotion.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Marine Engineer</h4>
              <span className="corp-title"><a href="https://www.columbia-shipmanagement.com/">CSM(Columbia Ship Management)</a></span><span>2018 - 2021</span>
              <p className="timeline-text">
                - Maintain and service onboard equipment for seamless navigation, overseeing boilers, generators, and air purifiers.{" "}
                <br></br>- Handle safety inspections and emergency management of electrical and electronic devices.
              </p>
            </li>
          </ol>
        </section>

        {/* skill progress  */}
        {/* <section className="skill">
          <h3 className="h3 clients-title">My top clients</h3>
          <ul className="clients-list content-card">
            <li className="clients-item">
              <div className="title-wrapper">
                <h5 className="h5">Web Developement</h5>
                <data value="80">80%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>

            <li className="clients-item">
              <div className="title-wrapper">
                <h5 className="h5">Data Analysis</h5>
                <data value="70">70%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </li>

            <li className="clients-item">
              <div className="title-wrapper">
                <h5 className="h5">Branding</h5>
                <data value="90">90%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>

            <li className="clients-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value="50">50%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </li>
          </ul>
        </section> */}


      </article>
    </div>
  );
};

export default Resume;
