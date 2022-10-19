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

  return (
    <div className="featuredPost">
      <div className="main-div">
        <div className="box box-1">
          {posts.map((post, index) =>
            post.value === 1 && post ? (
              <AddPost
                title={post.title}
                key={index}
                category={post.category}
                value={post.value}
                imgSrc={post.imgSrc}
              />
            ) : (
              []
            )
          )}
        </div>
        <div className="box-2">
          <div className="box box-3">
            {posts.map((post, index) =>
              post.value === 2 && post ? (
                <AddPost
                  title={post.title}
                  key={index}
                  category={post.category}
                  value={post.value}
                  imgSrc={post.imgSrc}
                />
              ) : (
                []
              )
            )}
          </div>
          <div className="box-4">
            <div className="box box-5">
              {posts.map((post, index) =>
                post.value === 3 && post ? (
                  <AddPost
                    title={post.title}
                    key={index}
                    category={post.category}
                    value={post.value}
                    imgSrc={post.imgSrc}
                  />
                ) : (
                  []
                )
              )}
            </div>
            <div className="box box-6">
              {posts.map((post, index) =>
                post.value === 4 && post ? (
                  <AddPost
                    title={post.title}
                    key={index}
                    category={post.category}
                    value={post.value}
                    imgSrc={post.imgSrc}
                  />
                ) : (
                  []
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
