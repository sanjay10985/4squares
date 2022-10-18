import React from "react";
import "../styles/AddPost.css";

function AddPost(props) {
  return (
    <>
    {/* <a href={props.postLink}> */}
      <div
        className="imgbox"
        style={{ backgroundImage: `url(${props.imgSrc})` }}
      ></div>
      <div className="post-discription">
        <h2 className="featuredPost-title"> {props.title}</h2>
        <label className="category-label">{props.category}</label>
      </div>
      {/* </a> */}
    </>
  );
}

export default AddPost;
