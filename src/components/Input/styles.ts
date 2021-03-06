import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #666360;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #c0c0c0;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
    color: #f4ede8;
  }
  svg {
    margin-right: 16px;
  }
`
