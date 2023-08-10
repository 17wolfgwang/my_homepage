import React, { useEffect, useState } from "react";
import "../components/website.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import NavBar from "./Navbar";
import Main from "./Main";



const Sidebar = () => {

  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className={`sidebar${showContacts ? " active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/images/profile/myProfilePhoto.jpg" alt="Profile_picture" width="80" height="180" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Bomi Kim">
            장류광
          </h1>
          <p className="title">Front-end developer</p>
          {/* <p className="title">Game developer</p>
          <p className="title">Soccer refree</p> */}
        </div>
        <button className="info_more-btn" data-sidebar-btn onClick={() => setShowContacts(!showContacts)}>
          <span> {showContacts ? "Hide Contacts" : "Show Contacts"} </span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faEnvelope} name="mail-outline"></FontAwesomeIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:dkzks44@gmail.com" className="contact-link">
                dkzks44@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faGithub} name="phone-portrait-outline"></FontAwesomeIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Github</p>
              <a href="https://github.com/17wolfgwang" className="contact-link">
                https://github.com/17wolfgwang
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faLinkedin} name="linked-in"></FontAwesomeIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Blog</p>
              {/* <time dateTime="1982-06-23">June 23, 1982</time> */}
              <a
                href="https://velog.io/@dkzks44"
                className="contact-link"
              >
                https://velog.io/@dkzks44
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faLocationPin} name="location-outline"></FontAwesomeIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Seoul, South Korea</address>
            </div>
          </li>
        </ul>
        {/* <div className="separator"></div> */}
        {/* <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul> */}
      </div>
    </aside>
  );
};

export default Sidebar;
