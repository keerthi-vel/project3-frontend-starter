import React from "react";
import axios from "axios";
//import './patient.css'
// import './App.css';
const patientUrl = "http://localhost:3000/api";
class Patients extends React.Component {
  state = {
    patients: [],
    newPatient: {
      name: "",
      age: "",
      gender: ""
    }
  };
  componentDidMount() {
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
      url: `${patientUrl}/patients`,
      method: "post",
      data: { newPatient: this.state.newPatient }
    }).then(response => {
      //   this.setState(prevState => ({
      //     patients: [...prevState.patients, response.data.patients]
      //   }));
      this.setState({ patients: response.data.patients });
    });
  };
  handleChange = e => {
    let newPatient = {
      [e.target.name]: e.target.value,
      [e.target.age]: e.target.value,
      [e.target.gender]: e.target.value
    };
    this.setState((prevState, currentState) => ({
      newPatient: { ...prevState.newPatient, ...newPatient }
    }));
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
            
            <div key={patient.id}  className="patientsCardDiv">
                <p>Name: {patient.name}</p>
                <p>Age: {patient.age}</p>
                <p>Gender: {patient.gender}</p>
                <p>ID: {patient.id}</p>
                <i class="material-icons md-dark" id={patient.id} onClick={this.deletePatient}>delete</i>
            </div>
            
            // <li key={patient.id}>
            //   {patient.name} -- {patient.age} -- {patient.gender} -- {patient.patientId}
            //   <button id={patient.id} onClick={this.deletePatient}>
            //     Delete Patient
            //   </button>
            //   <button id={patient.id} onClick={this.createPatient}>
            //     Update Patient
            //   </button>
            // </li>
          );
        });
        return(
            <div className="patientContainer">
               <i class="material-icons md-dark" id="addButton">add_circle</i>
              <ul>{patientEls}</ul> 
            </div>
        )
    }
}
export default Patients;
