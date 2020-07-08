import React, { Component } from 'react';
import Logo from '../src/assets/images/logo-govsa.svg';
import Facebook from '../src/assets/images/facebook-2x.png';
import Linkedin from '../src/assets/images/linkedin-2x.png';
import Twitter from '../src/assets/images/twitter-2x.png';
import YouTube from '../src/assets/images/youtube-2x.png';
import './App.scss';
import { Link } from 'react-router-dom';


class Footer extends Component {

    render() {

        return (


            <div>

                <footer className="govsa-footer">
                    <div className="d-md-flex indent justify-content-center  pt-5 pt-md-5 row-cols-3">
                        <ul className="quick-links ml-auto "><li className="font-weight-bold my-xl-n3">QUICK LINKS</li><li><br />
                            <Link to="/" className="footer-link">Home page</Link></li>
                        </ul>
                        <div className="d-md-flex justify-content-between px-4 pb-4 ">
                            <img src={Logo} width="100px" height="60px" className="ml-5" alt="gov.sa logo" />

                        </div>


                        <ul className="quick-links col-md-3 col-sm-6 "><li className="font-weight-bold my-xl-n3">QUICK LINKS</li><li><br />
                            <Link to="/myaccount" className="footer-link">My account</Link></li>
                        </ul>
                    </div>


                    <hr className="footer-divider" />
                    <div className="d-md-flex  justify-content-center p-3">

                        <div className="px-3 ">
                            <a href="https://www.facebook.com" className="footer-link m-1"
                            > <img src={Facebook} width="30" alt="facebook" />
                            </a>
                            <a href="https://www.linkedin.com" className="footer-link m-1"
                            > <img src={Linkedin} width="30" alt="linkedin" />
                            </a>
                            <a href="https://twitter.com" className="footer-link m-1"
                            > <img src={Twitter} width="30" alt="twitter" />
                            </a>
                            <a href="https://www.youtube.com" className="footer-link m-1"
                            > <img src={YouTube} width="30" alt="youtube" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        );

    }
}

export default Footer;