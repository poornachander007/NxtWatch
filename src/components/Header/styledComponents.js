import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#212121' : 'white')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 15px;
  font-family: 'Roboto';
  @media screen and (min-width: 992px) {
    padding: 20px 50px 20px 50px;
  }
`

export const WebsiteLogo = styled.img`
  width: 125px;
  //   margin-top: 50px;
  //   margin-bottom: 35px;
  //   @media screen and (min-width: 992px) {
  //     width: 145px;
  //   }
`

export const OptionsContainer = styled.ul`
  display: flex;
  align-items: center;
`
export const PlaneButton = styled.button`
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${props => (props.isDarkMode ? 'black' : 'white')};
`

export const ProfileLogo = styled.img`
  margin-right: 20px;
  width: 30px;
  height: 30px;
`
export const LogoutButton = styled.button`
  padding: 5px 15px 5px 15px;
  border: 1px solid ${props => (props.isDarkMode ? 'white' : ' #3b82f6')};
  background-color: transparent;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  color: ${props => (props.isDarkMode ? 'white' : ' #3b82f6')};
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   width: 400px;
  //   height: 300px;
  width: 100%;
  margin: 0;
  border-radius: 5px;
  background-color: ${props => (props.isDark ? '#260d0d' : 'white')};
`
export const PopupButtons = styled.div`
  display: ${props => (props.main ? 'flex' : '')};
  align-items: ${props => (props.main ? 'center' : '')};
  justify-content: ${props => (props.main ? 'center' : '')};
  //   margin-right: 20px;
  width: 100%;
  //   background-color: yellow;
  @media screen and (max-width: 767px) {
    margin-right: 10px;
  }
`

export const PopupHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const CancelButton = styled.button`
  border: ${props => (props.isDark ? '1px solid white' : '1px solid black')};
  background-color: transparent;
  border-radius: 5px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  margin: 10px 20px 20px 0px;
  @media screen and (max-width: 767px) {
    padding: 5px 10px 5px 10px;
  }
`

export const ConfirmButton = styled.button`
  border: none;
  background-color: #4da6ff;
  border-radius: 5px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  margin: 10px 20px 20px 0px;
  @media screen and (max-width: 767px) {
    padding: 5px 10px 5px 10px;
  }
`
export const PopUpDiv = styled.div`
  background-color: green;
  padding: 50px;
`
