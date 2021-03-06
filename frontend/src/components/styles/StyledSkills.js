import styled from 'styled-components';


export const StyledSkills = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  background-color: #000;
  display: grid; 
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  justify-items: center;
  justify-content: center;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;


  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

`;


export const StyledTitle = styled.div`
  h3 {
    font-size: 16px;

    @media screen and (max-width: 980px) {
      font-size: 16px;
    }
  }

  .title {
    @media screen and (max-width: 700px) {
      margin-left: 20px!important;
    }
  }

 

`;