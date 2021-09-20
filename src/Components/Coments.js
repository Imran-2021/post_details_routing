import React from 'react';

const Coments = ({comments}) => {
    const {postId,id,name,email,body}= comments;
    return (
        <div   style={{padding:"10px",border: "1px solid red",margin: "10px"}}>
            <p>postId :- {postId} </p>
            <p style={{backgroundColor:"#0652DD",padding: "10px",color:"#ecf0f1",borderLeft:"7px solid #4b7bec"}}>ID :- {id} </p>
            <p>Name :- {name} </p>
            <p>Email :- {email} </p>
            <p>Body :- {body} </p>
        </div>
    );
};

export default Coments;