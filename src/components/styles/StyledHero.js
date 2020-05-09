import styled from 'styled-components';

export const StyledHeader = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;
  }

  li {
    padding-left: 25px;
  }

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

  .social-links {
      width: 98%;

      @media screen and (max-width: 700px) {
        width: 90%;
      }
  }

  button {
    border: none;
    color: #fff;
    background-color: green;
    padding: 10px 40px;
    border-radius: 25px;
  }

  .button-container {
    @media screen and (max-width: 700px) {
      text-align: center!important;
    }
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
    margin-left: 220px;

    @media screen and (max-width: 700px) {
      margin-left: 0;
    }
  }

  .container-info{
    width: 70%;
    text-align: left;
    display: block;
    grid-column: 4 / 4;

    @media screen and (max-width: 700px) {
      grid-column: 1 / 4;
    }
  }
`;