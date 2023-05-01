import styled from 'styled-components'

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
