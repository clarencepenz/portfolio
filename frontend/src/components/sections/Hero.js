import React, { Component } from 'react'
import CV from '../../docs/Clarence-Bakosi-CV.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { StyledHeader } from '../styles/StyledHero'

library.add(fab)

class DownloadLink extends Component {
    render() {
        return(
            <StyledHeader>
               <a  className='download' href={this.props.src} download target='_blank' rel="noopener noreferrer">{this.props.children}</a>
            </StyledHeader>
        )
    }
}
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
                     <DownloadLink src={CV}>Download cv</DownloadLink>
                  </div>
                  <h6 style={{textAlign: 'center'}}>Want to get in touch?</h6> 
                  <div className='social-links'>
                    <ul>
                        <li><a className='socials' href="https://twitter.com/x8inez" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                        <li><a className='socials' href="https://github.com/clarencepenz" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                        <li><a className='socials' href="mailto:clarencedespenz@gmail.com? subject= subject text"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    </ul>
                  </div>
               </div>
            </div>
            </StyledHeader>
        )
    }
}


