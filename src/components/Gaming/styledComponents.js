import styled from 'styled-components'

export const GamingPage = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 15px;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const CustomContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#1a0000' : '#cccccc')};
  width: 100%;
  height: 140px;
  justify-content: ${props => (props.failure ? 'center' : 'flex-start')};
`

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border-radius: 100px;
  background-color: ${props => (props.isDark ? '#000000' : '#e6e6e6')};
`

export const Heading = styled.h1`
  color: ${props => (props.isDark ? '#e6e6e6' : '#000000')};
  font-size: ${props => (props.failure ? '26px' : '')};
  font-weight: bold;
`

export const VideoItemsUl = styled.ul`
  display: flex;
  //   justify-content: center;
  padding: 30px;
  margin-left: 10px;
  width: 100%;
  flex-wrap: wrap;
  overflow-y: scroll;
`

export const VideoItemLi = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-right: 20px;
  //   background-color: red;
  width: 300px;
  //   height: 400px;
`
export const Image = styled.img`
  width: ${props => (props.failure ? '400px' : '300px')};
  height: ${props => (props.failure ? '400px' : '400px')};
  margin-right: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: ${props => (props.failure ? '300px' : '300px')};
  }
`

export const Para = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: bold;
  font-size: 18px;
  padding: 0;
  margin: 0;
  width: ${props => (props.title ? '600px' : '')};
  @media screen and (max-width: 767px) {
    width: ${props => (props.title ? '400px' : '')};
  }
`

export const SmallPara = styled.p`
  color: #606060;
  //   font-weight: bold;
  font-size: 15px;
  padding: 0;
  margin: 0;
  width: ${props => (props.title ? '600px' : '')};
  @media screen and (max-width: 767px) {
    width: ${props => (props.title ? '400px' : '')};
  }
`

// failure view

export const FailureViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`
export const RetryButton = styled.button`
  background-color: #1a8cff;
  padding: 8px 10px 8px 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`
// export const TextDiv = styled.div`
//   display: flex;
//   flex-direction: column;
// `
