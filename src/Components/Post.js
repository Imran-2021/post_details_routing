import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body}=post;
    return (
        <div style={{padding:"10px",border: "1px solid red",margin: "10px"}}>
           <div style={{minHeight:"170px"}}>
            <p style={{backgroundColor:"#0652DD",padding: "10px",color:"#ecf0f1",borderLeft:"7px solid #4b7bec"}}>ID : {id}</p>
                <p>Title : {title}</p>
                <p>Body : {body}</p>
           </div>
            <Link to={`/post-comments/${id}`}><button style={{cursor:"pointer"}}>See Comments</button></Link>
        </div>
    );
};

export default Post;