const BlogList = ({blogs, listTitle}) => {

    return (
        <div className="blog-list">
            <div className="blog-list-title">
                <h1>{ listTitle }</h1>
            </div>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;