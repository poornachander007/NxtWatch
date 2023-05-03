import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ReactPlayer from 'react-player'
import {PageContainer, SideBarAndContentContainer} from '../styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header/index'
import SideBar from '../SideBar/index'

import {
  CustomContainer,
  Heading,
  Image,
  Para,
  SmallPara,
  FailureViewContainer,
  RetryButton,
  VideoDetailsContainer,
  CustomActionsContainer,
  ViewsAndDateContainer,
  ActionsContainer,
  Hr,
  BottomContainer,
  ProfileImage,
  ContentContainer,
  Description,
  CustomPara,
  UserActionsContainer,
  IconButton,
  IconName,
} from './styledComponents'

const lightHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const darkHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

const apiStatusViews = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoObj: {},
    apiStatus: apiStatusViews.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusViews.in_progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const videoData = data
      console.log(videoData.video_details, '******videoData.video_details*****')
      const UpdatedVideoData = {
        id: videoData.video_details.id,
        title: videoData.video_details.title,
        videoUrl: videoData.video_details.video_url,
        thumbnailUrl: videoData.video_details.thumbnail_url,
        channel: videoData.video_details.channel,
        viewCount: videoData.video_details.view_count,
        publishedAt: videoData.video_details.published_at,
        description: videoData.video_details.description,
      }
      this.setState({
        videoObj: UpdatedVideoData,
        apiStatus: apiStatusViews.success,
      })
    } else {
      this.setState({apiStatus: apiStatusViews.failure})
    }
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  // channel
  // --------
  // "name",
  // "profile_image_url",
  // "subscriber_count",
  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

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
        We are having some trouble to complete your request. Please try again.
      </Para>
      <CustomContainer failure>
        <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
      </CustomContainer>
    </FailureViewContainer>
  )

  // ----------------------------------------

  // ----------------------------------------

  renderVideoDetailsSuccessView = isDark => {
    const {videoObj} = this.state
    const {
      id,
      title,
      videoUrl,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoObj

    const updatedChannel = {
      name: channel.name,
      profileImageUrl: channel.profile_image_url,
      subscriberCount: channel.subscriber_count,
    }
    const {name, subscriberCount, profileImageUrl} = updatedChannel
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            toggleSaveIcon,
            savedVideos,
            toggleLikeIcon,
            likedVideos,
            toggleDislikeIcon,
            dislikedVideos,
          } = value
          console.log(savedVideos, '*********   SavedVideos  ********')
          const onClickToggleSave = () => {
            toggleSaveIcon(videoObj)
          }
          const onClickToggleLike = () => {
            console.log('************  onClickToggleLike ***********')
            toggleLikeIcon(videoObj)
          }
          const onClickToggleDislike = () => {
            console.log('************  onClickToggleDislike ***********')
            toggleDislikeIcon(videoObj)
          }
          const getSavedObj = savedVideos.find(eachItem => eachItem.id === id)
          let isSaved
          if (getSavedObj === undefined) {
            isSaved = false
          } else {
            isSaved = true
          }
          const isLiked = likedVideos.includes(id)

          const isDisLiked = dislikedVideos.includes(id)

          console.log(
            dislikedVideos,
            '*********** dislikedVideos *************',
          )
          return (
            <div style={{Width: '100%', maxWidth: '640px'}}>
              <div className="responsive-container">
                <ReactPlayer url={videoUrl} />
              </div>
              <Para>{title}</Para>
              <CustomActionsContainer isDark={isDark}>
                <ViewsAndDateContainer isDark={isDark}>
                  <SmallPara isDark={isDark}>{viewCount} Views</SmallPara>
                  <SmallPara isDark={isDark}>. {publishedAt}</SmallPara>
                </ViewsAndDateContainer>
                <UserActionsContainer>
                  <UserActionsContainer iconAndName>
                    <IconButton active={isLiked} onClick={onClickToggleLike}>
                      <BiLike
                        size={20}
                        //   color={isDark ? 'white' : 'black'}
                      />
                      Like
                    </IconButton>
                  </UserActionsContainer>
                  <UserActionsContainer iconAndName>
                    <IconButton
                      active={isDisLiked}
                      onClick={onClickToggleDislike}
                    >
                      <BiDislike
                        size={20}

                        //   color={isDark ? 'white' : 'black'}
                      />
                      Dislike
                    </IconButton>
                  </UserActionsContainer>
                  <UserActionsContainer iconAndName>
                    <IconButton active={isSaved} onClick={onClickToggleSave}>
                      <BiListPlus
                        size={20}

                        //   color={isDark ? 'white' : 'black'}
                      />
                      {isSaved ? 'Saved' : 'Save'}
                    </IconButton>
                  </UserActionsContainer>
                </UserActionsContainer>
              </CustomActionsContainer>
              <Hr isDark={isDark} />
              <BottomContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentContainer>
                  <CustomPara bottom="true" isDark={isDark}>
                    {name}
                  </CustomPara>
                  <Para isDark={isDark}>{subscriberCount}</Para>
                  <Description isDark={isDark}>{description}</Description>
                </ContentContainer>
              </BottomContainer>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderVideoDetailsViews = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusViews.in_progress:
        return this.renderLoadingView(isDark)
      case apiStatusViews.success:
        return this.renderVideoDetailsSuccessView(isDark)
      case apiStatusViews.failure:
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
                <VideoDetailsContainer
                  data-testid="videoItemDetails"
                  isDark={isDarkMode}
                >
                  {this.renderVideoDetailsViews(isDarkMode)}
                </VideoDetailsContainer>
              </SideBarAndContentContainer>
            </PageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
