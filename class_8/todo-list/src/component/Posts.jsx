import React, { useState } from "react";
import { useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(1);
  const fetchposts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts((prev) => [...prev, ...data]);
    setPosts(data);
    console.log(posts);
  };

  useEffect(() => {
    fetchposts();
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {posts.map((posts) => (
        <p key={posts.id}>{posts.title}</p>
      ))}
    </div>
  );
};

export default Posts;
