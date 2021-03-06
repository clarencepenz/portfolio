import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProject } from '../../actions/projectAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {StyledProject, StyledContainer} from '../styles/StyledProject'
import CarouselSlider from "react-carousel-slider"
import Spinner from '../utils/Spinner'

library.add(fab)
class Project extends Component {

    componentDidMount(){
        this.props.getProject()
    }

    render() {
    
        let itemsStyle = {
            padding: "0px",
            background: "white",
            margin:"0 10px",
            boxShadow: "none",
            borderRadius: "4px"
        };
 
        
        let textBoxStyle = {
            width: "70%",
            top: "100px",
            color: "#fff",
            background: "transparent",
            fontSize: "14px",
            textAlign: "left",
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
        
     

        let scientists = this.props.project.map(pro => 
          <StyledProject>
            <div className='card '>
            <div key = {pro.key} className='front' >
                <img  src = {pro.url} alt='project'/>
            </div>
            <div className="back">
                <div className="back-content ">
                <h2>{pro.name}</h2>
                <span>
                     <p style = {textBoxStyle} >Technology: <br/>{pro.technologies}</p>
                     <p style = {textBoxStyle2} >{pro.description}</p>
                </span>
                <div className="sm">
                    <a href={pro.web}><FontAwesomeIcon icon={faGlobe} /></a>
                    <a href={pro.repo}><FontAwesomeIcon icon={['fab', 'github']} /></a>
                </div>
                </div>
            </div>
            </div>
          </StyledProject>
        );

        let btnWrapperStyleL = {
            position: "relative",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            textAlign: "center",
            marginRight: "130px"                     
        }

        let btnWrapperStyleR = {
            position: "relative",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            textAlign: "center",
            marginLeft: "150px"         
        }

        let btnStyle = {
            display: "inline-block",
            position: "relative",
            top: "50%",
            color: '#fff',
            transform: "translateY(-50%)",
            fontSize: "30px"
        }

        let rBtnCpnt = (<div style = {btnWrapperStyleR} >
            <div style = {btnStyle} className = "material-icons" ><FontAwesomeIcon icon={faArrowCircleRight} /></div>
        </div>);

        let lBtnCpnt = (<div style = {btnWrapperStyleL} >
            <div style = {btnStyle} className = "material-icons" ><FontAwesomeIcon icon={faArrowCircleLeft} /></div>
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

        
        if ( this.props.pro ) return <Spinner/>  
          

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

const mapStateToProps = (state)=>({
    project: state.project.projects,
    pro: state.project.loading

})


export default connect(mapStateToProps, {getProject}) (Project)

const projectStyle ={
    minHeight: '400px',
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff'
}