import styled from 'styled-components';


export const StyledContact = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  background-color: maroon;
  min-height: 200px;
  color: #fff;
  
 

  form {
      background-color: #000;
      padding: 40px 0;
  }

  input {
      width: 60%!important;
      margin-bottom: 10px!important;
      border-radius: 25px;
      border: 2px solid green;
      padding: 10px 0 10px 10px;

      @media screen and (max-width: 700px) {
        width: 80%!important;
    }
  }

  textarea {
    width: 60%!important;
    border-radius: 25px;
    border: 2px solid green;
    padding: 10px 0 10px 10px;

    @media screen and (max-width: 700px) {
        width: 80%!important;
    }
  }

  button {
    border: none;
    color: #fff;
    background-color: green;
    padding: 10px 40px;
    margin-top: 10px;
    border-radius: 25px;
  }

  .contactStyle {
      text-align: center;
      padding-bottom: 40px;
      margin: 0 auto;
      width: 50%;
  }
  @media screen and (max-width: 700px) {
    
  }

`;