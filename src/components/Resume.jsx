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
                University of California, Berkeley
                {/* 한국해양대학교 */}
              </h4>
              <span className="timeline-item-duration">2024 — 2026</span>
              <br></br>
              <p className="h5 timeline-item-title">
                Master's degree in Design (Pursuing)
                {/* 기관시스템공학부 (졸업) */}
              </p>
              {/* <p className="timeline-text">
                (with a focus on Maritime Automous Surface Ship Major)
              </p> */}
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Korea Maritime Ocean University
                {/* 한국해양대학교 */}
              </h4>
              <span className="timeline-item-duration">2014 — 2018</span>
              <br></br>
              <p className="h5 timeline-item-title">
                Bachelor's degree in Marine System Engineering (B.S.)
                {/* 기관시스템공학부 (졸업) */}
              </p>
              {/* <p className="timeline-text">
                (with a focus on Maritime Automous Surface Ship Major)
              </p> */}
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
              <h4 className="h4 timeline-item-title">Front-end Developer & Designer</h4>
              <span className="corp-title"><a href="https://clobbler.com">Clobbler</a></span><span className="timeline-item-duration">2023</span>
              <p className="h5 timeline-item-title">
                - Responsible for the development of promotional landing pages, official websites, and applications, contributing to the overall development process including app design and planning.
                {/* 옷 수선리폼 플랫폼 클로블러 홍보용 랜딩페이지 제작 참여 및 GA4 데이터 분석 */}
                <br></br>
                <br></br>
                - Used figma to design UI/UX, and use React to build reusable components for the simulation and web.
                {/* <br></br> figma를 통한 UI/UX 디자인, 반응형 웹 개발, GA4 */}

              </p>
            </li>
            <br></br>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Frontend Developer & Designer</h4>
              <span className="corp-title"><a href="#">Samil Corp</a></span><span className="timeline-item-duration">2022</span>
              <p className="h5 timeline-item-title">
                - Incharge of the first project for a startup, collaborating with backend teams to plan and create a promotional and supplier-oriented website.
                {/* 서비스 홈페이지 제작 프로젝트 참여. */}
                <br></br>- Used React.JS, Python, chart.js.
                {/* <br></br>Python을 활용한 키워드 데이터 크롤링 및 chart.js를 이용한 데이터 시각화 작업 */}
              </p>
            </li>
            <br></br>


            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Frontend Developer Intern</h4>
              <span className="corp-title"><a href="https://www.medistream.co.kr">Medistream</a></span><span className="timeline-item-duration">2022</span>
              <p className="h5 timeline-item-title">
                - Planning and developing a promotional webpage for the Integration development team. <br></br>
                - Showcasing acquired skills in impressive frontend technologies like Three.js and GSAP. Successfully executing the first corporate project in a captivating manner.
                {/* 개발팀 브랜딩 홈페이지 기획 및 개발 참여 */}
                {/* <br></br>Three.js, gsap 라이브러리를 통한 3D 웹 구현 작업. */}
              </p>
            </li>
            <br></br>


            {/* <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Product Manager</h4>
              <span className="corp-title"><a href="#">Ykang Enterprise</a></span><span>2021-2022</span>
              <p className="h5 timeline-item-title">
                프로젝트 기획 참여 및 진행
                <br></br>자사 홈페이지 기획 참여
              </p>
            </li> */}
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Marine Engineer</h4>
              <span className="corp-title"><a href="http://www.sinokor.co.kr/en/">Sinokor Merchant Marine</a></span><span className="timeline-item-duration">2018 - 2021</span>
              <p className="h5 timeline-item-title">
                - Maintain and service onboard equipment for seamless navigation, overseeing boilers, generators, and air purifiers.{" "}
                <br></br>
                - Handle safety inspections and emergency management of electrical and electronic devices.
                {/* 선박 유지 및 보수 작업, 선박 발전기, 보일러, 청정기 담당
                <br></br> 비상기기 및 각종 전자/전기 기기 안전 점검 및 관리 담당 */}
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Apprentice Engineer</h4>
              <span className="corp-title"><a href="http://www.sinokor.co.kr/en/">Sinokor Merchant Marine</a></span><span className="timeline-item-duration">2016 - 2017</span>
              <p className="h5 timeline-item-title">
                - Assist maintaining machinery system, support and plan team meeting, workshop, etc.{" "}
                <br></br>
                {/* 선박 유지 및 보수 작업, 선박 발전기, 보일러, 청정기 담당
                <br></br> 비상기기 및 각종 전자/전기 기기 안전 점검 및 관리 담당 */}
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
