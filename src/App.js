import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  //   state = {isDarkMode: true}
  state = {
    isDarkMode: false,
    savedVideos: [],
    likedVideos: [],
    dislikedVideos: [],
  }

  toggleSaveIcon = obj => {
    const {id} = obj
    const changedObj = {...obj, isSaved: !obj.isSaved}
    const {savedVideos} = this.state
    const findObj = savedVideos.find(eachItem => eachItem.id === id)
    if (findObj === undefined) {
      this.setState(preState => ({
        savedVideos: [...preState.savedVideos, changedObj],
      }))
    } else {
      this.setState(preState => ({
        savedVideos: preState.savedVideos.filter(
          eachItem => eachItem.id !== id,
        ),
      }))
    }
  }

  toggleLikeIcon = obj => {
    const {id} = obj
    const {likedVideos} = this.state
    if (likedVideos.includes(id)) {
      this.setState(preState => ({
        likedVideos: preState.likedVideos.filter(item => item !== id),
      }))
    } else {
      this.setState(preState => ({
        likedVideos: [...preState.likedVideos, id],
        dislikedVideos: preState.dislikedVideos.filter(item => item !== id),
      }))
    }
  }

  toggleDislikeIcon = obj => {
    const {id} = obj
    const {dislikedVideos} = this.state
    if (dislikedVideos.includes(id)) {
      this.setState(preState => ({
        dislikedVideos: preState.dislikedVideos.filter(item => item !== id),
      }))
    } else {
      this.setState(preState => ({
        dislikedVideos: [...preState.dislikedVideos, id],
        likedVideos: preState.likedVideos.filter(item => item !== id),
      }))
    }
  }

  toggleTheme = () => {
    this.setState(preState => ({isDarkMode: !preState.isDarkMode}))
  }

  render() {
    const {isDarkMode, savedVideos, likedVideos, dislikedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkMode,
          toggleTheme: this.toggleTheme,
          savedVideos,
          toggleSaveIcon: this.toggleSaveIcon,
          likedVideos,
          toggleLikeIcon: this.toggleLikeIcon,
          dislikedVideos,
          toggleDislikeIcon: this.toggleDislikeIcon,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
