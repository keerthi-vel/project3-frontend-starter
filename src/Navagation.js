import React from 'react';
// import axios from 'axios';
import Home from './Home.js';
import Doctors from './Doctors';
import Schedule from './Schedule';
import Appointments from './Appointments';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


class Navagation extends React.Component{
    render(){
        return(
        <Router>
            <div id="navagationDiv">
                <ul id="navagationUl">
                    <li className="navagationLis"><Link to="/">Home</Link></li>
                    <li className="navagationLis"><Link to="/doctors">Doctors</Link></li>
                    <li className="navagationLis"><Link to="/schedule">Shedule</Link></li>
                    <li className="navagationLis"><Link to="/appointments">Appointments</Link></li>
                </ul>
                <div>
                    <Route exact path="/" component={() => <Home/>}/>
                    <Route path="/doctors" component={() => < Doctors/> }/>
                    <Route path="/schedule" component={() => < Schedule/> }/>
                    <Route path="/appointments" component={() => < Appointments/> }/>
                </div>
            </div>   
        </Router>
        )
    }
}





export default Navagation;

