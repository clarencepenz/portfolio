import styled from 'styled-components';


export const StyledAdmin = styled.div`
  box-sizing: border-box;
  color: #fff;
  background-color: #000;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;
  padding-top: 40px;
  
  .Main {
    width: 85%;
    margin: 0 auto;
    display: grid; 
    grid-template-columns: repeat(2, minmax(100px, 1fr));

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, minmax(100px, 1fr));
      }
  }

  .Messages {
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: 340px) {
        width: 100%;
      }
  }

  .Projects {
    width: 100%;
    margin: 0 auto;
    padding-left: 20px;

    @media screen and (max-width: 340px) {
        padding-left: 10px;
      }
  }
  }
 
  h3 {
    font-size: 14px;
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

 

`;