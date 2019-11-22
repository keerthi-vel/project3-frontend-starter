import React from 'react';
import axios from 'axios';
// import './App.css';
const patientUrl = 'http://localhost:3000/api';
class Patients extends React.Component{
    state = {
        patients: [],
        newPatient: {
            name: "",
            age: "",
            gender: null,
            patientId: null
        }
    }
    componentDidMount(){
        this.getPatients();
    }
    getPatients = () => {
        axios({
          url: `${patientUrl}/patients`,
          method: "get"
        }).then(response => {
          this.setState({
            patients: response.data.patients
          });
        console.log(response);
        });
      };
      createPatient = e => {
        e.preventDefault();
        axios({
          url: `${patientUrl}/pets`,
          method: "post",
          data: { newPet: this.state.newPet }
        }).then(response => {
          this.setState(prevState => ({
            pets: [...prevState.pets, response.data.pet]
          }));
        });
      };
      deletePatient = e => {
        axios({
          url: `${patientUrl}/patients/${e.target.id}`,
          method: "delete"
        }).then(response => {
          this.setState({ patients: response.data.patients });
        });
      };
      render() {
        console.log(this.state);
        const patientEls = this.state.patients.map(patient => {
          return (
            <li key={patient.id}>
              {patient.name} -- {patient.age} -- {patient.gender} -- {patient.patientId}
              <button id={patient.id} onClick={this.deletePatient}>
                Delete Patient
              </button>
              <button id={patient.id} onClick={this.createPatient}>
                Update Patient
              </button>
            </li>
          );
        });
        return(
            <div id="PatientsDiv">
               {/* <ul>{patientEls}</ul> */}
            </div>
        )
    }
}
export default Patients;

