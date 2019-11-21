import React from 'react';
import axios from 'axios';
import './App.css';
import { METHODS } from 'http';

const doctorUrl = 'http://lacalhost3000/api';



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
            this.setState({
                newDoctor: {
                    name: response.data.doctors.name,
                    address:response.data.doctors.address,
                    phone: response.data.doctors.phone,
                    doctorId: response.data.doctors.doctorId
                }
            })
        })
        .catch(error => {
            console.log("Error:", error)
        })
    }
    render(){
        // const doctors = this.doctors.newDoctor
        return(
            <div id="DoctorsDiv">
               
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