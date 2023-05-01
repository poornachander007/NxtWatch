import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  //   background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`

export const SideBarAndContentContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`
