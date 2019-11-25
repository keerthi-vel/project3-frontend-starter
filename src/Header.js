import React from 'react';
import axios from 'axios';
import './header.css';


const doctorUrl = 'http://localhost:3000/api';



class Header extends React.Component{
    render(){
        return(
            <div  id="headerWrapper">
                <header>
                     <div id="headerDiv">
                        
                    </div>
                </header>   
            </div>
        )
    }
}




export default Header;


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
               