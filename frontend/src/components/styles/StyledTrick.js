import styled from 'styled-components';

export const StyledTrick = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  color: #fff;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;

  h1 {
    @media screen and (max-width: 700px) {
      font-size: 25px !important;
    }
  }

  h3 {
    @media screen and (max-width: 700px) {
      font-size: 15px !important;
    }
  }
`;
