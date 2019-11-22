import React from 'react';
// import axios from 'axios';
// import './App.css';
import './form.css'



class Form extends React.Component{
    render(){
        return(
            <form id="appointmentFormTag" method="Post">
                    <h1 id="formHeader">Schedule appointment</h1>
               <fieldset id="contactFeild">
                   <legend id="contactLedgendTag">Contact information</legend>
                    {/* first and last name input */}
                    <p className="stepsPTag"><span className="stepsSpan">1</span> Basic information</p>
                    {/* <div id="testRow"> */}
                        <label for="first_name" id="firstNameLabel">First name:</label>
                        <input type="text" id="firstNameInput" />
                        <label for="last_name"  id="lastNameLabel">Last name:</label>
                        <input type="text" id="lastNameInput" />
                    {/* </div> */}
                    {/* gender input */}
                    <label for="gender" id="genderLabel">Gender:</label>
                    <select  id="genderDropdown">
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Other</option>
                    </select>
                    {/* phone number input */}
                    <p className="stepsPTag"><span className="stepsSpan">2</span> Contact information</p>

                    <label for="phone" id="phoneLabel">Phone number:</label>
                    <input type="tel"  id="phoneInput"/>
                    <label for="email" id="emailLabel">E-mail:</label>
                    <input type="email" id="emailInput"/>
                    {/* <label for="street_address"  id="addressLabel" >Street address:</label>
                    <input type="text" id="addressInput"/> */}
                    <label for="city"  id="cityLabel" >City:</label>
                    <input type="text" id="cityInput" />
                    <label for="state/province" id="stateLabel" >State/Province:</label>
                    <input type="text" id="stateInput" />
                    {/* <label for="postal_code" id="zipCodeLabel" >Postal/Zip code:</label> <input type="text"  id="zipCodeInput"/> */}
                   
                </fieldset>
                <fieldset id="appointmentFeild">
                <p className="stepsPTag"><span className="stepsSpan">3</span> Appointment information</p>

                    <legend id="appointmentLedgendTag">Appointment information:</legend>
                    <label for="date" id="todaysDateLabel">Today's date:</label>
                    <input type="date" id="todaysDateInput"/>
                    <label for="date" id="appointmentDateLabel">Appointment date:</label>
                    <input type="date" id="appointmentDateInput"/>
                <label id="doctorIdLabel">Doctor ID</label>
                <select id="doctorIdDropdown">
                    <option value="1">Dr.Hickman</option>
                    <option value="2">Dr.Crawford</option>
                    <option value="3">Dr.Fishback</option>
                    <option value="4">Dr.Keerthi</option>
                </select>
                <label id="patientIdLabel">Patient ID</label>
                <select id="patientLabelDropdown">
                    <option value="1">???</option>
                    <option value="2">???</option>
                    <option value="3">???</option>
                    <option value="4">???</option>
                </select>
                <p className="stepsPTag"><span className="stepsSpan">4</span> Additional information</p>
                <label id="notesLabel">Notes:</label>
                <textarea rows="10" cols="50" id="notesTextarea"/>
                </fieldset>
               {/* submit button */}
               <input type="submit" id="submitButton"/>
            </form>
            
        )
    }
}





export default Form;                