import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const url = "http://localhost:8000/blogs"
  const {data: blogs, isPending, error} = useFetch(url)

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} listTitle="All Blogs" />}
    </div>
  );
}
 
export default Home;
