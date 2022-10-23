import React from "react";
import "../styles/AddPost.css";

function AddPost(props) {
  // const textAni = document.getElementsByClassName("link");
  // const imgbox = document.getElementsByClassName("imgbox");
  // const animtate_text_underline = () => {
  //   Array.from(imgbox).forEach((e) => {
  //     const postText = e.nextElementSibling.firstElementChild.firstElementChild;
  //     // console.log(e.nextElementSibling.firstElementChild.firstElementChild);
  //     postText.classList.toggle("animate_text");
  //     console.log(postText);
  //   });
  // };

  // const animate_img_size = () => {
  //   Array.from(textAni).forEach((e) => {
  //     const imgBox = e.parentElement.parentElement.previousElementSibling;
  //     imgBox.classList.toggle("animate_img");
  //   });
  // };

  const animate_text = () =>{
    const imgbox = document.getElementsByClassName("imgbox");
    Array.from(imgbox).forEach((e) => {
      e.addEventListener("mouseenter", () => {
        const postText = e.nextElementSibling.firstElementChild.firstElementChild;
        console.log(postText);
        postText.classList.add("animate_text");
      });  
      e.addEventListener("mouseleave", () => {
        const postText = e.nextElementSibling.firstElementChild.firstElementChild;
        console.log(postText);
        postText.classList.remove("animate_text");
      });
    });
  }
  
  const animate_img = () =>{
  const textAni = document.getElementsByClassName("link");
  Array.from(textAni).forEach((e) => {
    e.addEventListener("mouseenter", () => {
      const imgBox = e.parentElement.parentElement.previousElementSibling;
      imgBox.classList.add("animate_img");
    });
    e.addEventListener("mouseleave", () => {
      const imgBox = e.parentElement.parentElement.previousElementSibling;
      imgBox.classList.remove("animate_img");
    });
  });
}
  return (
    <>
      {/* <a href={props.postLink}> */}
      <div
        className="imgbox"
        style={{ backgroundImage: `url(${props.imgSrc})` }}
        onMouseEnter={animate_text}
        onMouseLeave={animate_text}
      ></div>
      <div className="post-discription">
        <h2 className="featuredPost-title">
          {" "}
          <a className="link"
          href=" "
             onMouseEnter={animate_img}
             onMouseLeave={animate_img}
          > {props.title} </a>
        </h2>
        <p className="category-label">{props.category}</p>
      </div>
      {/* </a> */}
    </>
  );
}

export default AddPost;
