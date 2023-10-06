import styled from 'styled-components'

export const RegisterMainContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RegisterCartContainer = styled.div`
  height: 400px;
  display: flex;
  align-items: center;

  width: 60%;
`

export const RegisterImage = styled.img`
  height: 80%;
  width: 80%;
`

export const FormInputContainer = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #334155;
`
export const ImagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
export const InputContainer = styled.div``

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #64748b;
  font-weight: 600;
`
export const Input = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  height: 35px;
  border: 1px solid #7b8794;
  border-radius: 6px;
  outline: none;
  padding-left: 10px;
  width: 100%;
  margin-top: 10px;
`
export const Select = styled.select`
  font-family: 'Roboto';
  font-size: 14px;
  height: 35px;
  border: 1px solid #7b8794;
  border-radius: 6px;
  outline: none;
  padding-left: 10px;
  width: 100%;
  margin-top: 10px;
`
export const Error = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ff0b37;
  font-weight: 500;
`
