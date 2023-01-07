import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Menu() {
    return(
        <>
        <nav> 
            <ul>
            {routes.map(route => (
                <li key={route.to}>
                    <NavLink
                    to={route.to}
                    >
                        {route.text}
                    </NavLink>

                </li>
            ))}
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
            
                {/* <li>
                    <NavLink
                    // activeclassname='nav'
                    to={'/'}
                    >HOME</NavLink>
                </li>
                <li>
                    <NavLink
                    // activeclassname='nav-active'
                    to={'/blog'}
                    >BLOG</NavLink>
                </li>
                <li>
                    <NavLink
                    // activeclassname='nav-active'
                    to={'/about'}
                    >ABOUT</NavLink>
                </li> */}
            </ul>
        </nav>
        </>
    )
}
 const routes = [];
 routes.push({
    to: '/',
    text: 'HOME',
 })
 routes.push({
    to: '/blog',
    text: 'BLOG',
 })
 routes.push({
    to: '/about',
    text: 'ABOUT',
 })

export { Menu };