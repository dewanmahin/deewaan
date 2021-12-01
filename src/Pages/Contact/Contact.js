import React from 'react';
import emailjs from 'emailjs-com';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_wp48q4s', 'template_wy02thq', e.target, 'user_7JhU6oloz2ZtrGKXFSEbD')
            .then((result) => {
                // console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <div className='contact'>
            <div className="row w-100 m-0">
                <div className="col-lg-1 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-11 contact-area row m-0">
                    <div className="col-lg-6 col-12 contact-text text-start">
                        <h1 className="contact-title">PING ME!</h1>
                        <div className="contact-info">
                            <p className="cInfo-1">Have you got a question for me? An exciting project or opportunity? Would you like to hire me? Ping me! </p>
                            <p className="cInfo-2">Use the form below. If you need a response faster, ping me over on <a href="https://twitter.com/thedeewaan">Twitter</a></p>
                            <p className="cInfo-3">Alternatively, shoot me an email at <a href="mailto:dewanmahinchy@gmail.com">dewanmahinchy@gmail.com</a></p>
                        </div>
                        <div className="social-link d-flex align-items-center">
                            <a href="https://www.linkedin.com/in/thedeewaan/" rel='noreferrer' target='_blank'><FontAwesomeIcon className="linkedin" icon={faLinkedinIn}/></a>
                            <a href="https://github.com/thedeewaan" rel='noreferrer' target='_blank'><FontAwesomeIcon className="github" icon={faGithub}/></a>
                            <a href="https://www.facebook.com/thedeewaan/" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faFacebookF}/></a>
                        </div>
                    </div>
                    <form className="col-lg-6 col-12" onSubmit={sendEmail}>
                        <div className="row text-start">
                            <div className="col-md-12 fName">
                                <label className="d-block">Name<span>*</span></label>
                                <input type="text" name="name" />
                            </div>
                            <div className="col-md-12 my-3 fEmail">
                                <label className="d-block">Email<span>*</span></label>
                                <input type="email" name="email" />
                            </div>
                            <div className="col-md-12 mb-3 fMessage">
                                <label className="d-block">Message<span>*</span></label>
                                <textarea name="message" style={{height: '140px'}}></textarea>
                            </div>
                            <div className="col-12 f-link">
                                <button type="submit" className="btn">Send <FontAwesomeIcon icon={faTelegramPlane}/></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;