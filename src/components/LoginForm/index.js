import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginPage,
  WebsiteLogo,
  Form,
  InputContainer,
  InputLabel,
  UsernameInputField,
  PasswordInputField,
  ShowPasswordCheckboxContainer,
  CheckboxInputField,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'
// import './index.css'

const websiteLogoForLightMode =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const websiteLogoForDarkMode =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeShowPasswordCheckbox = () => {
    this.setState(preState => ({showPassword: !preState.showPassword}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <InputContainer>
              <InputLabel isDarkMode={isDarkMode} htmlFor="password">
                PASSWORD
              </InputLabel>
              <PasswordInputField
                isDarkMode={isDarkMode}
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
              />
            </InputContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <InputContainer>
              <InputLabel isDarkMode={isDarkMode} htmlFor="username">
                USERNAME
              </InputLabel>
              <UsernameInputField
                isDarkMode={isDarkMode}
                type="text"
                id="username"
                value={username}
                onChange={this.onChangeUsername}
                placeholder="Username"
              />
            </InputContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    const {showSubmitError, errorMsg, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <LoginPage isDarkMode={isDarkMode} className="login-form-container">
              <Form
                isDarkMode={isDarkMode}
                className="form-container"
                onSubmit={this.submitForm}
              >
                <WebsiteLogo
                  src={
                    isDarkMode
                      ? websiteLogoForDarkMode
                      : websiteLogoForLightMode
                  }
                />
                {this.renderUsernameField()}
                {this.renderPasswordField()}
                <ShowPasswordCheckboxContainer>
                  <CheckboxInputField
                    type="checkbox"
                    id="checkbox"
                    checked={showPassword}
                    onChange={this.onChangeShowPasswordCheckbox}
                  />
                  <CheckboxLabel isDarkMode={isDarkMode} htmlFor="checkbox">
                    Show Password
                  </CheckboxLabel>
                </ShowPasswordCheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </Form>
            </LoginPage>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
