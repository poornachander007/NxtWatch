import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {PageContainer, SideBarAndContentContainer} from '../styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header/index'
import SideBar from '../SideBar/index'

import {
  SavedVideosContainer,
  UlContentContainer,
  CustomContainer,
  IconButton,
  Heading,
  VideoItemLi,
  Image,
  CardParaContainer,
  SmallPara,
  Para,
  ViewsAndDays,
} from './styledComponents'

const noSavedImageUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'

class SavedVideos extends Component {
  state = {}

  renderNoSavedVideosView = () => (
    <>
      <Image
        src={noSavedImageUrl}
        style={{width: '30%'}}
        alt="no saved videos"
      />
      <Heading>No saved videos found</Heading>
      <Para>You can save your videos while watching them</Para>
    </>
  )

  renderVideoItem = (videoDetails, isDark) => {
    const {
      id,
      title,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
    } = videoDetails
    const updatedChannel = {
      name: channel.name,
      profileImageUrl: channel.profile_image_url,
    }
    const {name} = updatedChannel
    // const formattedDays = formatDistanceToNow(new Date(publishedAt))
    // const array = formattedDays.split(' ')
    // const days = array.splice(1)
    // const duration = `${days.join(' ')} ago`
    // const distance = array.join(' ')
    return (
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <VideoItemLi key={id}>
          <Image src={thumbnailUrl} alt="video thumbnail" />
          <CardParaContainer>
            <SmallPara title isDark={isDark}>
              {title}
            </SmallPara>
            <Para isDark={isDark}>{name}</Para>
            <ViewsAndDays>
              <Para isDark={isDark}>{viewCount} views</Para>
              <Para isDark={isDark}>. {publishedAt}</Para>
            </ViewsAndDays>
          </CardParaContainer>
        </VideoItemLi>
      </Link>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode, savedVideos} = value
          return (
            <PageContainer isDarkMode={isDarkMode}>
              <Header />
              <SideBarAndContentContainer isDarkMode={isDarkMode}>
                <SideBar />
                <SavedVideosContainer
                  data-testid="savedVideos"
                  isDark={isDarkMode}
                >
                  <CustomContainer isDark={isDarkMode}>
                    <IconButton isDark={isDarkMode}>
                      <HiFire size={25} color="red" />
                    </IconButton>
                    <Heading isDark={isDarkMode}>Saved Videos</Heading>
                  </CustomContainer>

                  {savedVideos.length === 0 ? (
                    this.renderNoSavedVideosView()
                  ) : (
                    <UlContentContainer>
                      {savedVideos.map(item =>
                        this.renderVideoItem(item, isDarkMode),
                      )}
                    </UlContentContainer>
                  )}
                </SavedVideosContainer>
              </SideBarAndContentContainer>
            </PageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
