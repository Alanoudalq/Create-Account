import React, { Component } from 'react';
import './App.scss';

class Home extends Component {


    render() {

        return (

            <div className="bg-gray-pastel border p-5 screen-hieght">
                <div className="justify-content-center m-lg-5">
                    <div className="bg-white flex-auto m-5 p-5 ">
                        <h1>Create your account...</h1><br />
                        <div className="justify-content-center">
                            <div className="col-md-9 m-5">
                                <form>

                                    <div className="d-lg-inline-flex mt-5 mb-md-5">
                                        <div className=" col-md-6 ">
                                            <label className="govsa-input__label" for >First name</label>
                                            <input className="govsa-input"
                                                name="firstName"
                                                placeholder="Input text |" />
                                        </div>

                                        <div className=" col-md-6">
                                            <label className="govsa-input__label">Last name</label>
                                            <input className="govsa-input"
                                                name="lastName"
                                                placeholder="Input text |"

                                            /></div>
                                        <div className=" col-md-6">
                                            <label className="govsa-input__label">Age</label>
                                            <input className="govsa-input"
                                                name="age"
                                                placeholder="Input text |"

                                            />  </div>
                                    </div>
                                </form>
                                <br></br>
                                <form>
                                    <div className="d-lg-inline-flex mb-md-2">
                                        <div className=" col-md-6  inline-flex-l">
                                            <div className="col-md-6">
                                                <label className="govsa-input__label">Gender</label>
                                            </div>
                                            <div className="mt-5 inline-flex-l mb-md-5">
                                                <input className="govsa-radio input " type="radio" name="gender" id="" />
                                                <label className="govsa-input__label  input">Male</label>


                                                <input type="radio" name="gender" />
                                                <label className="govsa-input__label ">Fmale</label>
                                            </div>
                                        </div>
                                        <div className=" col-md-6">
                                            <label className="govsa-input__label">Select your country</label>

                                            <div className="dropdown govsa-dropdown">
                                                <button className="dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false" name="country" >
                                                    Label
                                             <i className="govsa-icon govsa--arrowdown">

                                                    </i>
                                                </button>
                                                <div className="dropdown-menu">

                                                    <a className="govsa-dropdown__item" href="#" title="item 1">Saudi Arabia </a>
                                                    <a className="govsa-dropdown__item" href="#" title="item 2">UAE</a>
                                                    <a className="govsa-dropdown__item" href="#" title="item 3">Jordan</a>
                                                </div>
                                            </div>

                                        </div>

                                        <div className=" col-md-6">
                                            <label className="govsa-input__label">Phone number</label>

                                            <input className="govsa-input"
                                                name="phoneNumber"
                                                placeholder="Input text |"
                                            />
                                        </div>
                                    </div>
                                </form>
                                <br></br>
                                <form className="m-4 mt-5 ">
                                    <div className="d-lg-inline-flex mb-md-5">
                                        <label className="govsa-checkbox b">
                                            I confirme all the provided information is true and correct
                                        <input type="checkbox" />
                                            <span className="govsa-checkbox__checkmark"></span>

                                        </label>

                                    </div>
                                </form>
                                <form>
                                    <div className="m-md-5 tr-ns">
                                        <button className=" " type="button" className="btn govsa-btn--darkBlue">CREATE ACCOUNT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;