import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'govsa-ds';
import './App.scss';
import Navbar from './Navbar';
import Home from './Home';
import Myaccount from './Myaccount';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';


class App extends Component {



    render() {

        return (

            <div>
                <Navbar />
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route path="/myaccount" component={Myaccount} />

                </Switch>
                <Footer />

            </div>

        );

    }
}

export default App;