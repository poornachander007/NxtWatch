import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 250px;
  background-color: ${props => (props.isDarkMode ? '#212121' : 'white')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //   align-items: center;
  padding: 20px 15px 0px 0px;
  font-family: 'Roboto';
  @media screen and (max-width: 991px) {
    display: none;
  }
`
export const SideBarOptionsContainer = styled.ul`
  padding: 0;
  width: 100%;
  //   background-color: ${props => (props.isDarkMode ? '#212121' : 'white')};
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 50px 15px 50px 15px;
  font-family: 'Roboto';
`

export const OptionContainer = styled.li`
  list-style-type: none;
  width: 100%;
  //   background-color: ${props => (props.isDarkMode ? '#212121' : 'white')};
  display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 15px;
  font-family: 'Roboto';
`

export const Label = styled.label`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: ${props => (props.isActive ? '900' : 'normal')};
  font-family: 'Roboto';
  margin-left: 20px;
`

export const ContactsContainer = styled.div`
  width: 100%;
  //   background-color: ${props => (props.isDarkMode ? '#212121' : 'white')};
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 0px 20px 0px 0px;
  padding: 15px;
  font-family: 'Roboto';
`

export const ContactsHeading = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 16px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const SocialIconsContainer = styled.div`
  padding: 20px 0px 20px 0px;
  width: 100%;
  //   background-color: ${props => (props.isDarkMode ? '#212121' : 'white')};
  display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 10px 20px 10px 20px;
  //   font-family: 'Roboto';
`

export const SocialIcon = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 10px;
`

export const ContactsDescription = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
`
