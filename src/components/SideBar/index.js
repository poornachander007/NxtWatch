import {Component} from 'react'
import {HiHome} from 'react-icons/hi'
import {FaFire} from 'react-icons/fa'
import {SiFireship, SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SideBarContainer,
  SideBarOptionsContainer,
  OptionContainer,
  Label,
  ContactsContainer,
  ContactsHeading,
  SocialIconsContainer,
  SocialIcon,
  ContactsDescription,
} from './styledComponents'

const facebookLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'
// alt should be facebook logo

const twitterLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'
// alt should be twitter logo

const linkedInLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'
// alt should be linked in logo

// const sideBarsList = [
//     {id:0,icon:}
// ]

class SideBar extends Component {
  state = {activeSideBar: 'Home'}

  onClickSideBarOption = event => {
    this.setState({activeSideBar: event.target.id})
  }

  render() {
    const {activeSideBar} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <SideBarContainer isDarkMode={isDarkMode}>
              <SideBarOptionsContainer>
                <Link style={{textDecoration: 'none'}} to="/">
                  <OptionContainer
                    onClick={this.onClickSideBarOption}
                    id="Home"
                    isDarkMode={isDarkMode}
                  >
                    <HiHome
                      size={20}
                      style={{
                        color: `${
                          activeSideBar === 'Home'
                            ? 'red'
                            : `${isDarkMode ? 'white' : 'black'}`
                        }`,
                      }}
                      //   style={{color: `${isDarkMode ? 'white' : 'black'}`}}
                      id="Home"
                    />
                    <Label
                      isActive={activeSideBar === 'Home'}
                      isDarkMode={isDarkMode}
                      htmlFor="Home"
                      id="Home"
                    >
                      Home
                    </Label>
                  </OptionContainer>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/trending">
                  <OptionContainer
                    onClick={this.onClickSideBarOption}
                    id="Trending"
                    isDarkMode={isDarkMode}
                  >
                    <FaFire
                      size={20}
                      style={{
                        color: `${
                          activeSideBar === 'Trending'
                            ? 'red'
                            : `${isDarkMode ? 'white' : 'black'}`
                        }`,
                      }}
                      id="Trending"
                    />
                    <Label
                      isActive={activeSideBar === 'Trending'}
                      isDarkMode={isDarkMode}
                      htmlFor="Trending"
                      id="Trending"
                    >
                      Trending
                    </Label>
                  </OptionContainer>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/gaming">
                  <OptionContainer
                    onClick={this.onClickSideBarOption}
                    id="Gaming"
                    isDarkMode={isDarkMode}
                  >
                    <SiYoutubegaming
                      size={20}
                      style={{
                        color: `${
                          activeSideBar === 'Gaming'
                            ? 'red'
                            : `${isDarkMode ? 'white' : 'black'}`
                        }`,
                      }}
                      id="Gaming"
                    />
                    <Label
                      isActive={activeSideBar === 'Gaming'}
                      isDarkMode={isDarkMode}
                      htmlFor="Gaming"
                      id="Gaming"
                    >
                      Gaming
                    </Label>
                  </OptionContainer>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/saved-videos">
                  <OptionContainer
                    onClick={this.onClickSideBarOption}
                    id="Saved Videos"
                    isDarkMode={isDarkMode}
                  >
                    <MdPlaylistAdd
                      size={20}
                      style={{
                        color: `${
                          activeSideBar === 'Saved Videos'
                            ? 'red'
                            : `${isDarkMode ? 'white' : 'black'}`
                        }`,
                      }}
                      id="Saved Videos"
                    />
                    <Label
                      isActive={activeSideBar === 'Saved Videos'}
                      isDarkMode={isDarkMode}
                      htmlFor="Saved Videos"
                      id="Saved Videos"
                    >
                      Saved Videos
                    </Label>
                  </OptionContainer>
                </Link>
              </SideBarOptionsContainer>
              <ContactsContainer>
                <ContactsHeading isDarkMode={isDarkMode}>
                  CONTACT US
                </ContactsHeading>
                <SocialIconsContainer>
                  <SocialIcon alt="facebook logo" src={facebookLogo} />
                  <SocialIcon alt="twitter logo" src={twitterLogo} />
                  <SocialIcon alt="linked in logo" src={linkedInLogo} />
                </SocialIconsContainer>
                <ContactsDescription isDarkMode={isDarkMode}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactsDescription>
              </ContactsContainer>
            </SideBarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SideBar
