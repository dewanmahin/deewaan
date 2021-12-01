import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="row w-100 m-0">
                <div className="col-lg-1 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-11 home-area">
                    <h1 className="name m-0"><span className="D">Dewan</span><span style={{color: '#CB450C'}}>-</span><span className="M">Mahin</span> <span className="C"><span style={{color: '#CB450C'}}>C</span>howdhury</span></h1>
                    <div className="position-title">
                        <h2>Front<span style={{color: '#cb450c'}}>-</span>End Developer</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;