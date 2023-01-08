import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

function Menu() {
    const auth = useAuth();
    return(
        <>
        <nav> 
            <ul>
            {routes.map(route => {
                if(route.private && !auth.user){ 
                    return null
                } else if(route.to === '/login' && auth.user){
                    return null;
                } else{
                    return(
                        <li key={route.to}>
                            <NavLink
                            to={route.to}
                            >
                                {route.text}
                            </NavLink>
        
                        </li>
                    )
                }

                
            })}
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
    private: false,
 });
 routes.push({
    to: '/blog',
    text: 'BLOG',
    private: false,
 });
 routes.push({
    to: '/profile',
    text: 'PROFILE',
    private: true,
 });
 routes.push({
    to: '/login',
    text: 'LOGIN',
    private: false,
 });
 routes.push({
    to: '/logout',
    text: 'LOGOUT',
    private: true,
 });

export { Menu };