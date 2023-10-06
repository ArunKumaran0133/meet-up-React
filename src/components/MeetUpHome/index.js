import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import meetupContext from '../../context/meetupContext'

import {
  MeetUpContainer,
  Heading,
  Para,
  CustomButton,
  MeetupImage,
} from './styledComponents'

class MeetUpHome extends Component {
  redirectToRegister = () => {
    console.log('clicked')
    const {history} = this.props
    console.log(history)
    history.replace('/register')
  }

  renderBeforeRegisterView = () => (
    <MeetUpContainer>
      <Heading>Welcome To Meetup</Heading>
      <Para>Please register for the topic</Para>
      <Link to="/register">
        <CustomButton type="button" onClick={this.redirectToRegister}>
          Register
        </CustomButton>
      </Link>
      <MeetupImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </MeetUpContainer>
  )

  renderAfterRegisterView = (userInput, courseId) => (
    <MeetUpContainer>
      <Heading Registered>Hello {userInput}</Heading>
      <Para Registered>welcome to {courseId}</Para>

      <MeetupImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </MeetUpContainer>
  )

  render() {
    return (
      <meetupContext.Consumer>
        {value => {
          const {isRegistered, userInput, courseId} = value
          return (
            <>
              <Header />
              {isRegistered
                ? this.renderAfterRegisterView(userInput, courseId)
                : this.renderBeforeRegisterView()}
            </>
          )
        }}
      </meetupContext.Consumer>
    )
  }
}

export default MeetUpHome
