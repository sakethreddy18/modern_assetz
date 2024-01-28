/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/landing-page.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo_small from "../assets/logo_small.png";
import logo_text from "../assets/logo_text.png";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="background-img"></div>
      <nav className="navbar bg-[rgba(217,217,217,0.2)] pb-[20px] ">
        <div className="navbar-container z-2 flex justify-between items-end ml-[100px] mr-[100px]">
          <div className="navbar-left  flex-col items-center justify-center pt-[10px] hidden lg:flex">
            <img src={logo_small} alt="" className="mb-[20px] " />
            <img src={logo_text} alt="" />
          </div>
          <div className="navbar-right hidden lg:block">
            <ul className="text-white flex gap-[100px]">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mobile-header lg:hidden md:block text-white ">
          <div className="mobile-header-container flex justify-between items-center pt-[10px] pl-[20px] pr-[20px]">
            <div className="mobile-header-logo flex flex-col items-center gap-[10px]">
              <img src={logo_small} alt="" className="w-[120px] " />
              <img src={logo_text} alt="" className="w-[200px]" />
            </div>
            <div className="mobile-header-hamburger-icon">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon>
              </button>
            </div>
          </div>

          <div
            className={`side-menu ${
              isMenuOpen ? "open" : ""
            } fixed inset-y-0 right-0 w-full p-5  text-white`}
          >
            <div className="side-menu-header flex justify-between p-[20px]">
              <div className="side-menu-header-img">
                <img src={logo_small} alt="" className="w-[120px] mb-[10px] " />
                <img src={logo_text} alt="" className="w-[200px]" />
              </div>
              <div className="side-menu-close-btn">
                <button
                  className="close-btn"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <FontAwesomeIcon icon={faTimes} size="2x"></FontAwesomeIcon>
                </button>
              </div>
            </div>

            <div className="side-menu-dropdown-list p-10 ">
              <li className="mb-4">
                <a href="#">HOME</a>
              </li>
              <li className="mb-4">
                <a href="#">ABOUT US</a>
              </li>
              <li className="mb-4">
                <a href="#">SERVICES</a>
              </li>
            </div>
          </div>
        </div>
      </nav>

      <section className="main">
        <div className="main-container flex flex-col items-center  lg:flex-row lg:justify-around lg:pt-[80px] md: gap-[20px]">
          <div className="main-left text-white  ">
            <h1 className="font-[700] text-[40px] pt-4 pb-10">
              BUILDING LEGACY
            </h1>
            <p className="leading-loose">
              Empowering Dreams, Building Homes:
              <br />
              Unleash the journey to your perfect space
              <br />
              with Modern Assetz
              <br />
              Your Dream Home Awaits-
              <br />
              Discover it Today!
            </p>
          </div>
          <div
            className="main-right w-[90%] flex flex-col lg:justify-start items-center pb-[40px] lg:w-[30%] bg-[rgba(217,217,217,0.2)]
          md:w-[70%] md:mt-[10px] md:pt-[10px]
          "
          >
            <img
              src={logo_small}
              alt=""
              className="mb-[20px] md:w-[120px] md:h-[50px]"
            />
            <form
              className="flex flex-col items-center lg:gap-[50px] lg:w-[60%]
            md: w-[70%] md: gap-[15px] "
            >
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Contact Number*" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
