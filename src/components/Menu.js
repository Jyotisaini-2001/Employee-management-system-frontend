"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div className="menu fixed top-0 left-0 right-0 z-50" style={{ opacity: 1 }}>
      <div className="section">
        <div className="menu-flex" style={{}}>
          <a
            href="/"
            aria-current="page"
            className="logo-menu "
          >
            <div className="logo ">
            {/* <img src="/remasto.webp" alt="#logo" className="h-12 " /> */}
            </div>
          </a>
          <div
            className="menu-links-size"
            style={{ height: menuOpen ? "auto" : "" }}
          >
            <div className="menu-wr">
            <Link href="/" className="link is--top ">
                <div className="menu-text text-transparent bg-gradient-to-r from-purple-700 via-purple-600 to-red-500 bg-clip-text">
                  Home
                </div>
              </Link>
          
             
              <Link href="/form" className="link is--top ">
                <div className="menu-text  text-marine-blue">
                  Add New Employee
                </div>
              </Link>

              <Link href="/employee-list" className="link is--top ">
                <div className="menu-text  text-marine-blue">View Employee</div>
              </Link>
            </div>
          </div>
          <div className="menu-btn" onClick={toggleMenu}>
            <div
              data-is-ix2-target="1"
              data-animation-type="lottie"
              data-src="https://assets-global.website-files.com/62a7879c4db99592b325fd94/62d93d181413a21717289131_menu-btn.json"
              data-loop="0"
              data-direction="1"
              data-autoplay="0"
              data-renderer="svg"
              data-default-duration="2"
              data-duration="0"
              data-ix2-initial-state="0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 40 40"
                width="40"
                height="40"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0px, 0px, 0px)",
                  contentVisibility: "visible",
                }}
              >
               
                <g clipPath="url(#__lottie_element_2)">
                  <g
                    transform="matrix(1.0538500547409058,0,0,1,21.938030242919922,32.3120002746582)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,-1.8370000123977661,-17.312000274658203)"
                    >
                      <path
                        fill="rgb(42,63,91)"
                        fillOpacity="1"
                        d="M19,-1C19,-1,19,1,19,1C19,1,-19,1,-19,1C-19,1,-19,-1,-19,-1C-19,-1,19,-1,19,-1z"
                      ></path>
                      <path
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="rgb(42,63,91)"
                        strokeOpacity="1"
                        strokeWidth="0"
                        d="M19,-1C19,-1,19,1,19,1C19,1,-19,1,-19,1C-19,1,-19,-1,-19,-1C-19,-1,19,-1,19,-1z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1.0538500547409058,0,0,1,21.938030242919922,41.3120002746582)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,-1.8370000123977661,-17.312000274658203)"
                    >
                      <path
                        fill="rgb(42,63,91)"
                        fillOpacity="1"
                        d="M19,-1C19,-1,19,1,19,1C19,1,-19,1,-19,1C-19,1,-19,-1,-19,-1C-19,-1,19,-1,19,-1z"
                      ></path>
                      <path
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="rgb(42,63,91)"
                        strokeOpacity="1"
                        strokeWidth="0"
                        d="M19,-1C19,-1,19,1,19,1C19,1,-19,1,-19,1C-19,1,-19,-1,-19,-1C-19,-1,19,-1,19,-1z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Menu;
