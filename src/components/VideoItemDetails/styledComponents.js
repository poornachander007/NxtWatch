import styled from 'styled-components'

export const CustomContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#1a0000' : '#cccccc')};
  width: 100%;
  height: 140px;
  justify-content: ${props => (props.failure ? 'center' : 'flex-start')};
`
export const Heading = styled.h1`
  color: ${props => (props.isDark ? '#e6e6e6' : '#000000')};
  font-size: ${props => (props.failure ? '26px' : '')};
  font-weight: bold;
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
  margin-right: 20px;
  width: ${props => (props.title ? '600px' : '')};
  @media screen and (max-width: 767px) {
    width: ${props => (props.title ? '400px' : '')};
  }
`
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

export const VideoDetailsContainer = styled.div`
  padding: 20px;
  padding-bottom: 50px;
  overflow-y: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
`

export const CustomActionsContainer = styled.div`
  display: flex;
  align-items: center;
  //   background-color: ${props => (props.isDark ? '#1a0000' : '#cccccc')};
  background-color: transparent;
  width: 100%;
  justify-content: space-between;
`
export const ViewsAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  //   background-color: ${props => (props.isDark ? '#1a0000' : '#cccccc')};
  background-color: transparent;
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  //   background-color: ${props => (props.isDark ? '#1a0000' : '#cccccc')};
`
export const Hr = styled.hr`
  width: 100%;
  border-color: ${props => (props.isDark ? '#1a0000' : '#cccccc')};
`

export const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ProfileImage = styled.img`
  height: 50px;
  margin-right: 10px;
  margin-top: 20px;
  width: ${props => (props.failure ? '360px' : '50px')};
`

export const ContentContainer = styled(BottomContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0;
`
export const Description = styled.p`
  color: ${props => (props.isDark ? '#e6e6e6' : '#000000')};
  font-size: 14px;
  font-weight: 800;
  margin-top: 15px;
  margin-bottom: 10px;
`
export const CustomPara = styled.p`
  color: ${props => (props.isDark ? '#e6e6e6' : '#000000')};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${props => (props.bottom ? 0 : '')};
`

export const UserActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => (props.iconAndName ? '10px' : '')};
`
export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const IconName = styled.p`
  color: ${props => (props.isDark ? '#e6e6e6' : '#000000')};
  font-size: 14px;
  font-weight: 800;
`
//  style={{color: isLiked ? '#2563eb' : '#64748b'}}
