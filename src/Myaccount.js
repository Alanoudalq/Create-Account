import React, { Component } from 'react';
import './App.scss';
import '../src/assets/icons/edit.svg';
import { Link } from 'react-router-dom';


class Myaccount extends Component {

    render() {

        return (
            <div className="bg-gray-pastel border p-5 screen-hieght">
                <div className="justify-content-center m-lg-5">
                    <div className="bg-white flex-auto m-5 p-5 ">
                        <div className="justify-content-center">
                            <h1>Welcome ...</h1>
                            <table className="table govsa-table table-hover scrollable-table">

                                <thead>
                                    <tr>
                                        <th>Column title</th>
                                        <th>Column title</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>First Name</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td>Age</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td>Country</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td>Gender</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td>Phone Number</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="row my-3">
                                <i className="p-3 font24 govsa--edit">
                                    <Link href="" className="govsa--edit">Edit</Link>

                                </i>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default Myaccount;