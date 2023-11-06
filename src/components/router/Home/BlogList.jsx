import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);

  const url = "https://apis.ccbp.in/blogs";

  const fetchBlog = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    // console.log(jsonData);

    const blogsData = jsonData.map((item) => {
      return {
        id: item.id,
        author: item.author,
        avatarUrl: item.avatar_url,
        imageUrl: item.image_url,
        title: item.title,
        topic: item.topic,
      };
    });

    // console.log(blogsData);
    setBlogData(blogsData);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div>
      {blogData.map((blogItem) => {
        return <BlogItem key={blogItem.id} blogItem={blogItem} />;
      })}
    </div>
  );
};

export default BlogList;
