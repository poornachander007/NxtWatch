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

export const OptionsContainer = styled.div`
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
