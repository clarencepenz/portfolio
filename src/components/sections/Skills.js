import React, { Component } from 'react'
import ProgressBar from 'react-customizable-progressbar'
import { StyledSkills } from '../styles/StyledSkills'

export default class Skills extends Component {
    render() {
        return (
                <div style={{backgroundColor: '#000', color: '#fff'}}>
                    <h3 style={{marginLeft: '60px', paddingLeft: '10px', borderLeft: '6px solid green', marginBottom: '0', marginTop: '0'}}>Skills</h3>
                    <div style={skillStyle}>
                        <StyledSkills>
                            <div>
                                <ProgressBar
                                    radius={50}
                                    progress={70}
                                    initialAnimation={true}
                                    strokeWidth={9}
                                    strokeColor="green"
                                    strokeLinecap="round"
                                    trackStrokeWidth={9}
                                >
                                    <div style={indicator}>
                                        <div>React</div>
                                    </div>
                                </ProgressBar>
                            </div>
                            <div>
                                <ProgressBar
                                    radius={50}
                                    progress={50}
                                    initialAnimation={true}
                                    strokeWidth={9}
                                    strokeColor="green"
                                    strokeLinecap="round"
                                    trackStrokeWidth={9}
                                >
                                    <div style={indicator}>
                                        <div>Node</div>
                                    </div>
                                </ProgressBar>
                            </div>
                            <div>
                                <ProgressBar
                                    radius={50}
                                    progress={40}
                                    initialAnimation={true}
                                    strokeWidth={9}
                                    strokeColor="green"
                                    strokeLinecap="round"
                                    trackStrokeWidth={9}
                                >
                                    <div style={indicator}>
                                        <div>MongoDB</div>
                                    </div>
                                </ProgressBar>
                            </div>
                            <div>
                                <ProgressBar
                                    radius={50}
                                    progress={50}
                                    initialAnimation={true}
                                    strokeWidth={9}
                                    strokeColor="green"
                                    strokeLinecap="round"
                                    trackStrokeWidth={9}
                                >
                                    <div style={indicator}>
                                        <div>Postgres</div>
                                    </div>
                                </ProgressBar>
                            </div>
                            <div>
                                <ProgressBar
                                    radius={50}
                                    progress={50}
                                    initialAnimation={true}
                                    strokeWidth={9}
                                    strokeColor="green"
                                    strokeLinecap="round"
                                    trackStrokeWidth={9}
                                >
                                    <div style={indicator}>
                                        <div>Express</div>
                                    </div>
                                </ProgressBar>
                            </div>
                            <div>
                                <ProgressBar
                                    radius={50}
                                    progress={9}
                                    initialAnimation={true}
                                    strokeWidth={9}
                                    strokeColor="green"
                                    strokeLinecap="round"
                                    trackStrokeWidth={9}
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
    fontSize: '1.1em',
    fontWeight: '100',
    color: '#fff',
    userSelect: 'none'
}

const skillStyle ={
    minHeight: '200px',
    textAlign: 'center',
    width: '80%',
    margin: '0 auto',
    paddingTop: '30px',
    paddingBottom: '30px',
    backgroundColor: '#000',
    color: '#fff'
}