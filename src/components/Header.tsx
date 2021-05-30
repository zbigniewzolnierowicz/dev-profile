import { FC } from "react";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontFamily.heading};
  width: fit-content;
  align-items: center;

  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-block-start: 2rem;
  
  h1 {
    margin: 0;
    text-align: center;
  }
  .big {
    font-size: 4rem;
  }
  .small {
    font-size: 2rem;
  }
`

const Face = styled.img`
  --margin-y: 1rem;
  height: 100px;
  width: auto;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-block-start: var(--margin-y);
  margin-block-end: var(--margin-y);
  box-shadow: 0px 0px 20px 5px ${({theme}) => theme.colors.main[900]};
`

export const Header: FC = () => {
  return (
    <HeaderStyle>
      <Face data-testid="face" src="https://placekitten.com/1000/1000" alt="face of the creator of this website" />
      <h1>
        <span className="big" data-testid="name">Zbigniew Żołnierowicz</span><br/>
        <span className="small" data-testid="tagline">One hell of a web developer</span>
      </h1>
    </HeaderStyle>
  )
}
