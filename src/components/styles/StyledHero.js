import styled from 'styled-components';

export const StyledHeader = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  
 
  h4 {
      margin-bottom: 2px;
  }
  
  p { 
      margin-top: 2px;
  }
  .hero-style {
    min-height: 400px;
    text-align: center;
    background-color: #f4f4f4;
    box-sizing: border-box;
    display: grid; 
    grid-template-columns: repeat(2, minmax(70px, 1fr));
    position: relative;

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, minmax(100px, 1fr));
      }
  }

  .image-style{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: #000;
  }

  .container-image {
    margin-left: 420px;
    padding-top: 60px;

    @media screen and (max-width: 700px) {
        margin-left: 10px;
        padding-top: 0px;
        min-height: 100px;
      
      }
  }

  .container-info {
    padding-right: 200px;
    width: 300px;
    padding-top: 60px;
    

    @media screen and (max-width: 700px) {
        margin-right: 10px;
        padding-top: 0px;
        min-height: 100px;
      
      }
  }
`;