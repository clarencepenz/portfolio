import React, { Component } from 'react'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { StyledFooter } from '../styles/StyledFooter'

export default class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <div>
                    <p>Designed and Built by Clarence</p>
                    <p>Copyright &copy;2020 All rights reserved</p>
                </div>
                <div>
                    <ul>
                        <li><SocialMediaIconsReact roundness={50}  size={30} iconSize={1} icon="twitter" backgroundColor='#000' url="https://twitter.com/your-twitter-handle"/></li>
                        <li><SocialMediaIconsReact roundness={50}  size={30} iconSize={1} icon="github" url="https://twitter.com/your-twitter-handle"/></li>
                        <li><SocialMediaIconsReact roundness={50}  size={30} iconSize={1} icon="medium" url="https://twitter.com/your-twitter-handle"/></li>
                    </ul>
                  </div>
            </StyledFooter>
        )
    }
}


