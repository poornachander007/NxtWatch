import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 15px;
  @media screen and (min-width: 992px) {
    padding: 20px 50px 20px 50px;
  }
`

export const WebsiteLogo = styled.img`
  width: 125px;
  //   margin-top: 50px;
  //   margin-bottom: 35px;
  @media screen and (min-width: 992px) {
    width: 145px;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const PlaneButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`

export const ProfileLogo = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 30px;
`
export const LogoutButton = styled.button`
  padding: 5px 10px 5px 10px;
  border: 1px solid blue;
  background-color: transparent;
  color: blue;
`
