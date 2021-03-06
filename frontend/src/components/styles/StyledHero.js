import styled from 'styled-components';

export const StyledHeader = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;
  background-color: #000;
  color: #fff;
  
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;
  }

  li {
    padding-left: 25px;
  }

  a {
    display: inline-flex;
    text-decoration: none;
  }

  h2 {
    margin-bottom: 10px;
    font-family: sans-serif;
    font-size: 24px;
    line-height: 1.9rem;

    @media screen and (max-width: 700px) {
      font-size: 18px;
    }
  }

  h3 {
    padding-left: 20px;
    border-left: 5px solid #33a21d;
    margin-bottom: 0;
    font-family: sans-serif;
    font-size: 16px;

    @media screen and (max-width: 980px) {
      font-size: 16px;
    }
  }
 
  h4 {
      margin-bottom: 2px;
      text-align: center;
      font-family: sans-serif;
      font-size: 24px;

      @media screen and (max-width: 700px) {
        font-size: 20px;
      }
  }

  h6 {
    font-family: sans-serif;
    font-size: 12px;
  }
  
  p { 
      margin-top: 2px;
      color: #c0c0c0;
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
      font-size: 14px;
      display: block;
  }

  .socials {
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: 0.4s;
    border-radius: 50%;
    border: 2px solid #33a21d;
  }

  .socials:hover {
    background: #33a21d;
    color: #000;
  }

  .about {
    padding-left: 90px;

    
    @media screen and (max-width: 700px) {
      padding-left: 20px!important;
    }
  }

  .social-links {
      width: 98%;

      @media screen and (max-width: 700px) {
        width: 90%;
      }
  }

  .download {
    border: none;
    color: #fff;
    background-color: #33a21d;
    padding: 10px 40px;
    border-radius: 25px;
    
    @media screen and (max-width: 700px) {
      padding: 10px 20px;
    }
  }

  .download:hover {
    border: none;
    background-color: #fff;
    color: #33a21d;
    font-weight: 600;
    padding: 10px 40px;
    border-radius: 25px;

    @media screen and (max-width: 700px) {
      padding: 10px 20px;
    }
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
    border: 4px solid #33a21d;
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
      width: 100%;
      grid-column: 1 / 4;
    }
  }
`;