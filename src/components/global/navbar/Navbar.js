"use client";
import React from "react";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/redux/app/theme/themeSlice";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const disPatch = useDispatch();
  const handleMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme",newTheme);
    disPatch(setTheme());
  };
  const navItems = [
    {
      name: "Home",
      href: "/",
      active: false,
    },
    {
      name: "Service",
      href: "/",
      active: false,
    },
    {
      name: "About",
      href: "/",
      active: false,
    },
    {
      name: "Contact",
      href: "/",
      active: false,
    },
  ];

  console.log("Store",theme);
  return (
    <div id="navbar">
      {/* theme or dark/light mode */}
      <div className={theme}>
        <div className="container">
          <div className="navbar-wrapper">
            <div className="logo">
              <Link href="/">Rahmat Ali</Link>
            </div>
            <div className="nav-groups">
              <ul>
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link href={item?.href}>{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right-side-btn-groups">
              <button className="login-btn">Login</button>
              <button className="theme-btn" onClick={handleMode}>
                Theme
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
