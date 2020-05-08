import React, { Component } from 'react'
import CarouselSlider from "react-carousel-slider"

export default class Project extends Component {

    render() {
        const jsonData =  {
            "Scientists": {

                "items": [
                    {
                        "imgSrc": "https://avatars1.githubusercontent.com/u/11736897?s=460&u=1c42b97135cabda8a534058586e1ec258a5d63e6&v=4",
                        "name": "Niklas Koppernigk",
                        "des": "19 February 1473 – 24 May 1543"
                    },
                    {
                        "imgSrc": "https://avatars1.githubusercontent.com/u/11736897?s=460&u=1c42b97135cabda8a534058586e1ec258a5d63e6&v=4",
                        "name": "Galileo Galilei",
                        "des": "15 February 1564 – 8 January 1642"
                    },
                    {
                        "imgSrc": "https://avatars1.githubusercontent.com/u/11736897?s=460&u=1c42b97135cabda8a534058586e1ec258a5d63e6&v=4",
                        "name": "Michael Faraday",
                        "des": "22 September 1791 – 25 August 1867"
                    },
                    {
                        "imgSrc": "https://avatars1.githubusercontent.com/u/11736897?s=460&u=1c42b97135cabda8a534058586e1ec258a5d63e6&v=4",
                        "name": "Marie Curie",
                        "des": "7 November 1867 – 4 July 1934"
                    },
                    {
                        "imgSrc": "https://avatars1.githubusercontent.com/u/11736897?s=460&u=1c42b97135cabda8a534058586e1ec258a5d63e6&v=4",
                        "name": "Albert Einstein",
                        "des": "14 March 1879 – 18 April 1955"
                    }
                ]
            }
        }

        let itemsStyle = {
            padding: "0px",
            background: "white",
            margin:"0 30px",
            boxShadow: "1px 1px 1px 1px #9E9E9E",
            borderRadius: "4px"
        };

        let imgStyle = {
            height: "70%",
            borderBottom: "1px solid #9E9E9E"
        };
        
        let textBoxStyle = {
            width: "70%",
            top: "270px",
            color: "black",
            background: "transparent",
            fontSize: "14px",
            fontFamily: "Times New Roman"
        };

        let textBoxStyle2 = {
            width: "70%",
            top: "300px",
            color: "black",
            background: "transparent",
            fontSize: "12px",
            fontStyle: "italic"
        };
        
        let textBoxStyle3 = {
            width: "70%",
            top: "330px",
            color: "black",
            background: "transparent",
            fontSize: "12px",
            fontStyle: "italic"
        };

        let scientists = jsonData.Scientists.items.map((item, index) => 
            <div key = {index} >
                <img style = {imgStyle} src = {item.imgSrc} alt='project'/>
                <p style = {textBoxStyle} >{item.name}</p>
                <p style = {textBoxStyle2} >{item.des}</p>
                <p style = {textBoxStyle3} >Checkout</p>
            </div>
        );

        let btnWrapperStyle = {
            position: "relative",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            boxShadow: "1px 1px 1px 1px #9E9E9E",
            textAlign: "center"
        }

        let btnStyle = {
            display: "inline-block",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "36px"
        }

        let rBtnCpnt = (<div style = {btnWrapperStyle} >
            <div style = {btnStyle} className = "material-icons" ></div>
        </div>);

        let lBtnCpnt = (<div style = {btnWrapperStyle} >
            <div style = {btnStyle} className = "material-icons" ></div>
        </div>);        
        
        let scientistsCard = (<CarouselSlider 
            sliderBoxStyle = {{height: "450px", width: "80%", background: "transparent"}} 
            accEle = {{dots: false}}
            slideCpnts = {scientists} 
            itemsStyle = {itemsStyle} 
            buttonSetting = {{placeOn: 'middle-outside'}}
            rBtnCpnt = {rBtnCpnt}
            lBtnCpnt = {lBtnCpnt}
        />);

        return (
          <div style={projectStyle}>
            <div style = {{position:"relative", margin: "0 auto", width: "90%"}} >
                {scientistsCard}
            </div>
         </div>
        );
    }
}



const projectStyle ={
    minHeight: '400px',
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff'
}