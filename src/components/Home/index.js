import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdClose} from 'react-icons/md'
import {HiSearch} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {PageContainer, SideBarAndContentContainer} from '../styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header/index'
import SideBar from '../SideBar/index'

import HomeVideoItem from '../HomeVideoItem'

import {
  ContentContainer,
  Banner,
  WebsiteImageAndCloseButtonContainer,
  WebsiteImage,
  CloseButton,
  BannerDescription,
  GetItNowButton,
  InputContainer,
  Input,
  SearchButton,
  VideosContainer,
  FailureContainer,
  Heading,
  NoResultsFoundContainer,
  ImgLogo,
  Para,
  RetryButton,
  CustomContainer,
} from './styledComponents'

const websiteLogoForDarkMode =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const lightHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const darkHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
const noResultsUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
const apiStatusViews = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    videosList: [],
    apiStatus: apiStatusViews.initial,
  }

  componentDidMount = () => {
    this.getHomeVideos()
  }

  renderFailureView = isDarkMode => (
    <FailureContainer>
      <ImgLogo
        src={isDarkMode ? darkHomeFailureUrl : lightHomeFailureUrl}
        alt="failure view"
        failure
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Para failurePara>
        We are having some trouble complete your request.
        <br />
        Please try again.
      </Para>
      <CustomContainer retry>
        <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
      </CustomContainer>
    </FailureContainer>
  )

  renderNoResultsFound = isDarkMode => (
    <NoResultsFoundContainer>
      <ImgLogo src={noResultsUrl} failure alt="no videos" />
      <Heading>No Search results found</Heading>
      <Para failurePara>Try different key words or remove search filter</Para>
      <CustomContainer retry>
        <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
      </CustomContainer>
    </NoResultsFoundContainer>
  )

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

  onClickRetry = () => {
    this.getHomeVideos()
  }

  renderLoadingView = isDarkMode => (
    <div data-testid="loader" className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getHomeVideos()
  }

  renderInput = isDarkMode => {
    const {searchInput} = this.state
    return (
      <InputContainer>
        <Input
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <SearchButton
          data-testid="searchButton"
          type="button"
          onClick={this.onClickSearch}
          isDarkMode={isDarkMode}
        >
          <HiSearch size={16} color={isDarkMode ? 'white' : 'black'} />
        </SearchButton>
      </InputContainer>
    )
  }

  renderVideos = isDarkMode => {
    const {videosList, searchInput} = this.state
    const filteredList = videosList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <>
        {filteredList.length === 0
          ? this.renderNoResultsFound(isDarkMode)
          : filteredList.map(eachItem => (
              <HomeVideoItem
                theme={isDarkMode}
                key={eachItem.id}
                videoDetails={eachItem}
              />
            ))}
      </>
    )
  }

  renderComponentBasedOnApiStatus = isDarkMode => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusViews.in_progress:
        return this.renderLoadingView(isDarkMode)
      case apiStatusViews.success:
        return this.renderVideos(isDarkMode)
      case apiStatusViews.failure:
        return this.renderFailureView(isDarkMode)
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
                <ContentContainer data-testid="home" isDarkMode={isDarkMode}>
                  {showBanner && (
                    <Banner data-testid="banner">
                      <WebsiteImageAndCloseButtonContainer>
                        <WebsiteImage
                          alt="nxt watch logo"
                          src={websiteLogoForDarkMode}
                        />
                        <CloseButton
                          data-testid="close"
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
                  {this.renderInput(isDarkMode)}
                  <VideosContainer>
                    {this.renderComponentBasedOnApiStatus(isDarkMode)}
                  </VideosContainer>
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
