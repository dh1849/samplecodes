import React from "react";
import "./Post.css";

export const PostIntro = ({ children }) => {
  return <div className="post__intro">{children}</div>;
};

export const PostMain = ({ children }) => {
  return <div className="post__main">{children}</div>;
};

export const PostOutro = ({ children }) => {
  return (
    <div className="post__outro">
      {children}
      <a>See all posts</a>
    </div>
  );
};

export const Post = ({ heading, children }) => {
  return (
    <section>
      <div className="post">
        <h1 className="post__heading">{heading}</h1>
        {children}
      </div>
    </section>
  );
};
