import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

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
  PopupContainer,
  PopupButtons,
  CancelButton,
  ConfirmButton,
  PopupHeading,
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
        history.replace('/login')
      }

      const renderLogoutPopup = isDark => (
        <Popup
          modal
          trigger={
            <LogoutButton
              //   onClick={onClickLogoutButton}
              isDarkMode={isDark}
              type="button"
            >
              Logout
            </LogoutButton>
          }
        >
          {close => (
            <PopupContainer isDark={isDark}>
              <PopupHeading as="p" isDark={isDark}>
                Are you sure, you want to logout
              </PopupHeading>
              <PopupButtons isDark={isDark} main>
                <CancelButton
                  isDark={isDark}
                  onClick={() => close()}
                  type="button"
                >
                  Cancel
                </CancelButton>
                <ConfirmButton
                  type="button"
                  onClick={onClickLogoutButton}
                  isDark={isDark}
                >
                  Confirm
                </ConfirmButton>
              </PopupButtons>
            </PopupContainer>
          )}
        </Popup>
      )
      return (
        <HeaderContainer isDarkMode={isDarkMode}>
          <Link to="/">
            <WebsiteLogo
              alt="website logo"
              src={
                isDarkMode ? websiteLogoForDarkMode : websiteLogoForLightMode
              }
            />
          </Link>
          <OptionsContainer>
            <li key={1}>
              <PlaneButton
                data-testid="theme"
                onClick={onClickTheme}
                type="button"
              >
                {isDarkMode ? (
                  <FiSun style={{color: 'white'}} size={25} />
                ) : (
                  <HiMoon style={{color: '#212121'}} size={30} />
                )}
              </PlaneButton>
            </li>
            <li key={2}>
              <ProfileLogo alt="profile" src={profileIcon} />
            </li>
            <li key={3}>{renderLogoutPopup(isDarkMode)}</li>
          </OptionsContainer>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
