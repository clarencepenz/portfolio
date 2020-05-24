import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { StyledFooter } from '../styles/StyledFooter'

library.add(fab)
export default class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <div>
                    <p>Designed and Built by Clarence</p>
                    <p>Copyright &copy; 2020, All rights reserved.</p>
                </div>
                <div>
                    <ul>
                        <li><a href="https://twitter.com/x8inez" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                        <li><a href="https://github.com/clarencepenz" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                        <li><a href="mailto:clarencedespenz@gmail.com? subject= subject text" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    </ul>
                  </div>
            </StyledFooter>
        )
    }
}


