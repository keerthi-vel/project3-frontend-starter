import React from 'react';
import axios from 'axios';
import './appointments.css';
import './App.css';
const appointmentUrl = 'http://localhost:3000/api';
class Appointments extends React.Component{
    state = {
        appointments: [],
        newAppointment: {
            date: '',
            time: '',
            patientId: null,
            doctorId: null
        }
    }
    componentDidMount(){
        this.getAppointments();
    }
    getAppointments = () => {
        axios({
            url: `${appointmentUrl}/appointments`,
            method: "get"
        }).then(response => {
            console.log('response')
            console.log(response)
            this.setState({
            appointments: response.data.appointment
            //the name what we called in the API (backend-jason object)
            });
        console.log(response);
        });
    };
    createAppointment = e => {
    e.preventDefault();
    axios({
        url: `${appointmentUrl}/appointments`,
        method: "post",
        data: { newAppointment: this.state.newAppointment }
    }).then(response => {
        this.setState(prevState => ({
            appointments: [...prevState.appointment, response.data.appointment]
        }));
        });
    };
    deleteAppointment = e => {
    axios({
        url: `${appointmentUrl}/appointments/${e.target.id}`,
        method: "delete"
    }).then(response => {
        this.setState({ appointments: response.data.appointments });
    });
    };
    render() {
    // console.log(this.state.appointments);
    const appointmentEls = this.state.appointments.map(appointment => {
      return(
        <div id="appointmentDiv">
            <p>1/11/21</p>
            <p>8:45 A.M</p>
            <p>Dr.Murphy</p>
            <p>George Mandrith</p>
        </div>
      );
    });
    return(
        <div id="appointmentDiv">
            <p>1/11/21</p>
            <p>8:45 A.M</p>
            <p>Dr.Murphy</p>
            <p>George Mandrith</p>
            <button><i class="material-icons md-dark">edit</i></button>
                      <button onClick={this.deleteDoctor}><i class="material-icons md-dark">delete</i></button>
            {/* <ul>{appointmentEls}</ul> */}
        </div>
    )}
}
export default Appointments;


// <li key={appointment.id}>
        //   {appointment.time} --{appointment.date} --{appointment.patientId} --{appointment.doctorId}
        //   <button id={appointment.id} onClick={this.deleteAppointment}>
        //     Delete Appointment
        //   </button>
        //   {/* <button id={appointment.id} onClick={this.createAppointment}>
        //     Create Appointment
        //   </button> */}
        // </li>
