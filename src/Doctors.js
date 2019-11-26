import React from 'react';
import axios from 'axios';
// import './App.css';
import './doctors.css';
const doctorUrl = 'http://localhost:3000/api';
class Doctors extends React.Component{
    state = {
        doctors: [],
        newDoctor: {
            name: "",
            address: "",
            phone: null,
        }
    }
    componentDidMount() {
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
        //   this.setState(prevState => ({
        //     doctors: [...prevState.doctsors, response.data.doctors]
        //   }));
        this.setState({ doctors: response.data.doctors });
      });
    };
    handleChange = e => {
      let newDoctor = {
        [e.target.name]: e.target.value,
        [e.target.address]: e.target.value,
        [e.target.phone]: e.target.value
      };
      this.setState((prevState, currentState) => ({
        newDoctor: { ...prevState.newDoctor, ...newDoctor }
      }));
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
                  <div>
                    <div key={doctor.id} className="doctorsCardDiv">
                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-ckJyRnhYpswKfyGR1aLAPiLFx3eh5yUk_P1fh7dpeZ8SHBW&s" /> */}
                        <p>Dr.{doctor.name}</p>
                        <p>Address: {doctor.address}</p>
                        <p>Phone: {doctor.phone}</p>
                        <p>Id: {doctor.id}</p>
                        <i class="material-icons md-dark" id={doctor.id} onClick={this.deleteDoctor}>delete</i>
                    </div>
                  </div>
          );
        });
        return(
            <div id="doctorsDiv">
              <h1>Create Doctor Profile</h1>
                    <form onSubmit={this.createDoctor} onChange={e => this.handleChange(e)}>
                      Name: <input type="text" name="name" />
                      Address: <input type="text" name="address" />
                      Phone: <input type="number" name="phone" />
                      <input type="submit" value="New Doctor Submit" />
                    </form>
              <ul>{doctorEls}</ul>
            </div>
        )
    }
}
export default Doctors;
