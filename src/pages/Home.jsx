import React from "react";
import {FeaturedPosts} from "../containers";
import {TrendingPosts} from "../containers";

const Home = () => {
  return (
    <div className="home">
      <FeaturedPosts />
      <TrendingPosts />
    </div>
  );
};

export default Home;
