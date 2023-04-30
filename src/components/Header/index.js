import {HiSun, HiMoon} from 'react-icons/hi'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderContainer,
  WebsiteLogo,
  OptionsContainer,
  PlaneButton,
  ProfileLogo,
  LogoutButton,
} from './styledComponents'

const profileIcon =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'
// alt should be profile

const websiteLogoForLightMode =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const websiteLogoForDarkMode =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <HeaderContainer isDarkMode={isDarkMode}>
          <WebsiteLogo
            src={isDarkMode ? websiteLogoForDarkMode : websiteLogoForLightMode}
          />
          <OptionsContainer>
            <PlaneButton type="button">
              {isDarkMode ? <HiSun size={35} /> : <HiMoon size={35} />}
            </PlaneButton>
            <ProfileLogo src={profileIcon} />
            <LogoutButton type="button">Logout</LogoutButton>
          </OptionsContainer>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header
