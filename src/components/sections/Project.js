import React, { Component } from 'react'
import {StyledProject, StyledContainer} from '../styles/StyledProject'
import CarouselSlider from "react-carousel-slider"
import Blog from '../../images/blog.png'
import Remote from '../../images/remote.png'

export default class Project extends Component {

    render() {
        const jsonData =  {
            "Scientists": {

                "items": [
                   
                    {
                        "imgSrc": Blog,
                        "name": "Blog",
                        "des": "A mini blog showing the basic CRUD features",
                        "tech": "React, Express, Node, Postgres"
                    },
                    {
                        "imgSrc": Remote,
                        "name": "Remote",
                        "des": "An Api for movies using react",
                        "tech": "React..."
                    },
                    {
                        "imgSrc": Blog,
                        "name": "Blog",
                        "des": "A mini blog showing the basic CRUD features",
                        "tech": "React, Express, Node, Postgres"
                    },
                    {
                        "imgSrc": Remote,
                        "name": "Remote",
                        "des": "An Api for movies using react",
                        "tech": "React..."
                    }
                ]
            }
        }

        let itemsStyle = {
            padding: "0px",
            background: "white",
            margin:"0 10px",
            boxShadow: "none",
            borderRadius: "4px"
        };

        let imgStyle = {
            height: "70%",
            borderBottom: "1px solid #9E9E9E"
        };
        
        let textBoxStyle = {
            width: "70%",
            top: "90px",
            color: "#fff",
            background: "transparent",
            fontSize: "14px",
            fontFamily: "Times New Roman"
        };

        let textBoxStyle2 = {
            width: "70%",
            top: "170px",
            color: "#fff",
            background: "transparent",
            fontSize: "12px",
            fontStyle: "italic"
        };
        
        let textBoxStyle3 = {
            width: "70%",
            top: "150px",
            color: "#fff",
            background: "transparent",
            fontSize: "12px",
            fontStyle: "italic"
        };

        let scientists = jsonData.Scientists.items.map((item, index) => 
          <StyledProject>
            <div className='card '>
            <div key = {index} className='front' >
                <img  src = {item.imgSrc} alt='project'/>
            </div>
            <div className="back">
                <div className="back-content ">
                <h2>{item.name}</h2>
                <span>
                     <p style = {textBoxStyle} >Technology:{ ' '}{item.tech}</p>
                     <p style = {textBoxStyle2} >{item.des}</p>
                </span>
                <div className="sm">
                    <a href="#"><i className="fab fa-facebook-f"></i>d</a>
                    <a href="#"><i className="fab fa-twitter"></i>d</a>
                </div>
                </div>
            </div>
            </div>
          </StyledProject>
        );

        let btnWrapperStyle = {
            position: "relative",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            textAlign: "center"
        }

        let btnStyle = {
            display: "inline-block",
            position: "relative",
            top: "50%",
            color: '#fff',
            transform: "translateY(-50%)",
            fontSize: "36px"
        }

        let rBtnCpnt = (<div style = {btnWrapperStyle} >
            <div style = {btnStyle} className = "material-icons" >{'>'}</div>
        </div>);

        let lBtnCpnt = (<div style = {btnWrapperStyle} >
            <div style = {btnStyle} className = "material-icons" >{'<'}</div>
        </div>);        
        
        let scientistsCard = (<CarouselSlider 
            sliderBoxStyle = {{height: "450px", width: "80%", background: "transparent", overflow: 'hidden'}} 
            accEle = {{dots: false}}
            slideCpnts = {scientists} 
            itemsStyle = {itemsStyle} 
            buttonSetting = {{placeOn: 'middle-outside'}}
            rBtnCpnt = {rBtnCpnt}
            lBtnCpnt = {lBtnCpnt}
        />);

        return (
         <StyledContainer>
            <div style={projectStyle}>
                <div style={{paddingTop: '20px'}}>
                    <h3 className='title' style={{ marginLeft: '90px', marginTop: '0',  paddingLeft: '20px', borderLeft: '6px solid #33a21d', marginBottom: '0', textAlign: 'left'}}>Projects</h3>
                </div>
                <div style = {{position:"relative", margin: "0 auto", width: "90%"}} >
                    {scientistsCard}
                </div>
            </div>
         </StyledContainer>
        );
    }
}



const projectStyle ={
    minHeight: '400px',
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff'
}