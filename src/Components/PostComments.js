import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Coments from './Coments';

const PostComments = () => {
    const {abc}= useParams([])
    const [comment,setComment]=useState()
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/comments"
        fetch(url)
        .then(req=>req.json())
        .then(data=>{
         const commets =  data.filter(x=>x.postId==abc)
        setComment(commets);
        })
    },[])
    return (
        <div>
           <div style={{padding:"20px", backgroundColor:"#a4b0be",margin:"20px"}}>
                <p>Id of the post :- {abc}</p>
                <p>Total comments of this post :- {comment?.length}</p>
                <Link to="/home"><button style={{padding:"10px 15px ",backgroundColor:"orange",border:"none",cursor:"pointer"}}>Back to post</button></Link>
           </div>
            <div className="comment-body">
            {
                comment?.map((ct=><Coments key={ct.id} comments={ct} />))
            }
            </div>
        </div>
    );
};

export default PostComments;