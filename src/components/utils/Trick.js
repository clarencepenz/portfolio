import React from 'react'
import Typewriter from './Typewriter';
import Particle from './Particle';
import NavBar from '../sections/NavBar';


function Trick() {
    
             const type = <Typewriter/>
  return (
    <div style={{
      
      width: "100%",
      height: "100%"
    }}>
        <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "60vh"
        }}
      >
        <Particle/>
        <div
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        > 
        {<NavBar/>}
          <h3 style={{textAlign: 'center', paddingTop: '60px'}}>{type}</h3>
          {/* You can render <Route> and <NavTabs /> here */}
        </div>
      </div>
    </div>
  );     
    
}


export default  Trick;