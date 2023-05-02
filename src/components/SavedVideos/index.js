import {Component} from 'react'
import {PageContainer, SideBarAndContentContainer} from '../styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header/index'
import SideBar from '../SideBar/index'

class SavedVideos extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <PageContainer isDarkMode={isDarkMode}>
              <Header />
              <SideBarAndContentContainer isDarkMode={isDarkMode}>
                <SideBar />
              </SideBarAndContentContainer>
            </PageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
