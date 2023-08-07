import React, { useState } from "react";
import "./website.css";
import NavBar from "./Navbar";

const Portfolio = (props) => {
  const { handleSectionClick, activeSection } = props;

  const portfolio_data = [
    {
      type: "Web Development",
      belong: "Clobbler",
      title: "Clobbler landing page",
      content:
        "Landing page for advertising tailoring company 'Clobbler', offering a diverse information about mending clothes. The website is deployed on Netlify, Connected to GA(Google Analytics)",
      img: "/images/portfolio/clobbler-landing.png",
      tech: "React, Scss, Google Analytics",
    },
    {
      type: "Game Development",
      belong: "Group Project",
      title: "Pigeon Hunt",
      content:
        "Top-down shooting action game where you hunt flying pigeons in the urban cityscape.",
      img: "/images/portfolio/pigeon-hunt.png",
      tech: "Unity, Blender, Plastic SCM",
    },
    {
      type: "Web Development",
      belong: "Personal Project",
      title: "Dynamic, Online sports goods shopping mall",
      content:
        "E-commerce website for sports goods, offering a diverse selection of products including sports wear, shoes, and balls. The website is deployed on Netlify",
      img: "/images/portfolio/dynamic.png",
      tech: "React, React Hooks, Redux, styled-components, Firebase for backend, Stripe for payment",
    },
    {
      type: "Web Development",
      belong: "Samil corporation",
      title: "Official Homepage",
      content:
        "Homepage that contains abstract information about marketing company 'Samil', possible to diagnose basic marketing strategy by input a few information",
      img: "/images/portfolio/samil.png",
      tech: "React,Css, Python",
    },
    {
      type: "Web Development",
      belong: "Medistream",
      title: "Introduction and Promotional Website for the Integration Development Team",
      content:
        "Introducing the Development Team's story, individual team member profiles, vision, and shared goals.",
      img: "/images/portfolio/integration.png",
      tech: "Vue3, Three.js, gsap",
    },
    {
      type: "Web Development",
      belong: "Group Project",
      title: "Junggo Cloud",
      content:
        "Junggo Cloud is a platform that allows users to compare prices of used products across multiple platforms and find the cheapest or most recent listings.",
      img: "/images/portfolio/jgcloud.png",
      tech: "Html, Css, JavaScript, Python, MongoDB",
    },
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
                <a href="#">
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
