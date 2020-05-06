import styled from 'styled-components';

export const StyledHeader = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  

  h3 {
    margin-left: 60px;
    padding-left: 10px;
    border-left: 3px solid green;
    margin-bottom: 0;
  }
 
  h4 {
      margin-bottom: 2px;
      text-align: center;
  }
  
  p { 
      margin-top: 2px;
  }
  .hero-style {
    min-height: 400px;
    text-align: center;
    box-sizing: border-box;
    display: grid; 
    grid-template-columns: repeat(2, minmax(70px, 1fr));
    justify-items: center;
    width: 80%;
    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, minmax(100px, 1fr));
      }
  }

   .hero-style img{
       height: 100px;
       width: 100px;
       border-radius: 50%;
   }

  .image-style{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 2px solid green;
    background-color: #000;
  }
  
  .container-image{
    padding-top: 30px;
    grid-auto-rows: 50px;
  }

  .container-info{
    width: 70%;
    text-align: left;
    display: block;
  }
`;