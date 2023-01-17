import React from "react";
import "../../styles/main-header.css";
import SearchBar from "./SearchBar";

const MainHeader = () => {
  return (
    <nav className="main-header">
      <div className="main-wrapper">
        <ul class="nav-links">
          <li>
            <a class="active" href="/">
              HOME
            </a>
          </li>

          <li>
            <a href="pages/about.html">ABOUT</a>
          </li>
          <li>
            <a href="pages/news.html">NEWS</a>
          </li>

          <li>
            <a href="pages/services.html">ARTICLE</a>
          </li>

          <li>
            <a href="pages/contact.html">CONTACT</a>
          </li>
        </ul>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
