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
            age: null,
            gender: "",
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
            // if (error.response) {
            //   // The request was made and the server responded with a status code
            //   // that falls out of the range of 2xx
            //   console.log("first case",error.response.data);
            //   console.log("second case",error.response.status);
            //   console.log("third case",error.response.headers);
            // } else if ("fourth case",error.request) {
            //   // The request was made but no response was received
            //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            //   // http.ClientRequest in node.js
            //   console.log("fith case",error.request);
            // } else {
            //   // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            // }
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
          data: { doctor: this.state.doctors }
        }).then(response => {
          this.setState(prevState => ({
             doctors: response.data.doctors
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
              
                  <div key={doctor.id} className="doctorsCArdDiv">
                      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-ckJyRnhYpswKfyGR1aLAPiLFx3eh5yUk_P1fh7dpeZ8SHBW&s" /> */}
                      <p>Dr.{doctor.name}</p>
                      <p>Address: {doctor.address}</p>
                      <p>Phone: {doctor.phone}</p>
                      <p>Id: {doctor.id}</p>
                      <button><i class="material-icons md-dark">edit</i></button>
                      <button onClick={this.deleteDoctor}><i class="material-icons md-dark">delete</i></button>
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


// const doctors = this.props."doctors go here".map((word) => {
//     return <h1 className="doctorsListDiv">{word}</h1>
//    })
    
//     return(
//         <div>
//             {/* <input type="text"/>
//             <button>Search</button> */}
//             <div id="doctorsDiv" >
//                {doctors}
//             </div>
//         </div>





{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-ckJyRnhYpswKfyGR1aLAPiLFx3eh5yUk_P1fh7dpeZ8SHBW&s" />
               <h3>Dr.Meridith Grey</h3>
               <h5>Oncology</h5>
               <p>
               Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
               </p> */}