import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="myLogo">
                <h2>
                    <NavLink to="/home">
                        <span style={{fontSize: '45px', fontWeight: 'bold'}}>d</span>eewaan<span style={{color:'#CB450C', fontSize: '70px'}}>.</span>
                    </NavLink>
                </h2>
            </div>
            <div className="sidebar-menu d-flex flex-column">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="sidebar-resume">
                <button>Resume</button>
            </div>
        </div>
    );
};

export default Sidebar;