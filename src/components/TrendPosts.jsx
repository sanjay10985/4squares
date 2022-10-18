import React from "react";
import '../styles/TrendingPosts.css'

const TrendPosts = (props) => {
  return (
    <div className="postBox">
      <div className="imgBox">
        <img
        src={props.imgSrc}
          alt="postImg"
          className="trend-post-image"
        />
      </div>
      <div className="trend-post-discription">
        {/* sponsored or not conditional statement */}
        <h2 className="trend-post-title">{props.title}</h2>
        <p className="trend-post-excrept">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          atque reiciendis mollitia magni excepturi vero?
        </p>
      </div>
    </div>
  );
};

export default TrendPosts;


// src="https://images.unsplash.com/photo-1665739824903-e11c5603019d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
