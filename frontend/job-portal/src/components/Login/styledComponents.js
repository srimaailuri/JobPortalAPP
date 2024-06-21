import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const LoginForm = styled.form`
  width: 350px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding: 20px;
`
export const Logo = styled.img`
  width: 130px;
  height: 50px;
  margin-bottom: 15px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 15px;
`
export const Label = styled.label`
  color: ${props => props.color};
  font-size: 15px;
`

export const Input = styled.input`
  width: 300px;
  height: 30px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin: 6px;
`

export const CheckBoxInput = styled.input`
  border-radius: 4px;
  height: 18px;
  width: 18px;
  margin-right: 5px;
`
export const LoginBtn = styled.button`
  border-radius: 4px;
  text-align: center;
  width: 250px;
  height: 30px;
  background-color: #3b82f6;
  color: #ffffff;
  margin-top: 5px;
  outline: none;
  border: none;
  cursor: pointer;
`