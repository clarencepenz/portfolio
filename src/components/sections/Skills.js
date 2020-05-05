import React, { Component } from 'react'
import ProgressBar from 'react-customizable-progressbar'
import { StyledSkills } from '../styles/StyledSkills'

export default class Skills extends Component {
    render() {
        return (
                <div style={skillStyle}>
                    <div >
                        <StyledSkills>
                            <div >
                                <ProgressBar
                                    radius={100}
                                    progress={70}
                                    initialAnimation={true}
                                    strokeWidth={18}
                                    strokeColor="#000"
                                    strokeLinecap="round"
                                    trackStrokeWidth={18}
                                >
                                    <div style={indicator}>
                                        <div>React</div>
                                    </div>
                                </ProgressBar>
                            </div>
                            <div>
                                <ProgressBar
                                    radius={100}
                                    progress={50}
                                    initialAnimation={true}
                                    strokeWidth={18}
                                    strokeColor="#5d9cec"
                                    strokeLinecap="round"
                                    trackStrokeWidth={18}
                                >
                                    <div style={indicator}>
                                        <div>Node</div>
                                    </div>
                                </ProgressBar>
                            </div>
                            <div>
                                <ProgressBar
                                    radius={100}
                                    progress={40}
                                    initialAnimation={true}
                                    strokeWidth={18}
                                    strokeColor="#5d9cec"
                                    strokeLinecap="round"
                                    trackStrokeWidth={18}
                                >
                                    <div style={indicator}>
                                        <div>MongoDB</div>
                                    </div>
                                </ProgressBar>
                            </div>
                            <div>
                                <ProgressBar
                                    radius={100}
                                    progress={50}
                                    initialAnimation={true}
                                    strokeWidth={18}
                                    strokeColor="#5d9cec"
                                    strokeLinecap="round"
                                    trackStrokeWidth={18}
                                >
                                    <div style={indicator}>
                                        <div>Postgresql</div>
                                    </div>
                                </ProgressBar>
                            </div>
                            <div>
                                <ProgressBar
                                    radius={100}
                                    progress={50}
                                    initialAnimation={true}
                                    strokeWidth={18}
                                    strokeColor="#5d9cec"
                                    strokeLinecap="round"
                                    trackStrokeWidth={18}
                                >
                                    <div style={indicator}>
                                        <div>Express</div>
                                    </div>
                                </ProgressBar>
                            </div>
                            <div>
                                <ProgressBar
                                    radius={100}
                                    progress={10}
                                    initialAnimation={true}
                                    strokeWidth={18}
                                    strokeColor="#5d9cec"
                                    strokeLinecap="round"
                                    trackStrokeWidth={18}
                                >
                                    <div style={indicator}>
                                        <div>Vue</div>
                                    </div>
                                </ProgressBar>
                            </div>
                        </StyledSkills>
                    </div>
                </div>
            
        )
    }
}

const indicator = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%',
    margin:' 0 auto',
    fontSize: '1.2em',
    fontWeight: '100',
    color: '#555',
    userSelect: 'none'
}

const skillStyle ={
    minHeight: '400px',
    textAlign: 'center',
    backgroundColor: '#c4c4c4',
    paddingLeft: '90px'
}