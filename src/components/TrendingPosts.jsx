import {
  collection,
  doc,
  onSnapshot,
  query,
  querySnapshot,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "../styles/TrendingPosts.css";
import TrendPosts from "./TrendPosts";

function TrendingPosts() {
  const [trendPosts, setTrendPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let trendPostsArr = [];
      querySnapshot.forEach((doc) => {
        trendPostsArr.push({ ...doc.data(), id: doc.id });
      });
      setTrendPosts(trendPostsArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="trending">
      <div className="trend-section">
        <div className="trend-div">
          <div className="trend-heading-div">
            {/* hourglass icon */}
            <h2 className="trend-head-title">Today's top highlights</h2>
            <p className="trend-para-des">
              Latest breaking news, pictures, videos, and special reports
            </p>
          </div>
          <div className="trend-posts">
            {trendPosts.map((trendPost, index) =>
              trendPost.trend && trendPost ? (
                <TrendPosts
                  title={trendPost.title}
                  key={index}
                  imgSrc={trendPost.imgSrc}
                  excrept={trendPost.excrept}
                />
              ) : (
                []
              )
            )}
          </div>
        </div>
        <div className="trend-sidebar"></div>
      </div>
    </section>
  );
}

export default TrendingPosts;
