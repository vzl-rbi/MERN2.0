import React from "react";

const Home = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div class="logo">
            <a href="#">SoulSociety</a>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#" class="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="menu-btn">
            <div className="menu-btn__burger"></div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Home;
