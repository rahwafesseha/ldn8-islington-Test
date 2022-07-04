import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <h3>Quiz Setting</h3>
      </div>
      <div className="settings__select">
        <input placeholder="type name"></input>
      </div>
    </div>
  );
};

export default Home;
