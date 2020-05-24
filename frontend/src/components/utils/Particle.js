import React, { Component } from 'react'
import Particles from 'react-particles-js';


class Particle extends Component{
    render(){
        return(
            <div>
                 <Particles
                     params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }}}
                            
                        style={{
                            width: '100%',
                            backgroundColor: 'black',
                            height: '70vh',
                            position: 'absolute'
                        }}
                    /> 
            </div>
        )
    }
}


export default Particle;


