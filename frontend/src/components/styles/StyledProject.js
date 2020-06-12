import styled from 'styled-components';


export const StyledProject = styled.div`
line-height: 1.6rem;
letter-spacing: 0.1rem;



  .card{
    cursor: pointer;
    overflow: hidden!important;
    background-color: #000!important;
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
    border-radius: 2%;
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
    background-color: #000;
    border: 2px solid  #33a21d;
    transform: perspective(600px) rotateY(180deg);
  }
  .back-content{
    color: #fff;
    text-align: center;
    width: 100%;
  }
  .sm{
    margin: 170px 0;
  }
  .sm a{
    display: inline-flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    transition: 0.4s;
    border-radius: 50%
  }
  .sm a:hover{
    background: #33a21d;
    color: white;
  }
  .card:hover > .front{
    transform: perspective(600px) rotateY(-180deg);
  }
  .card:hover > .back{
    transform: perspective(600px) rotateY(0deg);
  }
`;


export const StyledContainer = styled.div`
line-height: 1.6rem;
letter-spacing: 0.1rem;

h3 {
  font-size: 16px;

  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
}
.title {
  @media screen and (max-width: 700px) {
    margin-left: 20px!important;
  }
}
  
  

`;