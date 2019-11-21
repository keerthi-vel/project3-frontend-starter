import React from 'react';
import axios from 'axios';
import './App.css';





class Form extends React.Component{
    render(){
        return(
            <form id="appointmentFormTag">
                <label for="first_name">First name:</label>
                <input type="text"/>
                <label for="last_name">Last name:</label>
                <input type="text"/>
                <input type="submit"/>
                <label for="gender">Gender:</label>
                <select>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
               </select>
            </form>
            
        )
    }
}





export default Form;


// <h1>Schedule appointment</h1>
//                 <h2>Date</h2>
//                 <input type="date"/>
//                     <input type="text"/>
//                 <h2>Doctor ID</h2>
//                 <select>
//                     <option value="1">Dr.Hickman</option>
//                     <option value="2">Dr.Crawford</option>
//                     <option value="3">Dr.Fishback</option>
//                     <option value="4">Dr.Keerthi</option>
//                 </select>
//                 <h2>Patient ID</h2>
//                 <select>
//                     <option value="1">???</option>
//                     <option value="2">???</option>
//                     <option value="3">???</option>
//                     <option value="4">???</option>
//                 </select>