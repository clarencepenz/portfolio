import styled from 'styled-components';


export const StyledSkills = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  background-color: #000;
  display: grid; 
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  justify-items: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

`;