import styled from 'styled-components';


export const StyledContact = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  min-height: 200px;
  color: #fff;
  background-color: #000;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;
  padding-top: 40px;
  
 
  h3 {
    font-size: 24px;

      @media screen and (max-width: 700px) {
        font-size: 18px;
    }
  }

  form {
      background-color: #000;
      padding: 40px 0;
      width: 100%!important;

      @media screen and (max-width: 700px) {
        padding: 20px 0px;
        width: 100%!important;
    }

      @media screen and (max-width: 320px) {
        padding: 20px 0px;
    }
  }

  input {
      width: 80%!important;
      margin-bottom: 10px!important;
      border-radius: 25px;
      border: 2px solid #33a21d;
      padding: 10px 0 10px 10px;

      @media screen and (max-width: 700px) {
        width: 100%!important;
    }
 
    @media screen and (max-width: 320px) {
  
      min-width: 100%;
  }

  }

  textarea {
    width: 80%!important;
    border-radius: 25px;
    border: 2px solid #33a21d;
    padding: 10px 0 10px 10px;

    @media screen and (max-width: 700px) {
        width: 100%!important;
    }
  }

  button {
    border: none;
    color: #fff;
    background-color: #33a21d;
    padding: 20px 38%;
    margin-top: 10px;
    border-radius: 25px;

    @media screen and (max-width: 700px) {
      padding: 10px 38%;
    }
  }

  .title {
    @media screen and (max-width: 700px) {
      margin-left: 20px!important;
    }
  }

  .contactStyle {
      text-align: center;
      padding-bottom: 40px;
      margin: 0 auto;
      width: 30%;

      @media screen and (max-width: 720px) {
        width: 70%;
      }
  }
 

`;