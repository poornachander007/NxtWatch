import {useHistory, withRouter} from 'react-router-dom'
import {HiMoon} from 'react-icons/hi'
import {FiSun} from 'react-icons/fi'

import Cookies from 'js-cookie'

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

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }
      const onClickLogoutButton = () => {
        Cookies.remove('jwt_token')

        const {history} = props
        history.push('/login')
      }
      return (
        <HeaderContainer isDarkMode={isDarkMode}>
          <WebsiteLogo
            src={isDarkMode ? websiteLogoForDarkMode : websiteLogoForLightMode}
          />
          <OptionsContainer>
            <PlaneButton onClick={onClickTheme} type="button">
              {isDarkMode ? (
                <FiSun style={{color: 'white'}} size={25} />
              ) : (
                <HiMoon style={{color: '#212121'}} size={30} />
              )}
            </PlaneButton>
            <ProfileLogo src={profileIcon} />
            <LogoutButton
              onClick={onClickLogoutButton}
              isDarkMode={isDarkMode}
              type="button"
            >
              Logout
            </LogoutButton>
          </OptionsContainer>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
