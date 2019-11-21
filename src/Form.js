import React from 'react';
// import axios from 'axios';
import './App.css';





class Form extends React.Component{
    render(){
        return(
            <form id="appointmentFormTag" method="Post">

                    <h1>Schedule appointment</h1>
               <fieldset>
                   <legend>Contact information</legend>
                    {/* first and last name input */}
                    <label for="first_name">First name:</label>
                    <input type="text" required/>
                    <label for="last_name">Last name:</label>
                    <input type="text" required/>
                    {/* gender input */}
                    <label for="gender">Gender:</label>
                    <select>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Other</option>
                    </select>
                    {/* phone number input */}
                    <label for="phone">Phone number:</label>
                    <input type="tel" required/>
                    <label for="email">e-mail:</label>
                    <input type="email"/>
                    <label for="street_address" required>Street address:</label>
                    <input type="text"/>
                    <label for="city" required>City:</label>
                    <input type="text"/>
                    <label for="state/province">State/Province:</label>
                    <input type="text"required/>
                    <label for="postal_code">Postal/Zip code:</label>
                    <input type="text"/>
                </fieldset>
                <fieldset>
                    <legend>Appointment information:</legend>
                    <label for="date">Today's date:</label>
                    <input type="date"/>
                    <label for="date">Appointment date:</label>
                    <input type="date"/>
                <label>Doctor ID</label>
                <select>
                    <option value="1">Dr.Hickman</option>
                    <option value="2">Dr.Crawford</option>
                    <option value="3">Dr.Fishback</option>
                    <option value="4">Dr.Keerthi</option>
                </select>
                <label>Patient ID</label>
                <select>
                    <option value="1">???</option>
                    <option value="2">???</option>
                    <option value="3">???</option>
                    <option value="4">???</option>
                </select>
                <label>Notes:</label>
                <textarea rows="10" cols="50"/>
                </fieldset>
               {/* submit button */}
               <input type="submit"/>
            </form>
            
        )
    }
}





export default Form;                