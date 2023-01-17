import React from "react";
import "../../styles/blogItem.css";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

const BlogItem = ({
  blog: { id, category, title, description, cover, authorName, createdAt },
}) => {
  return (
    <div className="blog-wrapper">
      <div
        className="blog-container"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="blog-context">
          <div className="blog-category">
            <span>{category}</span>
          </div>
          <div className="blog-title">
            <h2>{title}</h2>
          </div>
          <div className="author-details">
            <div className="author-name">
              <div className="details-icon">
                <IoPersonOutline />
              </div>
              <div>{authorName}</div>
            </div>
            <div className="published">
              <div className="details-icon">
                <MdOutlineDateRange />
              </div>
              <div>{createdAt}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
