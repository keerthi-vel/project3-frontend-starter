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
            appointments: response.data.appointments
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
          this.setState({ appointment: response.data.appointments });
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
        const appointmentEls = this.state.appointments.map(appointment => {
            return (
              <div key={appointment.id} id="appointmentDiv">
                  <p>Time: {appointment.time}</p>
                  <p>Date: {appointment.date}</p>
                  <p>doctorId: {appointment.doctorId}</p>
                  <p>patientId: {appointment.patientId}</p>
                  <a href={`/schedule/${appointment.id}/edit`}>Update</a>
                  <i class="material-icons md-dark" id={appointment.id} onClick={this.deleteAppointment}>delete</i>
                  <div>
                    <form onChange={e => this.handleChange(e)} onSubmit={e => this.handleSubmit(e)}>
                    <label>Patient Id:</label>
                    <input value={appointment.patientId}/>
                    {/* <input type="text" name='patientId'/> */}
                    <input type='submit'/>
                    </form>

                  </div>
              </div>
            );
          });
    return(
        <div>
            {/* <p>1/11/21</p>
            <p>8:45 A.M</p>
            <p>Dr.Murphy</p>
            <p>George Mandrith</p>
            <button><i class="material-icons md-dark">edit</i></button>
                      <button onClick={this.deleteDoctor}><i class="material-icons md-dark">delete</i></button> */}
            <ul>{appointmentEls}</ul>
        </div>
    )}
}
export default Appointments;