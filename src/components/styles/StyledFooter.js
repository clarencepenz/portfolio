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

  p {
      text-align: center;
      @media screen and (max-width: 700px) {
        font-size: 10px!important;
    }
  }
  

`;