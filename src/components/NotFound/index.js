// import './index.css'
import NxtWatchContext from '../../context/NxtWatchContext'

import {CustomContainer, Image, Heading, Para} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <CustomContainer
          isDarkMode={isDarkMode}
          className="not-found-container"
        >
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
            alt="not found"
          />
          <Heading isDarkMode={isDarkMode}>Page Not Found</Heading>
          <Para isDarkMode={isDarkMode}>
            we are sorry, the page you requested could not be found.
          </Para>
        </CustomContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
