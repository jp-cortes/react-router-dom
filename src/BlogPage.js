import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { blogData } from './blogData';

function BlogPage() {
    return(
        <>
        <h2>BlogPage</h2>
        {/* Is the component which allows to work with nested routes (routes inside routes) */}
        <Outlet/>
        <ul>
            {blogData.map(post => (
                <BlogLink Key={post.slugs} post={post}/>
            ))}
        </ul>
        </>
    );
}
function BlogLink({ post }) {
    return(
    
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
        
    )
}


export { BlogPage };