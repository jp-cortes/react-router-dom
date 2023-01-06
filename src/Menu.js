import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Menu() {
    return(
        <>
        <nav>
        {/* <nav>
            <ul>
            <li>
                <a href='/#/'>HOME</a>
            </li>
            <li>
                <a href='/#/blog'>BLOG</a>
            </li>
            <li>
                <a href='/#/about'>ABOUT</a>
            </li>
            </ul>
        </nav> */}
        
            {/* <ul>
            <li>
            <Link to={'/'}>HOME</Link>
            </li>
            <li>
            <Link to={'/blog'}>BLOG</Link>
            </li>
            <li>
            <Link to={'/about'}>ABOUT</Link>
            </li>
            </ul> */}
            <ul>
                <li>
                    <NavLink
                    to={'/'}
                    >HOME</NavLink>
                </li>
                <li>
                    <NavLink
                    to={'/blog'}
                    >BLOG</NavLink>
                </li>
                <li>
                    <NavLink
                    to={'/about'}
                    >ABOUT</NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}

export { Menu };