import React from "react";
import topics from "../data/topics";
import tags from "../data/tags";
import socialLinks from "../data/socialLinks";

const Aside = () => {
  return (
    <aside>
      {/* Topics Section */}
      <div className="topics">
        <h2 className="h2">Topics</h2>
        {topics.map((topic, index) => (
          <a key={index} href={topic.href} className="topic-btn">
            <div className="icon-box">
              <ion-icon name={topic.icon}></ion-icon>
            </div>
            <p>{topic.title}</p>
          </a>
        ))}
      </div>

      {/* Tags Section */}
      <div className="tags">
        <h2 className="h2">Tags</h2>
        <div className="wrapper">
          {tags.map((tag, index) => (
            <button key={index} className="hashtag">
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact">
        <h2 className="h2">Let's Talk</h2>
        <div className="wrapper">
          <p>
            Do you want to learn more about how I can help your company overcome
            problems? Let us have a conversation.
          </p>
          <ul className="social-link">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={`icon-box ${link.className}`}>
                  <ion-icon name={link.icon}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter">
        <h2 className="h2">Newsletter</h2>
        <div className="wrapper">
          <p>
            Subscribe to our newsletter to be among the first to keep up with
            the latest updates.
          </p>
          <form action="#">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
