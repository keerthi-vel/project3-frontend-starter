import React from 'react';
import axios from 'axios';
import './App.css';

const doctorUrl = 'http://localhost:3000/api';
class Doctors extends React.Component{
    state = {
        doctors: [],
        newDoctor: {
            name: "",
            address: "",
            phone: null,
            doctorId: null
        }
    }
    componentDidMount(){
        this.getDoctors();
    }
    getDoctors = () => {
        axios({
          url: `${doctorUrl}/doctors`,
          method: "get"
        }).then(response => {
          this.setState({
            doctors: response.data.doctors
          });
        console.log(response);
        });
      };
      createDoctor = e => {
        e.preventDefault();
        axios({
          url: `${doctorUrl}/doctors`,
          method: "post",
          data: { newDoctor: this.state.newDoctor }
        }).then(response => {
          this.setState(prevState => ({
            doctors: [...prevState.doctors, response.data.doctors]
          }));
        });
      };
      deleteDoctor = e => {
        axios({
          url: `${doctorUrl}/doctors/${e.target.id}`,
          method: "delete"
        }).then(response => {
          this.setState({ doctors: response.data.doctors });
        });
      };
    render(){ 
        const doctorsList = this.state.doctors.map(doctors => {
               return <li key={doctors.id}>
               {doctors.doctorId} -- {doctors.name} -- {doctors.address} -- {doctors.phone}</li>
             })
        return(
            <div id="DoctorsDiv">
               <ul>{doctorsList}</ul> 
            </div>
        )
    }
}
export default Doctors;