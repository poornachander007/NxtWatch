import styled from 'styled-components'

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
`

export const Banner = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-repeat: no-repeat;
  background-size: 125%;
  //   height: 200px;
  padding: 0px 50px 30px 50px;
  background-color: white;
  @media screen and (max-width: 991px) {
    background-image: none;
  }
`
export const WebsiteImageAndCloseButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const WebsiteImage = styled.img`
  margin: 30px 0px 0px 0px;
  width: 165px;
`

export const CloseButton = styled.button`
  margin-top: 20px;
  align-self: flex-start;
  border: none;
  background-color: transparent;
  //   background-color: red;
`

export const BannerDescription = styled.p`
  padding: 20px 0px 20px 0px;
  font-size: 17px;
  font-weight: 500;
  color: #1e293b;
  width: 33%;
  @media screen and (max-width: 991px) {
    width: 50%;
  }
`
export const GetItNowButton = styled.button`
  border: 1px solid black;
  color: #1e293b;
  font-size: 17px;
  font-weight: 600;
  padding: 10px 15px 10px 15px;
  background-color: transparent;
`

export const InputContainer = styled.div`
  border: 1px solid #b3b3b3;
  height: 40px;
  display: flex;
  width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  background-color: transparent;
//   @media screen and (max-width: 767px) {
//     width: 300px;
  }
`
export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-weight: bold;
  font-size: 13px;
  padding-left: 15px;
  background-color: transparent;
`
export const SearchButton = styled.button`
  height: 39px;
  border: 1px solid #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  background-color: ${props => (props.isDarkMode ? 'transparent' : '')};
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0;
  margin-left: 20px;
  overflow-y: scroll;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 20px 5px 20px 5px;
  }
`

// Failure view
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`

export const Heading = styled.h1`
  font-size: 28px;
  font-weight: bold;
`
// Failure view

// No results Found

export const NoResultsFoundContainer = styled(FailureContainer)`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

// No results Found
export const ImgLogo = styled.img`
  //   width: 150px;
  //   height: 28px;
  margin-bottom: 10px;
  width: ${props => (props.failure ? '450px' : '')};
  height: ${props => (props.failure ? '400px' : '')};
`
export const Para = styled.p`
  color: #262626;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: ${props => (props.failurePara ? 'center' : '')};
`
export const RetryButton = styled.button`
  background-color: blue;
  padding: 10px 20px 10px 20px;
  color: white;
  font-weight: bold;
`
export const CustomContainer = styled.div``
