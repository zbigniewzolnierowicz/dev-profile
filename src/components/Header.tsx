import { FC } from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import info from '../data.json'

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
    line-height: 110%;
  }
  .big {
    font-size: 4rem;
    ${down('sm')} {
      font-size: 2.33rem;
    }
  }
  .small {
    font-size: 2rem;
    line-height: 90%;
    ${down('sm')} {
      font-size: 1.5rem;
    }
  }
`

const FACE_SQUARE_SIZE_NUMBER = 200
const FACE_SQUARE_UNIT = 'px'
const FACE_SQUARE_SIZE = FACE_SQUARE_SIZE_NUMBER + FACE_SQUARE_UNIT

const Face = styled.img`
  --margin-y: 1rem;
  height: ${FACE_SQUARE_SIZE};
  width: auto;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-block-start: var(--margin-y);
  margin-block-end: var(--margin-y);
  box-shadow: 0px 0px 20px 5px ${({ theme }) => theme.colors.main[900]};
`

export const Header: FC = () => {
  return (
    <HeaderStyle>
      <Face
        data-testid="face"
        src={info.face}
        height={FACE_SQUARE_SIZE_NUMBER}
        width={FACE_SQUARE_SIZE_NUMBER}
        alt="face of the creator of this website"
      />
      <h1>
        <span className="big" data-testid="name">
          {info.name}
        </span>
        <br />
        <span className="small" data-testid="tagline">
          {info.tagline}
        </span>
      </h1>
    </HeaderStyle>
  )
}
