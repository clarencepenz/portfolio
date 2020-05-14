import React, { Component } from 'react'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { StyledHeader } from '../styles/StyledHero'

export default class Hero extends Component {
    render() {
        return (
            <StyledHeader>
            <div className='about'>
                <h3>About</h3>
            </div>
            <div className='hero-style' >
               <div className='container-image'>
                   <div className='image-style'>
                      <img  src={'https://avatars1.githubusercontent.com/u/11736897?s=460&u=1c42b97135cabda8a534058586e1ec258a5d63e6&v=4'} alt='Hero'/>
                   </div>
               </div>
               <div className='container-info'>
                  <h4> About me </h4> 
                  <h2>Greetings! I am a Web developer from Nigeria.</h2>
                  <p>I am a self-taught developer with roughly 2yrs of experience who uses modern technologies like React.js, Node.js, Express, MongoDB,
                      Postgresql and Vue.js to translate designs and mockups into functional, quality and responsive webpages.
                      I also offer backend services like integration of Restful API's, authentication with JWT e.t.c.
                      I am open to work remotely and onsite.
                  </p>
                  <h2>There's more.</h2>
                  <p>
                      I have a decent communication skill, and i value client's needs and requirements. If you are looking for 
                      a web developer to help bring your ideas to life, work on an existing project or join a team of developers? 
                      i am currently available to take on any project. 
                  </p>
                  <div className='button-container'>
                     <button>Download cv</button>
                  </div>
                  <h6 style={{textAlign: 'center'}}>Want to get in touch?</h6> 
                  <div className='social-links'>
                    <ul>
                        <li><SocialMediaIconsReact roundness={50} backgroundColor='#000' borderColor='#33a21d' borderWidth={3}  borderStyle='solid' size={30} iconSize={1} icon="twitter" url="https://twitter.com/your-twitter-handle"/></li>
                        <li><SocialMediaIconsReact roundness={50}  backgroundColor='#000' borderColor='#33a21d' borderWidth={3}  borderStyle='solid' size={30} iconSize={1} icon="github" url="https://twitter.com/your-twitter-handle"/></li>
                        <li><SocialMediaIconsReact roundness={50} backgroundColor='#000' borderColor='#33a21d' borderWidth={3}  borderStyle='solid' size={30} iconSize={1} icon="medium" url="https://twitter.com/your-twitter-handle"/></li>
                    </ul>
                  </div>
               </div>
            </div>
            </StyledHeader>
        )
    }
}


