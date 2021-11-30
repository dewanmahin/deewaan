import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="myLogo">
                <h2 className='m-0'>
                    <NavLink to="/home">
                        <span style={{fontSize: '45px', fontWeight: 'bold'}}>d</span>eewaan<span style={{color:'#CB450C', fontSize: '70px'}}>.</span>
                    </NavLink>
                </h2>
            </div>
            <div className="sidebar-menu mt-4 d-flex flex-column">
                {/* <NavLink activeStyle={{borderBottom: '2px solid #CB450C', color: '#ebebeb'}} className="l1" to="/home">Home</NavLink> */}
                <NavLink activeStyle={{borderBottom: '2px solid #CB450C', color: '#ebebeb'}} className="l2" to="/about"><FontAwesomeIcon /> About</NavLink>
                <NavLink activeStyle={{borderBottom: '2px solid #CB450C', color: '#ebebeb'}} className="l3" to="/projects">Projects</NavLink>
                <NavLink activeStyle={{borderBottom: '2px solid #CB450C', color: '#ebebeb'}} className="l4" to="/contact">Contact</NavLink>
                <div className="sidebar-resume mt-3">
                    <a href='https://drive.google.com/uc?export=download&id=1YwdOYEhqqAV5dcspqE7ty4h8J5UnmNtw'><span>Resume</span> <FontAwesomeIcon style={{fontSize: '15px'}} icon={faDownload}/></a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;