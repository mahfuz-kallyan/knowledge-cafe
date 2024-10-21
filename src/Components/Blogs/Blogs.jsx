import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        .catch(error => console.log(error))
    }, [])


    return (
        <div className="md:w-2/3">
            <h1>Bolgs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;