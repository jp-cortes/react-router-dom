import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "./blogData";

function BlogPost() {
    //this ona can have any name
    //is going to  get the slug of every item place in  const blogPost
    const { slug } = useParams();

    const navigate = useNavigate();

    const blogPost =  blogData.find(post => post.slug === slug);

    const goBack = () => {
        navigate('/blog');
        //this will work aswell
        // navigate(-1);
        //can be also dinamic
        // navigate(`/blog/${lalala}`);
    }

    return(
        <>
        <h2>{blogPost.title}</h2>
        <button onClick={goBack}>Go back</button>
        <p>{blogPost.author}</p>
        <p>{blogPost.content}</p>
        </>
    );
}

export { BlogPost };