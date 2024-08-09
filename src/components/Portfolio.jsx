import React, { useState } from "react";
import "./website.css";
import NavBar from "./Navbar";

const Portfolio = (props) => {
  const { handleSectionClick, activeSection } = props;

  const portfolio_data = [
    {
      type: "Web Development",
      belong: "Personal Project",
      title: "Dynamic, Online sports goods shopping mall",
      content:
        "E-commerce website for sports goods, offering a diverse selection of products including sports wear, shoes, and balls. The website is deployed on Netlify",
      img: "/images/portfolio/dynamic.png",
      tech: "React, React Hooks, Redux, styled-components, Firebase for backend, Stripe for payment",
      link: "https://timely-cranachan-620e09.netlify.app/",
    },
    // {
    //   type: "Web Development",
    //   belong: "Personal Project",
    //   title: "Dynamic, 온라인 운동용품 쇼핑몰",
    //   content:
    //     "Redux를 이용해 카테고리, 카트 아이템 등을 관리하며 stripe를 이용한 결제, firebase를 이용한 회원가입 및 소셜로그인 등을 구현하였습니다. herotofu api 통해 문의사항을 메일로 전송하는 기능도 구현하였습니다.",
    //   img: "/images/portfolio/dynamic.png",
    //   tech: "React, React Hooks, Redux, styled-components, Firebase, Herotofu, Stripe for payment",
    //   link: "https://timely-cranachan-620e09.netlify.app/",
    // },
    {
      type: "Web Development",
      belong: "Personal Project",
      title: "Time Timer MOD for chrome extension",
      content:
        "Time timer mod ,as knwon as 'google clock', for chrome extension version. Use it durgin surfing chrome web or watching youtube.",
      img: "/images/portfolio/test.png",
      tech: "JavaScript, offscreen canvas,chrome extension API",
      link: "https://chrome.google.com/webstore/detail/time-timer-mod-for-chrome/gnoeliollaloofmielaedbhclopijlpe?hl=ko&authuser=0",
    },
    // {
    //   type: "Web Development",
    //   belong: "Personal Project",
    //   title: "Time Timer MOD for chrome extension",
    //   content:
    //     "'구글 시계'로 유명한 time timer mod를 크롬 익스텐션으로 만들어보았습니다. chrome API를 통해 현재 탭 정보 수집 및 현재 브라우저의 DOM에 접근할 수 있도록 하였고, offscreenCanvas를 통해 메인 스레드 외부에서 타이머를 실행해 content loading 시간에 구애받지 않는 타이머를 만들었습니다.",
    //   img: "/images/portfolio/test.png",
    //   tech: "JavaScript, offscreen canvas,chrome extension API",
    //   link: "https://chrome.google.com/webstore/detail/time-timer-mod-for-chrome/gnoeliollaloofmielaedbhclopijlpe?hl=ko&authuser=0",
    // },
    {
      type: "Web Development",
      belong: "Clobbler",
      title: "Clobbler landing page",
      content:
        "Landing page for advertising tailoring company 'Clobbler', offering a diverse information about mending clothes. The website is deployed on Netlify, Connected to GA(Google Analytics)",
      img: "/images/portfolio/clobbler-landing.png",
      tech: "React, Scss, Google Analytics",
      link: "https://sage-otter-4084f0.netlify.app/",
    },
    // {
    //   type: "Web Development",
    //   belong: "Clobbler",
    //   title: "Clobbler landing page",
    //   content:
    //     "옷 수선 플랫폼 Clobbler의 홍보를 위한 landing page를 제작하였습니다. 몇가지 재미있는 애니메이션 효과와 함께 카카오톡 비즈니스 채널에 연결된 버튼을 통해 서비스에 대한 문의사항을 바로 문의할 수 있도록 하였습니다. 또한 Google Analytics 4를 연결하여 고객들이 어떤 페이지에 가장 반응을 하는지 분석할 수 있도록 세팅하였습니다.",
    //   img: "/images/portfolio/clobbler-landing.png",
    //   tech: "React, Scss, Google Analytics",
    //   link: "https://sage-otter-4084f0.netlify.app/",
    // },
    // {
    //   type: "Web Development",
    //   belong: "Personal Project",
    //   title: "징검다리 건너기 - 오징어게임 in threeJS",
    //   content:
    //     "오징어 게임에 나오는 징검다리 건너기 게임을 threeJS를 이용해 구현해 보았습니다. 유리 징검다리를 눌러 한칸씩 이동할 수 있습니다!",
    //   img: "/images/portfolio/squidgame.png",
    //   tech: "threeJS, gsap",
    //   link: "https://squidgame11294284.netlify.app",
    // },
    {
      type: "Game Development",
      belong: "Personal Project",
      title: "Glass Bridge Crossing: Squid Game in ThreeJS",
      content:
        "The Glass Bridge Crossing game from Squid Game has been implemented using ThreeJS. You can move forward one step at a time by clicking on the glass tiles!",
      img: "/images/portfolio/squidgame.png",
      tech: "threeJS, gsap",
      link: "https://squidgame11294284.netlify.app",
    },
    {
      type: "Web Development",
      belong: "Samil corporation",
      title: "Official Homepage",
      content:
        "Homepage that contains abstract information about marketing company 'Samil', possible to diagnose basic marketing strategy by input a few information",
      img: "/images/portfolio/samil.png",
      tech: "React,Css, Python",
      link: "http://samil.site/"
    },
    // {
    //   type: "Web Development",
    //   belong: "Samil corporation",
    //   title: "Official Homepage",
    //   content:
    //     "삼일 마케팅 회사의 서비스 이용 홈페이지를 만들었습니다. 크롤링을 통해 원하는 키워드의 정보를 얻고, 해당 정보를 chart.js를 통해 차트로 표현하여 고객이 더 직관적으로 데이터를 확인하도록 하였습니다.",
    //   img: "/images/portfolio/samil.png",
    //   tech: "React, Css, Python, Chart.js",
    //   link: "http://samil.site/"
    // },
    {
      type: "Web Development",
      belong: "Medistream",
      title: "Introduction and Promotional Website for the Integration Development Team",
      content:
        "Introducing the Development Team's story, individual team member profiles, vision, and shared goals.",
      img: "/images/portfolio/integration.png",
      tech: "Vue3, Three.js, gsap",
      link: "https://github.com/medistream-team/integration-tech"
    },
    // {
    //   type: "Web Development",
    //   belong: "Medistream",
    //   title: "Introduction and Promotional Website for the Integration Development Team",
    //   content:
    //     "개발팀 소개를 위한 브랜딩 홈페이지를 제작하였습니다. three.js와 gsap 라이브러리를 이용해 다양한 3D 애니메이션으로 이용자들의 기억에 남는 독특한 홈페이지를 제작하였습니다.",
    //   img: "/images/portfolio/integration.png",
    //   tech: "Vue3, Three.js, gsap",
    //   link: "https://github.com/medistream-team/integration-tech"
    // },
    {
      type: "Web Development",
      belong: "Group Project",
      title: "Junggo Cloud",
      content:
        "Junggo Cloud is a platform that allows users to compare prices of used products across multiple platforms and find the cheapest or most recent listings.",
      img: "/images/portfolio/jgcloud.png",
      tech: "Html, Css, JavaScript, Python, MongoDB",
      link: "#"
    },
    // {
    //   type: "Web Development",
    //   belong: "Group Project",
    //   title: "Junggo Cloud",
    //   content:
    //     "많은 중고 플랫폼들의 제품을 크롤링하여 가장 싼 가격의 제품을 찾아주는 사이트 입니다. 크롤링된 데이터를 MongoDB를 통해 관리하였고, 배포를 위해 AWS EC2를 사용했습니다.",
    //   img: "/images/portfolio/jgcloud.png",
    //   tech: "Html, Css, JavaScript, Python, MongoDB, AWS EC2",
    //   link: "#"
    // },
    {
      type: "Game Development",
      belong: "Group Project",
      title: "Pigeon Hunt",
      content:
        "Top-down shooting action game where you hunt flying pigeons in the urban cityscape.",
      img: "/images/portfolio/pigeon-hunt.png",
      tech: "Unity, Blender, Plastic SCM",
      link: "https://17wolfgwang.itch.io/prototypegame-10",
    },
    // {
    //   type: "Game Development",
    //   belong: "Group Project",
    //   title: "Pigeon Hunt",
    //   content:
    //     "유니티를 활용해 자그마한 탑다운 3D 슈팅 게임을 만들어 보았습니다.",
    //   img: "/images/portfolio/pigeon-hunt.png",
    //   tech: "Unity, Blender, Plastic SCM",
    //   link: "https://17wolfgwang.itch.io/prototypegame-10",
    // },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory !== "All"
      ? portfolio_data.filter((project) => project.type === selectedCategory)
      : portfolio_data;

  return (
    <div className="main-content">
      <NavBar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      ></NavBar>

      <article className="blog active" data-page="blog">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        {/* From portfolio */}

        <section class="projects">
          <ul class="filter-list">
            <li class="filter-item">
              <button
                className={selectedCategory === "All" ? "active" : ""}
                data-filter-btn
                onClick={() => filterProjects("All")}
              >
                All
              </button>
            </li>

            <li class="filter-item">
              <button
                data-filter-btn
                className={
                  selectedCategory === "Web Development" ? "active" : ""
                }
                onClick={() => filterProjects("Web Development")}
              >
                Web Development
              </button>
            </li>

            <li class="filter-item">
              <button
                data-filter-btn
                className={selectedCategory === "Game Development" ? "active" : ""}
                onClick={() => filterProjects("Game Development")}
              >
                Game Development
              </button>
            </li>

            {/* <li class="filter-item">
              <button data-filter-btn>Other Tab</button>
            </li> */}

          </ul>
        </section>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            {filteredProjects.map((item, index) => (
              <li className="blog-post-item" key={index}>
                <a href={item.link} target="_blank">
                  <figure className="blog-banner-box">
                    <img src={item.img} alt={item.img} loading="lazy" />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">{item.type}</p>
                      <span className="dot"></span>
                      <p className="blog-category">{item.belong}</p>
                    </div>
                    <h3 className="h3 blog-item-title">{item.title}</h3>
                    <p className="blog-text">{item.content}</p>
                    <div className="blog-meta">
                      <p
                        className="blog-category"
                        style={{ marginTop: "20px" }}
                      >
                        {item.tech}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
            {/* Add more blog post items as needed */}
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Portfolio;
