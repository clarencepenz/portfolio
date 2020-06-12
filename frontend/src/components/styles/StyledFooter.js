import styled from 'styled-components';

export const StyledFooter = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  color: #fff;
  background-color: #000;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;
  
  
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 3px 0 3px 0;
  }

  li {
    padding-left: 25px;
  }

  a {
    display: inline-flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: 0.4s;
    border-radius: 50%;
    border: 2px solid #33a21d;
  }

  a:hover {
    background: #33a21d;
    color: #000;
  }

  p {
      text-align: center;

      @media screen and (max-width: 900px) {
        font-size: 10px!important;
      }

      @media screen and (max-width: 700px) {
        font-size: 9px!important;
      }
  }
  

`;