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
      // "사용자 중심의 디자인을 기반으로 최적화된 성능과 효율성을 갖춘 웹사이트를 제작합니다. 최신 웹 기술과 트렌드를 활용하여 방문자에게 끊임없는 가치와 원활한 경험을 제공하고자 합니다.",
      img: "/images/icons/web development.png",
    },
    {
      title: "3D Web Design",
      content:
        "Creative and user-centric approaches to craft visually appealing and intuitive website",
      // "3D 웹 디자인을 통해 고전적인 웹 디자인을 넘어서 직관적이며 몰입감 있는 사용자 경험을 만듭니다. 복잡한 3D 그래픽을 웹 환경에 통합하여 유저들에게 생동감 있는 인터랙션과 독특한 시각적 경험을 제공합니다.",
      img: "/images/icons/web-design.png",
    },
    {
      title: "Game Development",
      content:
        "Crafting captivating game worlds and interactive experiences using cutting-edge technologies and innovative gameplay mechanics // Unity, Blender",
      // "단순한 엔터테인먼트로서의 게임을 넘어, 스토리텔링과 유저의 참여를 통한 깊은 감정 연결 경험을 만들어냅니다. 저는 흥미롭고 몰입감 있는 게임을 제작하여 플레이어에게 새로운 세계를 경험하게 하고자합니다.",
      img: "/images/icons/game-development.png",
    },
    {
      title: "Mobile App Development",
      content:
        "Building intuitive and feature-rich mobile applications for seamless user experiences across platforms, leveraging the power of modern mobile technologies",
      // "사용자의 필요와 편의성을 중심으로 최적화된 앱을 제작하여 언제 어디서나 원활한 경험을 제공합니다. 현대의 빠르게 변화하는 기술 트렌드를 반영하여 효과적이고 안정적인 앱을 제공하고자 합니다.",
      img: "/images/icons/mobile-development.png",
    },
  ];

  const skills_data = [
    {
      title: "ReactJS",
      content:
        "HTML, CSS, SCSS, Styled-Component, JavaScript, React.js, Redux.js, Next.js, Three.js, TypeScript, Responsive Web Design",
      img: "/images/skills/reactjs.svg",
    },
    {
      title: "TypeScript",
      content: "Unity, Blender",
      img: "/images/skills/typescript.svg",
    },
    {
      title: "NextJS",
      content: "MongoDB, Firebase, (Docker), Amazon AWS",
      img: "/images/skills/nextjs.svg",
    },
    {
      title: "ThreeJS",
      content:
        "Python, Node.js, (Express)",
      img: "/images/skills/threejs.svg",
    },
    {
      title: "VueJS",
      content:
        "Python, Node.js, (Express)",
      img: "/images/skills/vuejs.svg",
    },
    {
      title: "Python",
      content:
        "Python, Node.js, (Express)",
      img: "/images/skills/python.svg",
    },
    {
      title: "AWS",
      content:
        "Python, Node.js, (Express)",
      img: "/images/skills/aws.svg",
    },
    {
      title: "GraphQL",
      content:
        "React Native",
      img: "/images/skills/graphql.svg",
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
            Hello! I am a web frontend developer with years of experience. I have expertise in React.js, TypeScript, Next.js, and React Native, and I am particularly
            skilled in the React ecosystem. Additionally, I have some backend experience with Node.js and Python, allowing me to contribute to the entire development process of web applications. I am also actively involved in game development, where I excel in working with Unity to create engaging games across various platforms.
          </p>
          {/* <p>
            안녕하세요! 프론트엔드 개발자 장류광입니다. React.js, TypeScript, Next.js, React Native에 특별한 전문 지식을 통해 React 생태계에서 뛰어난 업무 능력을 가지고 있습니다. 또한, Node.js와 Python과 같은 백엔드 경험도 가지고 있어 웹 애플리케이션의 전체 개발 과정에 기여할 수 있습니다.  ThreeJS, offscreenCanavs API , Unity 등 다양한 3D 라이브러리, API, 플랫폼을 공부하고 있으며, 관련 프로젝트에도 관심이 많습니다!
          </p> */}
          <p>
            Outside of work, I enjoy traveling, cooking, and participating as a soccer referee. I approach every project with enthusiasm, always striving for open communication and maintaining a positive attitude. I am passionate about embracing new challenges and consistently delivering high-quality results. Collaboration and effective teamwork are of utmost importance to me, as I believe they are key to achieving success.
          </p>
          {/* <p>
            일 외에는 여행, 요리 및 축구 심판 활동을 통해 많은 영감을 얻으려고 노력하고 있습니다. 다양한 프로젝트들을 열정적으로 참여하여 항상 소통하며 긍정적인 태도를 유지하기 위해 노력합니다. 새로운 도전을 받아들이는 것에 대한 열정을 가지고 항상 최선의 목표를 달성하기 위해 노력하고 있습니다. 개개인의 작은 프로젝트를 넘어 더 많은 사람들에게 영향을 줄 수 있는 커다란 서비스로 나아가기 위해서는 협력과 효과적인 팀워크가 성공을 이루는 핵심이라고 생각합니다.
          </p> */}
          <p>
            With a diverse skill set and a commitment to continuous growth, I am dedicated to problem-solving and continuously expanding my knowledge. I am eager to contribute my positive energy and collaborate with a team to create outstanding projects. I look forward to the opportunity to work together on exciting ventures.
          </p>
          {/* <p>
            다양한 기술을 익히고, 지속적인 성장을 위해 문제 해결, 나아가 지식의 확장을 위해 최선을 다합니다. 긍정적인 에너지로 팀에 기여하고 협력하여 흥미로운 프로젝트를 함께 완성해 나가기를 기대하고 있습니다.
          </p> */}
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
        {/* <section className="clients">
          <h3 className="h3 clients-title">Memories</h3>
          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#">
                <img src="https://drive.google.com/uc?id=1STex8JIT24lagHGexVcXd9QMdUDrz9Mf" alt="gallery picture" />
              </a>
              <p>
                혜화역 카페, 마스코트 고양이
              </p>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src="https://drive.google.com/uc?id=1Si9z8y6G3-7uWb6jnjoMC1fpMjjjIU97" alt="gallery picture" />
              </a>
              <p>
                한강, 야심한 밤 러닝 중에
              </p>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src="https://drive.google.com/uc?id=1T4N_7wDnprp_bsAAEW3QNFw42Nlmi785" alt="gallery picture" />
              </a>
              <p>
                영월, 패러글라이딩을 앞두고.
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1TBC186eJWZXOaFy8VNLLh-gSRAeFaer8" alt="gallery picture" />
              </a>
              <p>
                하코다테, 에산을 배경으로
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1S3iuLawWtCXdw7LD48FGULf_WWOFEzzG" alt="gallery picture" />
              </a>
              <p>
                LA, The last bookstore
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1Sq9jaeXK_4D1pX15QXAq0PC_jTsTXMHg" alt="gallery picture" />
              </a>
              <p>
                속초, 해수욕장 모래사장에서
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1SwRecwqSJ7A67b-ZY5fqEyIj6VYO5ntY" alt="gallery picture" />
              </a>
              <p>
                다낭, 해변을 걸으며
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1S7-euNEnZbQjpdWfqGhtiuu3VEzIjJ0K" alt="gallery picture" />
              </a>
              <p>
                종로 달동네, 야경
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1S-sWGiIaze2yrHdVxcWzzJymc3X5EgvJ" alt="gallery picture" />
              </a>
              <p>
                워싱턴 D.C., 어느 길거리 골목
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1Rwx3-kg1K1j8gbp14G_gfXVMvQlvW9Y4" alt="gallery picture" />
              </a>
              <p>
                뉴욕, 브런치 달걀 요리
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1SV2UZXF-Ix3Et-ZOxL-BNlifwWJXsxum" alt="gallery picture" />
              </a>
              <p>
                강릉, 도로 옆 버드나무
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1Syk9_MMSVqKSWIg7ItSgz-0nUIVmSSdg" alt="gallery picture" />
              </a>
              <p>
                태평양, 석양
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1RtDng3eNqjyhC40Ke6D15AO9gMrvDBzc" alt="gallery picture" />
              </a>
              <p>
                뉴욕, 스파이더 맨이 알바하던 Joe's pizza
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1RpbPaTNca-Vsw5Qh9nY8KnfUSayYbVDS" alt="gallery picture" />
              </a>
              <p>
                볼티모어, 피바디 도서관
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1Spn6a8-93HwqbfIP5zpOYlRarng3t7pg" alt="gallery picture" />
              </a>
              <p>
                서울, 장노출 불꽃놀이
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1S7DSQqHhIQlhi_nk8iMhZMpghwcByE0F" alt="gallery picture" />
              </a>
              <p>
                동대문, 장 줄리앙 전시회
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1SS47sxgZUpgh0uK-5OHIlmLVFWgTLLa8" alt="gallery picture" />
              </a>
              <p>
                흑석역, 파란 하늘과 태극 구름
              </p>
            </li>
            <li className="clients-item">
              <a href="https://www.instagram.com/eatty_11/">
                <img src="https://drive.google.com/uc?id=1SpKWt2lVVN607sg0XesUHRLp7zLriBet" alt="gallery picture" />
              </a>
              <p>
                대서양, 고요한 항해
              </p>
            </li>
          </ul>
        </section> */}

      </article>
    </div>
  );
};

export default Main;
