import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout( () =>{
      fetch('http://localhost:8000/blogs')
      .then(res => {
        if(!res.ok){  // error in fetching data from the server
          throw Error('cannot fetch from the resource');
        }
        return res.json();
      })
      .then( data => {
        setBlogs(data);
        setIsPending(false);
        setError(null)
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      })
    }, 500)
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} listTitle="All Blogs" />}
    </div>
  );
}
 
export default Home;
