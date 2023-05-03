import styled from 'styled-components'

export const CustomContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`
export const Image = styled.img`
  width: 800px;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`

export const Heading = styled.h1`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#181818')};
`

export const Para = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#181818')};
`
