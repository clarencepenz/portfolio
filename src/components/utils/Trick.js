import React from 'react'
import Typewriter from './Typewriter';
import Particle from './Particle';
import NavBar from '../sections/NavBar';
import { StyledTrick } from '../styles/StyledTrick';


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
        <StyledTrick>
          <h1 style={{textAlign: 'center', paddingTop: '120px', color: '#fff', marginBottom: '20px', fontSize: '40px'}}>Hi, i am Clarence Bakosi</h1>
          <h3 style={{textAlign: 'center', color: '#fff', width: '80%', margin: '0 auto', height: 'auto'}}>{type}</h3>
        </StyledTrick>
          {/* You can render <Route> and <NavTabs /> here */}
        </div>
      </div>
    </div>
  );     
    
}


export default  Trick;