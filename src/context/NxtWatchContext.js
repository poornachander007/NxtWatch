import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  savedVideos: [],
  toggleSaveIcon: () => {},
  likedVideos: [],
  toggleLikeIcon: () => {},
  dislikedVideos: [],
  toggleDislikeIcon: () => {},
})

export default NxtWatchContext
