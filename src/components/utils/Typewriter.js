import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';

 


class Home extends Component {
    state={
      words: ['I am a Web developer', "Fullstack", 'MERN STACK', 'Hit me up soon']
    }

    render() {
        
        const {words} = this.state
        const type = <h1 style={{color: '#fff'}}> My name is Lord Cipher <Typewriter
        options={{
            strings: words,
            autoStart: true,
            loop: true,
        }}
        />
        </h1>
        return (
            <div className="container">

                   {type}
            </div>
        )
    }
}


export default Home;

