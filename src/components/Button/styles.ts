import styled, { css } from 'styled-components'

interface ContainerProps {
  isType?: 'normal' | 'outline'
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  border-radius: 10px;
  height: 54px;
  margin-top: 30px;
  border: 0;
  background-color: #ff9000;
  transition: background-color 0.2s;

  :hover {
    background-color: #cc7300;
  }

  ${(props) =>
    props.isType === 'outline' &&
    css`
      background-color: transparent;
      border: 4px solid #ff9000;
      color: #fff;

      :hover {
        background-color: #312e38;
      }
    `}
`
