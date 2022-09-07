import React from 'react';
import {useParams} from "react-router-dom";
// post ko category like :category gareko ma 
//tes category ma jo bi aauxa as prop post ke pass janxa
const Post = (props) =>{
    return(
        <>
            <h1>This is post - {props.match.params.category}</h1>
            <h1>This is post -  {props.match.params.id}</h1>

        </>
    )

}

export default Post;