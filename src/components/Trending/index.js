import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdClose} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {PageContainer, SideBarAndContentContainer} from '../styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header/index'
import SideBar from '../SideBar/index'

class Trending extends Component {
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

export default Trending
