import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./bg-yt-logo.png";
import userIcon from "./userimg.png";
import hamburgerBtn from "./hamburger-btn2.png";
import styled from "styled-components";
import VideoSection from "./Shorts/video.jsx";

import CommentSection from "./Shorts/comments.jsx";

import "./index.css";

const Shorts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`main-container ${sidebarOpen ? "sidebar-active" : ""}`}>
      {/* Navigation bar */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark  ${
          sidebarOpen ? "sidebar-active" : ""
        }`}
      >
        {/* Hamburger button */}
        <button className="btn btn-outline-lightgray" onClick={toggleSidebar}>
          {sidebarOpen ? (
            <img
              src={hamburgerBtn}
              alt="close sidebar"
              style={{ width: "auto", height: "auto" }}
            />
          ) : (
            <img
              src={hamburgerBtn}
              alt="open sidebar"
              style={{ width: "auto", height: "auto" }}
            />
          )}
        </button>
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
        </a>
        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}
        >
          <img
            src={hamburgerBtn}
            alt="hamburger button"
            style={{ width: "30px", height: "30px" }}
          />
        </button>

        <div
          className={`collapse navbar-collapse ${sidebarOpen ? "show" : ""}`}
        >
          <form className="form-inline my-2 my-lg-0 mx-auto">
            <input
              className="form-control-mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "500px", borderRadius: "5px" }}
            />
          </form>
          {/* User info */}
          <ul className="navbar-nav ml-auto">
            <li>
              <p className="user-name">User@gmail.com</p>
            </li>
            <li
              className="nav-item"
              style={{ paddingLeft: "14px", paddingTop: "14px" }}
            >
              <img
                src={userIcon}
                alt="user icon"
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
            </li>
          </ul>
        </div>
        <div>
          {/* Sidebar Overlay */}
          <div
            className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
            onClick={toggleSidebar}
          ></div>
          {/* Sidebar */}
          <div>
            {/* Sidebar Overlay */}
            <div
              className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
              onClick={toggleSidebar}
            ></div>
            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
              <h2 className="sd-header">Menu</h2>
              <ul>
                <li className="sd-button">
                  <Link to="/" style={{ color: "#fff" }}>
                    Inicio
                  </Link>
                </li>
                {/* Correctly use Link component */}
                <li className="sd-button">
                  <Link to="/Shorts" style={{ color: "#f70505" }}>
                    Shorts
                  </Link>
                </li>
                <li className="sd-button">
                  <Link to="/Subs" style={{ color: "#fff" }}>
                    Suscripciones
                  </Link>
                </li>
                <li className="separator"></li>
                <li className="sd-subh">Tu »</li>
                <li className="sd-button">
                  <Link to="/Canal" style={{ color: "#fff" }}>
                    Teu Canal
                  </Link>
                </li>
                <li className="sd-button">
                  <Link to="/history" style={{ color: "#fff" }}>
                    Historial
                  </Link>
                </li>
                <li className="sd-button">
                  <Link to="/Repo" style={{ color: "#fff" }}>
                    Lista de reproduções
                  </Link>
                </li>
                <li className="sd-button">
                  <Link to="/Meus_videos" style={{ color: "#fff" }}>
                    Meus Videos
                  </Link>
                </li>
                <li className="sd-button">
                  <Link to="/Later" style={{ color: "#fff" }}>
                    Ver más tarde
                  </Link>
                </li>
                <li className="sd-button">
                  <Link to="/Likes" style={{ color: "#fff" }}>
                    Vídeos que Gostaste
                  </Link>
                </li>
                <li className="separator"></li>
                <li className="sd-subh">Canais</li>
                <li className="sd-susc">BrainRot</li>
                <li className="sd-susc">PEPE</li>
                <li className="sd-susc">Joãosinho gaming</li>
                {/* Other sidebar items... */}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div>
        {/* Include video section */}
        <VideoSection />

        {/* Include comment section */}
        <CommentSection />
      </div>
    </div>
  );
};

export default Shorts;
