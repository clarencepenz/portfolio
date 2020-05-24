import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';

 


class Home extends Component {
    state={
      words: ['I am a Fullstack Web developer', 'MERN STACK']
    }

    render() {
        
        const {words} = this.state
        const type = <Typewriter
        options={{
            strings: words,
            autoStart: true,
            loop: true
        }}
        
        />
        return (
            <div className="container">

                   {type}
            </div>
        )
    }
}


export default Home;

