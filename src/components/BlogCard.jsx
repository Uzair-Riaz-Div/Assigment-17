import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-banner">
        <img
          src={post.image}
          alt={post.title}
          width="250"
          className="blog-banner-img"
        />
      </div>
      <div className="blog-content-wrapper">
        <button className="blog-topic text-tiny">{post.topic}</button>
        <h3>
          <a href="#" className="h3">
            {post.title}
          </a>
        </h3>
        <p className="blog-text">{post.description}</p>
        <div className="wrapper-flex">
          <div className="profile-wrapper">
            <img src="/author.png" alt="Julia Walker" width="50" />
          </div>
          <div className="wrapper">
            <a href="#" className="h4">
              Julia Walker
            </a>
            <p className="text-sm">
              <time datetime={post.date}>{post.formattedDate}</time>
              <span className="separator"></span>
              <time datetime={post.readTime}> {post.readTime}</time>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
