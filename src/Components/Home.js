import React, { useEffect, useState } from 'react';
import Post from './Post';
import "./Home.css"
const Home = () => {
    const [post,setPost]=useState([])
    useEffect(() =>{
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url)
        .then(req=>req.json())
        .then(data=>setPost(data))

    },[])
    return (
        <>
        <p style={{padding:"20px", backgroundColor:"#a4b0be",margin:"20px", borderLeft:"5px solid green"}}>Total Post :- {post.length}</p>
        <div className="post-body">
            {
                post.map(post =><Post key={post.id} post={post}/>)
            }
        </div>
        </>
    );
};

export default Home;