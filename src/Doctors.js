import React from 'react';
import axios from 'axios';
import './App.css';
import './doctors.css';

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
        method: 'get'
        })
        .then( response => {
            console.log(response);

            console.log("Doctors array:",response.data.doctors);
            var doctorsList = response.data.doctors;

            console.log("Address:",response.data.doctors[1].address);
            var doctorAddress = response.data.doctors[1].address;

            console.log("Doctor Id:", response.data.doctors[1].doctorId);
            var doctorID = response.data.doctors[1].doctorId;

            console.log("Name:", response.data.doctors[1].name);
            var doctorName = response.data.doctors[1].name;

            console.log("Phone", response.data.doctors[1].phone);
            var doctorPhone = response.data.doctors[1].phone;

            this.setState({
                doctors: response.data.doctors
            });
        })
        .catch((error)=> {
              console.log('Error', error.message);
        });
    };
    // createDoctor = e => {
    //     e.preventDefault();
    //     axios({
    //         url: `${doctorUrl}/doctors/${e.target.id}`,
    //         method: "post",
    //         data: {newDoctor: this.state.newDoctor}
    //     })
        
    // }
    createDoctor = e => {
        e.preventDefault();
        axios({
          url: `${doctorUrl}/doctors`,
          method: "post",
          data: { newDoctor: this.state.newDoctor }
        }).then(response => {
          this.setState(prevState => ({
            doctors: [...prevState.doctors, response.data.doctor]
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
      render() {
        console.log(this.state);
        const doctorEls = this.state.doctors.map(doctor => {
          return (
              <div className="doctorsCArdDiv">
                    <li key={doctor.id}>
                    {doctor.name} -- {doctor.age} -- {doctor.gender} -- {doctor.doctorId}
                    <button id={doctor.id} onClick={this.deletedoctor}>
                        Delete doctor
                    </button>
                    <button id={doctor.id} onClick={this.createdoctor}>
                        Update doctor
                    </button>
                    </li>
              </div>
          );
        });
        return(
            <div id="doctorssDiv">
               <ul>{doctorEls}</ul>
            </div>
        )
    }
}
export default Doctors;