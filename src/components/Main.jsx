import React, { useState } from "react";
import "./website.css";
import NavBar from "./Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Main = (props) => {
  const { activeSection, handleSectionClick } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(null);

  const openModal = (index) => {
    setIsModalOpen(true);
    setSelectedSkills(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const about_data = [
    {
      title: "Web Development",
      content:
        "Comprehensive web development clients, merging front-end and back-end technologies",
      img: "/images/icons/web development.png",
    },
    {
      title: "Web Design",
      content:
        "Creative and user-centric approaches to craft visually appealing and intuitive website",
      img: "/images/icons/web-design.png",
    },
    {
      title: "Game Development",
      content:
        "Crafting captivating game worlds and interactive experiences using cutting-edge technologies and innovative gameplay mechanics // Unity, Blender",
      img: "/images/icons/game-development.png",
    },
    {
      title: "Mobile App Development",
      content:
        "Building intuitive and feature-rich mobile applications for seamless user experiences across platforms, leveraging the power of modern mobile technologies",
      img: "/images/icons/mobile-development.png",
    },
  ];

  const skills_data = [
    {
      title: "ReactJS",
      content:
        "HTML, CSS, SCSS, Styled-Component, JavaScript, React.js, Redux.js, Next.js, Three.js, TypeScript, Responsive Web Design",
      img: "/images/skills/reactJsLogo.gif",
    },
    {
      title: "TypeScript",
      content: "Unity, Blender",
      img: "/images/icons/game-development-skill.png",
    },
    {
      title: "NextJS",
      content: "MongoDB, Firebase, (Docker), Amazon AWS",
      img: "/images/icons/data-skill.png",
    },
    {
      title: "Firebase",
      content:
        "Python, Node.js, (Express)",
      img: "/images/icons/backend-skill.png",
    },
    {
      title: "GraphQL",
      content:
        "React Native",
      img: "/images/icons/app-development-skill.png",
    },
    {
      title: "Web Design",
      content: "(Figma), (Sketch)",
      img: "/images/icons/web-design-skill.png",
    },
  ];

  return (
    <div className="main-content">
      <NavBar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      ></NavBar>

      {/* ABOUT */}
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p>
            Hello! I am a web frontend developer with years of experience. I have expertise in React.js, TypeScript, Next.js, and React Native, and I am particularly skilled in the React ecosystem. Additionally, I have some backend experience with Node.js and Python, allowing me to contribute to the entire development process of web applications. I am also actively involved in game development, where I excel in working with Unity to create engaging games across various platforms.
          </p>

          <p>
            Outside of work, I enjoy traveling, cooking, and participating as a soccer referee. I approach every project with enthusiasm, always striving for open communication and maintaining a positive attitude. I am passionate about embracing new challenges and consistently delivering high-quality results. Collaboration and effective teamwork are of utmost importance to me, as I believe they are key to achieving success.
          </p>
          <p>
            With a diverse skill set and a commitment to continuous growth, I am dedicated to problem-solving and continuously expanding my knowledge. I am eager to contribute my positive energy and collaborate with a team to create outstanding projects. I look forward to the opportunity to work together on exciting ventures.
          </p>
        </section>

        {/* Service */}
        <section className="service">
          <h3 className="h3 service-title">What I'm doing</h3>
          <ul className="service-list">
            {about_data.map((item, index) => (
              <li className="service-item">
                <div className="service-icon-box">
                  <img src={item.img} alt={item.img} width="40" />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{item.title}</h4>
                  <p className="service-item-text">{item.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* skills */}
        <section className="skills">
          <h3 className="h3 skills-title">skills</h3>
          <ul className="skills-list has-scrollbar">
            {/* THIS */}
            <>
              {skills_data.map((item, index) => (
                <li className="skills-item">
                  <div
                    className="content-card"
                    data-skills-item
                    onClick={() => openModal(index)}
                  >
                    <figure className="skills-avatar-box">
                      <img
                        src={item.img}
                        alt="Daniel lewis"
                        width="60"
                        data-skills-avatar
                      />
                    </figure>
                    <h4
                      className="h4 skills-item-title"
                      data-skills-title
                    >
                      {item.title}
                    </h4>
                    {/* <div className="skills-text" data-skills-text>
                      <p>{item.content}</p>
                    </div> */}
                  </div>
                </li>
              ))}
            </>
          </ul>
        </section>

        {/* skills Modal */}
        {isModalOpen && (
          <div className="modal-container active" data-modal-container>
            <div
              className="overlay active"
              data-overlay
              onClick={closeModal}
            ></div>
            <section className="skills-modal">
              <button
                className="modal-close-btn"
                data-modal-close-btn
                onClick={closeModal}
              >
                <FontAwesomeIcon icon={faClose} name="close-outline"></FontAwesomeIcon>
              </button>
              <div className="modal-img-wrapper" >
                <figure className="modal-avatar-box" style={{ marginTop: "40px" }}>
                  <img
                    src={skills_data[selectedSkills].img}
                    alt={skills_data[selectedSkills].img}
                    width="80"
                    data-modal-img
                  />
                </figure>
              </div>
              <div className="modal-content">
                <h4 className="h3 modal-title" data-modal-title style={{ marginTop: "20px", marginBottom: "20px" }}>
                  {skills_data[selectedSkills].title}
                </h4>
                <div data-modal-text>
                  <p> {skills_data[selectedSkills].content}</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* clients */}
        <section className="clients">
          <h3 className="h3 clients-title">Gallery</h3>
          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#">
                <img src="/images/gallery/refree.webp" alt="gallery picture" />
              </a>
              <p>
                At heoksuk playground, as a soccer refree
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="/images/gallery/pizza.jpg" alt="gallery picture" />
              </a>
              <p>
                At Baltimore, 00 pizza house
              </p>
            </li>
            {/* <li className="clients-item">
              <a href="#">
                <img src="./assets/avartar.png" alt="gallery picture" />
              </a>
            </li> */}
            {/* <li className="clients-item">
              <a href="#">
                <img src="./assets/avartar.png" alt="gallery picture" />
              </a>
            </li> */}
            {/* <li className="clients-item">
              <a href="#">
                <img src="./assets/avartar.png" alt="gallery picture" />
              </a>
            </li> */}
            {/* <li className="clients-item">
              <a href="#">
                <img src="./assets/avartar.png" alt="gallery picture" />
              </a>
            </li> */}
          </ul>
        </section>

      </article>
    </div>
  );
};

export default Main;
