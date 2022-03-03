import React, { useEffect, useState } from "react";
import "../CSS/Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navBlack"}`}>
      <img
        className="navlogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="logo"
      />
      <img
        className="navAvatar"
        src="https://i.pinimg.com/564x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg"
        alt="avatar"
      />
    </div>
  );
};

export default Nav;
