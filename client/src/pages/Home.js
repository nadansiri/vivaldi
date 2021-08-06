import React from "react";
import PostNews from "../components/PostNews";
import PublicComment from "./PublicComment";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-1">
          <h1>أحسنتم</h1>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=251&href=https%3A%2F%2Fwww.facebook.com%2FCentre.d.art.vivaldi.bousalem%2Fvideos%2F3480622578698323%2F&show_text=false&width=560&t=0"
          width="840"
          height="376"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        />
      </div>
      <PostNews/>
      {/*<PublicComment />*/}
    </div>
  );
};

export default Home;
