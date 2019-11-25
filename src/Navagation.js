import React from 'react';
import axios from 'axios';
import Home from './Home.js';
import Doctors from './Doctors';
import Schedule from './Schedule';
import Appointments from './Appointments';
import Patients from './Patients';
import './navagation.css';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

  var moment = require('moment');


  const doctorUrl = 'http://localhost:3000/api';




class Navagation extends React.Component{
    render(){
        const time =  moment().format('LT'); 
        return(
        <Router>
            
            <div id="bodyDiv">
                    {/* <div id="headerDiv">
                        <p>Medical app</p>
                        <p>{time}</p>
                    </div> */}
                    <div id="navagationDiv">
                    <ul id="navagationUl">
                        <div className="navagationLinkDiv">
                            <li className="navagationLis">
                                <Link to="/">
                                    <i class="material-icons">home</i>
                                
                                    <p>Home</p>
                                </Link>
                            </li>
                        </div>
                        
                        <div className="navagationLinkDiv">
                        <li className="navagationLis">
                            <Link to="/doctors">
                                <i class="material-icons">account_circle</i>
                            
                                <p>Doctors</p>
                            </Link>
                        </li>
                        </div>
                        
                        <div className="navagationLinkDiv">
                            <li className="navagationLis">
                                <Link to="/patients">
                                <i class="material-icons">assignment_ind</i>
                                
                                <p>Patients</p>
                                </Link>
                            </li>
                        </div>
                        
                        <div className="navagationLinkDiv">
                            <li className="navagationLis">
                                <Link to="/schedule">
                                <i class="material-icons">calendar_today</i>
                                
                                    <p>Shedule</p>
                                </Link>
                            </li>
                        </div>
                        
                        <div className="navagationLinkDiv">
                            <li className="navagationLis">
                                <Link to="/appointments">
                                    <i class="material-icons">event</i>
                                
                                    <p>Appointments</p>
                                </Link>
                            </li>
                        </div>
                        
                    </ul>
                    <div>
                        <Route exact path="/" component={() => <Home/>}/>
                        <Route path="/doctors" component={() => < Doctors/> }/>
                        <Route path="/patients" component={() => < Patients/> }/>
                        <Route path="/schedule" component={() => < Schedule/> }/>
                        <Route path="/appointments" component={() => < Appointments/> }/>
                    </div>
                </div>
            </div>   
        </Router>
        )
    }
}




export default Navagation;

