import React from "react";
import "../../styles/blog-post.css";
// import { BlogData } from "../data/blogData";
import BlogItem from "./BlogItem";
const BlogPost = ({ blogs }) => {
  return (
    <div className="blog-post">
      {blogs.map((item) => (
        <BlogItem key={item.id} blog={item} />
      ))}
    </div>
  );
};

export default BlogPost;
