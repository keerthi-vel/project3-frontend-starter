import React from 'react';
// import axios from 'axios';
// import './App.css';
import './form.css'



class Form extends React.Component{
    render(){
        return(
            <form id="appointmentFormTag" method="Post">
                <h1>Schedule an appointment</h1>
                <label>Appointment date:</label>
                < input type="date"/>
                <label>Appointment time:</label>
                <input type="time"/>
                <label>Doctor ID:</label>
                <select>
                    <option value="1">Dr.</option>
                    <option value="2">Dr.</option>
                    <option value="3">Dr.</option>
                    <option value="4">Dr.</option>
                </select>
                <label>Patient Id:</label>
                <input type="text"/>
            </form>
        )
    }
}





export default Form;                