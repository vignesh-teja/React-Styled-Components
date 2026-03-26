import styled from 'styled-components'

export const Heading = styled.h1`
    color: #0070c1;
    font-family: 'Roboto',
    font-size: 23px;
`

export const SubHeading = styled.p`
    color: #0070c1;
    font-family: 'Roboto',
    font-size: 23px;
`
export const CustomButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  text-align: center;
  color: ${props => props.color};
  margin-right: 10px;
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => props.bgColor};
  font-weight: bold;
`

export const CustomBtn = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  text-align: center;
  color: ${props => (props.outline ? '#0070c1' : '#ffffff')};
  margin-right: 10px;
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outline ? '#ffffff' : '#0070c1')};
  font-weight: bold;
`

export const HorizontalLine = styled.hr`
  padding-top: 5px;
  margin-bottom: 5px;
`
