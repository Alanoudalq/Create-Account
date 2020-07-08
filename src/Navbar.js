import React, { Component } from 'react';
import Logo from '../src/assets/images/logo-govsa.svg';
import VisionLogo from "../src/assets/images/vision-2030-white.svg";
import './App.scss';
import './App.css';
import { Link } from 'react-router-dom';



class Navbar extends Component {

    render() {

        return (


            <div className="background">
                <header className="govsa-header">
                    <nav className=" navbar p-3">

                        <img src={Logo} width="150px" height="60px" className="ml-5" alt="gov.sa logo" />

                        <div className=" navbar col row mx-4 my-3 ">
                            <ul className='navbar style'>

                                <li className="nav-item"> <Link className="nav-link" to="/">HOME</Link>
                                <div className="govsa-tabs--border"></div></li>
                                <li className="nav-item">   <Link className="nav-link" to="/myaccount">MY ACCOUNT</Link>
                                <div className="govsa-tabs--border"></div></li>

                            </ul>
                        </div>
                        <div className="navbar ">

                            <img className="govsa-vison-2030" src={VisionLogo} width="100px" height="60px"
                                className="ml-5 col-md-9" alt="govsa vison 2030" />
                        </div>
                    </nav>
                </header>
            </div>
        );

    }
}

export default Navbar;