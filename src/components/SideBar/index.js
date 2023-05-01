import {HiHome} from 'react-icons/hi'
import {FaFire} from 'react-icons/fa'
import {SiFireship, SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
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

const SideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <SideBarContainer isDarkMode={isDarkMode}>
          <SideBarOptionsContainer>
            <OptionContainer isDarkMode={isDarkMode}>
              <HiHome
                size={20}
                style={{color: `${isDarkMode ? 'white' : 'black'}`}}
                id="Home"
              />
              <Label isDarkMode={isDarkMode} htmlFor="Home">
                Home
              </Label>
            </OptionContainer>
            <OptionContainer isDarkMode={isDarkMode}>
              <FaFire
                size={20}
                style={{color: `${isDarkMode ? 'white' : 'black'}`}}
                id="Trending"
              />
              <Label isDarkMode={isDarkMode} htmlFor="Trending">
                Trending
              </Label>
            </OptionContainer>
            <OptionContainer isDarkMode={isDarkMode}>
              <SiYoutubegaming
                size={20}
                style={{color: `${isDarkMode ? 'white' : 'black'}`}}
                id="Gaming"
              />
              <Label isDarkMode={isDarkMode} htmlFor="Gaming">
                Gaming
              </Label>
            </OptionContainer>
            <OptionContainer isDarkMode={isDarkMode}>
              <MdPlaylistAdd
                size={20}
                style={{color: `${isDarkMode ? 'white' : 'black'}`}}
                id="Saved Videos"
              />
              <Label isDarkMode={isDarkMode} htmlFor="Saved Videos">
                Saved Videos
              </Label>
            </OptionContainer>
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

export default SideBar
