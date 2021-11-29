import React from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="row w-100 m-0">
                <div className="col-lg-1 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-11 home-area">
                    <h2>This is Home</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;