import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="row w-100 m-0">
                <div className="col-lg-1 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-11">
                    <h2>This is Contact</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;