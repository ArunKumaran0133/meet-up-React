import styled from 'styled-components'

export const MeetUpContainer = styled.div`
  background-color: white;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: ${props => (props.Registered ? '45px' : '35px')};
  color: ${props => (props.Registered ? '#2563eb' : '#334155')};
  font-weight: bold;
  margin-bottom: ${props => (props.Registered ? '0px' : 'normal')};
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.Registered ? '25px' : '17px')};
  color: #334155;
  font-weight: ${props => (props.Registered ? 'bold' : 'normal')};
`

export const CustomButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: white;
  font-weight: bold;
  border-width: 0px;
  border-radius: 5px;
  background-color: #3b82f6;
  outline: none;
  cursor: pointer;
  height: 35px;
  width: 100px;
`
export const MeetupImage = styled.img`
  height: 350px;
  width: 700px;
  margin-top: 30px;
`
