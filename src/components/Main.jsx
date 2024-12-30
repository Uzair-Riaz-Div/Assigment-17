import React from "react";
import blogPosts from "../data/blogPosts";
import BlogCard from "./BlogCard";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="blog">
          <h2 className="h2">Latest Blog Post</h2>
          <div className="blog-card-group">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
          <button className="btn load-more">Load More</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
