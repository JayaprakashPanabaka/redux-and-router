import React from "react";
import "../index.css";
import UserInfo from "./UserInfo";
import BlogList from "./BlogList";

const Home = () => {
  return (
    // <div className='body-container'>
    //     <img className='body-image' src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png " alt="not found" />
    //     <h2 className='title'>Home</h2>
    // </div>
    <>
      <div className="body-container">
        <UserInfo />
        <BlogList />
      </div>
    </>
  );
};

export default Home;
