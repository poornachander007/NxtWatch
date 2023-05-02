import styled from 'styled-components'

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${props => (props.logoAndPara ? 'row' : 'column')};
  align-items:${props => (props.logoAndPara ? 'center' : '')}
  width: ${props => (props.logoAndPara ? '100%' : '')};
  width: ${props => (props.main ? '320px' : '')};
  height: ${props => (props.main ? '330px' : '')};
//   width:${props => (props.content ? '280px' : '')};
  margin-right:${props => (props.main ? '20px' : '')};
  margin-bottom:${props => (props.main ? '15px' : '')};
  color:${props => (props.isDarkMode ? 'white' : 'black')};
  @media screen and (max-width:767px){
     width: ${props => (props.main ? '100%' : '')}; 
  }
`

export const Image = styled.img`
  width: ${props => (props.videoLogo ? '40px' : '100%')};
  margin-top: ${props => (props.videoLogo ? '16px' : '')};
  height: ${props => (props.videoLogo ? '40px' : '200px')};
  margin-right: ${props => (props.videoLogo ? '8px' : '')};
`
export const CustomPara = styled.p`
  color: ${props => (props.isDarkMode ? '#b3b3b3' : 'black')};
  font-weight: 600;
  margin-right: 10px;
  margin-top: ${props => (props.name ? 0 : '')};
  margin-bottom: ${props => (props.name ? 0 : '10px')};
`

export const ViewCountAndDays = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  padding-top: 0;
  color: ${props => (props.isDarkMode ? '#b3b3b3' : 'black')};
`
