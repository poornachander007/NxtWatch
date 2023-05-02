import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  //   background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`

export const SideBarAndContentContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  height: 85vh;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`
