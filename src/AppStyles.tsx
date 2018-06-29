import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const H1 = styled.span`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  border: 3px solid black;
  padding: 10px;

  @media (min-width: 48em) {
    font-size: 2rem;
  }
`;
