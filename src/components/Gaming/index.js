import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Link} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'
import {PageContainer, SideBarAndContentContainer} from '../styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header/index'
import SideBar from '../SideBar/index'

import {
  GamingContainer,
  CustomContainer,
  IconButton,
  Heading,
  VideoItemsUl,
  VideoItemLi,
  Image,
  Para,
  SmallPara,
  FailureViewContainer,
  RetryButton,
  //   TextDiv,
} from './styledComponents'

const lightHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const darkHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

const GamingApiStatusViews = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingList: [], apiStatus: GamingApiStatusViews.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: GamingApiStatusViews.in_progress})
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const {videos} = data
      const updatedVideos = videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingList: updatedVideos,
        apiStatus: GamingApiStatusViews.success,
      })
    } else {
      this.setState({apiStatus: GamingApiStatusViews.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideoItem = (videoDetails, isDark) => {
    const {id, title, thumbnailUrl, viewCount} = videoDetails
    return (
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <VideoItemLi key={id}>
          <Image src={thumbnailUrl} alt="video thumbnail" />

          <Para title isDark={isDark}>
            {title}
          </Para>
          <SmallPara views isDark={isDark}>
            {viewCount} Watching Worldwide
          </SmallPara>
        </VideoItemLi>
      </Link>
    )
  }

  renderGamingSuccessView = isDark => {
    const {gamingList} = this.state
    return (
      <VideoItemsUl>
        {gamingList.map(eachItem => this.renderVideoItem(eachItem, isDark))}
      </VideoItemsUl>
    )
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = isDark => (
    <FailureViewContainer isDark={isDark}>
      <Image
        src={isDark ? darkHomeFailureUrl : lightHomeFailureUrl}
        alt="failure view"
        failure
      />
      <Heading isDark={isDark} failure>
        Oops! Something Went Wrong
      </Heading>
      <Para isDark={isDark}>
        We are having some trouble complete your request.
      </Para>
      <CustomContainer failure>
        <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
      </CustomContainer>
    </FailureViewContainer>
  )

  renderGamingViews = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case GamingApiStatusViews.in_progress:
        return this.renderLoadingView(isDark)
      case GamingApiStatusViews.success:
        return this.renderGamingSuccessView(isDark)
      case GamingApiStatusViews.failure:
        return this.renderFailureView(isDark)
      default:
        return null
    }
  }

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
                <GamingContainer data-testid="gaming" isDark={isDarkMode}>
                  <CustomContainer isDark={isDarkMode}>
                    <IconButton isDark={isDarkMode} type="button">
                      <HiFire size={25} color="red" />
                    </IconButton>
                    <Heading isDark={isDarkMode}>Gaming</Heading>
                  </CustomContainer>
                  {this.renderGamingViews(isDarkMode)}
                </GamingContainer>
              </SideBarAndContentContainer>
            </PageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
