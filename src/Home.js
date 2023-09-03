import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    setTimeout( () =>{
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then( data => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
      })
    }, 500)
  }, []);

  return (
    <div className="home">
      {isPending && <h2>Loading...</h2>}
      {blogs && <BlogList blogs={blogs} listTitle="All Blogs" />}
    </div>
  );
}
 
export default Home;
