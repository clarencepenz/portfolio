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
    font-size: 16px;

    @media screen and (max-width: 980px) {
      font-size: 16px;
    }
  }

  .form-1 {
      background-color: #000;
      padding: 40px 0;
      width: 400px;
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 700px) {
        padding: 20px 0px;
    }

      @media screen and (max-width: 320px) {
        padding: 20px 0px;
    }
  }

  input {
      margin-bottom: 10px!important;
      border-radius: 2%;
      border: 2px solid #33a21d;
      padding: 20px 0 20px 10px;

      @media screen and (max-width: 768px) {
    }
 
    @media screen and (max-width: 320px) {
  }

  }

  textarea {
    border-radius: 2%;
    border: 2px solid #33a21d;
    padding: 10px 0 50px 10px;

    @media screen and (max-width: 768px) {
    }
  }

  button {
    border: none;
    color: #fff;
    background-color: #33a21d;
    padding: 20px 38%;
    margin-top: 10px;
    border-radius: 2px;
    justify-content: center;

    @media screen and (max-width: 700px) {
      // padding: 15px 38%;
    }
  }

  .title {
    @media screen and (max-width: 700px) {
      margin-left: 20px!important;
    }
  }

  .heading {
    font-size: 24px;

      @media screen and (max-width: 700px) {
        font-size: 18px;
    }
  }

  .contactStyle {
      text-align: center;
      padding-bottom: 40px;
      // margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: center;
      // width: 400px;

      @media screen and (max-width: 720px) {
        // width: 80%;
      }
  }
 

`;