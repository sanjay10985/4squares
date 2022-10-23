import React, { useEffect, useState } from "react";
import "../styles/FeaturedPosts.css";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  querySnapshot,
} from "firebase/firestore";
import AddPost from "../components/AddPost";

function FeaturedPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let postsArr = [];
      querySnapshot.forEach((doc) => {
        postsArr.push({ ...doc.data(), id: doc.id });
      });
      setPosts(postsArr);
    });
    return () => unsubscribe();
  }, []);

  // const textAni = document.getElementsByClassName("link");
  // const imgbox = document.getElementsByClassName("img-box");
  // Array.from(imgbox).forEach((e) => {
  //   e.addEventListener("mouseenter", () => {
  //     const postText = e.nextElementSibling.firstElementChild.firstElementChild;
  //     console.log(postText);
  //     postText.classList.toggle("animate_text");
  //   });
  //   e.addEventListener("mouseleave", () => {
  //     const postText = e.nextElementSibling.firstElementChild.firstElementChild;
  //     console.log(postText);
  //     postText.classList.toggle("animate_text");
  //   });
  // });

  // Array.from(textAni).forEach((e) => {
  //   e.addEventListener("mouseenter", () => {
  //     const imgBox = e.parentElement.parentElement.previousElementSibling;
  //     imgBox.classList.toggle("animate_img");
  //   });
  //   e.addEventListener("mouseleave", () => {
  //     const imgBox = e.parentElement.parentElement.previousElementSibling;
  //     imgBox.classList.toggle("animate_img");
  //   });
  // });

  return (
    <div className="featuredPost">
      <div className="main-div">
        <div className="box box-1">
          {posts.map(
            (post, index) =>
              post.value === 1 && (
                <AddPost
                  imgSrc={post.imgSrc}
                  title={post.title}
                  category={post.category}
                />
              )
          )}
        </div>
        <div className="box-2">
          <div className="box box-3">
            {posts.map(
              (post, index) =>
                post.value === 2 && (
                  <AddPost
                    imgSrc={post.imgSrc}
                    title={post.title}
                    category={post.category}
                  />
                )
            )}
          </div>
          <div className="box-4">
            <div className="box box-5">
              {posts.map(
                (post, index) =>
                  post.value === 3 && (
                    <AddPost
                      imgSrc={post.imgSrc}
                      title={post.title}
                      category={post.category}
                    />
                  )
              )}
            </div>
            <div className="box box-6">
              {posts.map(
                (post, index) =>
                  post.value === 4 && (
                    <AddPost
                      imgSrc={post.imgSrc}
                      title={post.title}
                      category={post.category}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
