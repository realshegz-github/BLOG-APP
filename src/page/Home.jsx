import React from "react";
import BlogPost from "../component/Blog/BlogPost";
import AdsBanner from "../component/Header/AdsBanner";
import MainHeader from "../component/Header/MainHeader";
import TopHeader from "../component/Header/TopHeader";
import "../styles/home.css";
import { BlogData } from "./../component/data/blogData";

const Home = () => {
  return (
    <div className="home-page">
      <div className="navbar">
        <TopHeader />
        <AdsBanner />
        <MainHeader />
      </div>
      <div className="home-blog">
        <BlogPost blogs={BlogData} />
      </div>
    </div>
  );
};

export default Home;
