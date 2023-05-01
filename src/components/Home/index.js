import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdClose} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {PageContainer, SideBarAndContentContainer} from '../styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ContentContainer,
  Banner,
  WebsiteImageAndCloseButtonContainer,
  WebsiteImage,
  CloseButton,
  BannerDescription,
  GetItNowButton,
} from './styledComponents'

import Header from '../Header/index'
import SideBar from '../SideBar/index'

const websiteLogoForDarkMode =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const apiStatusViews = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {showBanner: true, videosList: [], apiStatus: apiStatusViews.initial}

  componentDidMount = () => {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusViews.in_progress})
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const {videos} = data
      const updatedVideos = videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        channel: eachItem.channel,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))
      this.setState({
        videosList: updatedVideos,
        apiStatus: apiStatusViews.success,
      })
      console.log(updatedVideos)
    } else {
      this.setState({apiStatus: apiStatusViews.failure})
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => {}

  renderVideos = () => {}

  renderComponentBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusViews.in_progress:
        return this.renderLoadingView()
      case apiStatusViews.success:
        return this.renderVideos()
      case apiStatusViews.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onClickCloseBanner = () => {
    console.log('*******onClickCloseBanner*********')
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <PageContainer isDarkMode={isDarkMode}>
              <Header />
              <SideBarAndContentContainer isDarkMode={isDarkMode}>
                <SideBar />
                <ContentContainer isDarkMode={isDarkMode}>
                  {showBanner && (
                    <Banner>
                      <WebsiteImageAndCloseButtonContainer>
                        <WebsiteImage src={websiteLogoForDarkMode} />
                        <CloseButton
                          onClick={this.onClickCloseBanner}
                          type="button"
                        >
                          <MdClose style={{color: '#313131'}} size={20} />
                        </CloseButton>
                      </WebsiteImageAndCloseButtonContainer>
                      <BannerDescription>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerDescription>
                      <GetItNowButton>GET IT NOW</GetItNowButton>
                    </Banner>
                  )}
                </ContentContainer>
              </SideBarAndContentContainer>
            </PageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
