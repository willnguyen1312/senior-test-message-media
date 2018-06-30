import styled from "styled-components";

export const Header = styled.header`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;

  &:hover {
    span {
      background-color: #26697e;
    }
  }
`;

export const H1 = styled.span`
  font-size: 1.5rem;

  border: 3px solid black;
  padding: 10px;

  @media (min-width: 48em) {
    font-size: 2rem;
  }
`;
