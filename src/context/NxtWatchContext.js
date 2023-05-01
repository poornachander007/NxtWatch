import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => {},
})

export default NxtWatchContext
