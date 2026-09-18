import React from 'react';

// const postsPromise = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }


const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
const getPosts3 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  

  if(!res.ok) {
   throw new Error("Failed to fetch post");
  }

  return res.json();
}

const getPosts2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
  } catch (error) {
    throw new Error("Failed to fetch post");
  }
}


const PostsPage = async() => {

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();
  
  const posts = await getPosts3();
  
  return (
    <div>
      <h2>Posts Page: {posts.length}</h2>
    </div>
  );
};

export default PostsPage;