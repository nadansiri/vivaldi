import React from "react";
import PostNews from "../components/PostNews";
import PublicComment from "./PublicComment";
import {
  Table
} from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-1">
      </div>

      <PostNews/>
      {/*<PublicComment />*/}
    </div>
  );
};

export default Home;
