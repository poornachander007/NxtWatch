import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#cccccc')};
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

export const UlContentContainer = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const VideoItemLi = styled.li`
  display: flex;
  align-items: flex-start;
  list-style-type: none;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-right: 10px;
`
export const Image = styled.img`
  width: ${props => (props.failure ? '400px' : '500px')};
  height: ${props => (props.failure ? '400px' : '280px')};
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    width: ${props => (props.failure ? '300px' : '300px')};
  }
`
export const CardParaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const SmallPara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: bold;
  font-size: 18px;
  width: ${props => (props.title ? '600px' : '')};
  @media screen and (max-width: 767px) {
    width: ${props => (props.title ? '400px' : '')};
  }
`
export const ViewsAndDays = styled.div`
  display: flex;
  align-items: center;
`

export const Para = styled(SmallPara)`
  font-size: 15px;
  color: ${props => (props.isDark ? '#595959' : '#666666')};
`
