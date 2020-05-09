import styled from 'styled-components';


export const StyledProject = styled.div`



  .card{
    cursor: pointer;
    overflow: hidden!important;
  }

  .middle{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .front, .back{
    width: 100%!important;
    height: 100%;
    overflow: hidden;
    backface-visibility: hidden;
    transition: transform .6s linear;
  }
  .front img{
    height: 100%;
  }
  .front{
    transform: perspective(600px) rotateY(0deg);
  }
  .back{
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden!important;
    background: #f1f1f1;
    transform: perspective(600px) rotateY(180deg);
  }
  .back-content{
    color: #2c3e50;
    text-align: center;
    width: 100%;
  }
  .sm{
    margin: 20px 0;
  }
  .sm a{
    display: inline-flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: #2c3e50;
    font-size: 18px;
    transition: 0.4s;
    border-radius: 50%
  }
  .sm a:hover{
    background: #2c3e50;
    color: white;
  }
  .card:hover > .front{
    transform: perspective(600px) rotateY(-180deg);
  }
  .card:hover > .back{
    transform: perspective(600px) rotateY(0deg);
  }
  

 
  @media screen and (max-width: 700px) {
    
  }

`;