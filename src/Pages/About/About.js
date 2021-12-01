import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import dewanImg from '../../image/dewan.jpeg'
import './About.css'

const About = () => {
    const bracket1 = '<'; 
    const bracket2 = '/>'; 

    return (
        <div className="about">
            <div className="row w-100 m-0">
                <div className="col-lg-1 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="about-area row m-0 col-lg-11">
                    <div className="about-text col-lg-7 col-12 text-start">
                        <h1>Dewan Mahin Chowdhury here.</h1>
                        <h3>As a Front-End Developer.</h3>
                        <div className="about-dtl">
                            <p>With nearly one year of experience in front-end development, I am a dedicated and efficient developer. I enjoy working with others on large projects the most. I am always eager to learn the newest technologies. It is my goal to improve myself and bring out the greatest in me.</p>
                            <p>In a nutshell, I am a passionate developer who enjoys coding. <br /> Check me out on <a href="https://github.com/thedeewaan" rel='noreferrer' target='_blank'>GitHub</a>, <a href="https://twitter.com/thedeewaan" rel='noreferrer' target='_blank'>Twitter</a>, and <a href="https://www.linkedin.com/in/thedeewaan/" rel='noreferrer' target='_blank'>LinkedIn</a>. ✌</p>
                            <p><span>{bracket1} </span>Download <a href='https://drive.google.com/uc?export=download&id=1YwdOYEhqqAV5dcspqE7ty4h8J5UnmNtw'>Resume.</a> <span>{bracket2}</span></p>
                        </div>
                    </div>
                    <div className="about-img col-lg-5 col-12">
                        <img src={dewanImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;