import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  background-color: #444;
  border-radius: 5px;
  padding: 20px;
  flex-direction: column;

  > p {
    height: 40px;
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-family: sans-serif;
  }

  > a {
    color: #fff;
    font-weight: bold;
  }
`
