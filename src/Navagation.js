import React from 'react';
// import axios from 'axios';
import './App.css';





class Navagation extends React.Component{
    render(){
        return(
            <div id="navagationDiv">
                <ul id="navagationUl">
                    <li className="navagationLis">home</li>
                    <li className="navagationLis">doctors</li>
                    <li className="navagationLis">schedule</li>
                    <li className="navagationLis">appointments</li>
                </ul>
            </div>
        )
    }
}





export default Navagation;
