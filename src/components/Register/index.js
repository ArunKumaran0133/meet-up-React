import {Component} from 'react'

import Header from '../Header'

import {
  RegisterMainContainer,
  RegisterCartContainer,
  RegisterImage,
  FormInputContainer,
  Heading,
  ImagContainer,
  Input,
  Label,
  InputContainer,
  Select,
  Error,
} from './styledComponents'
import {CustomButton} from '../MeetUpHome/styledComponents'
import meetupContext from '../../context/meetupContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    userInput: '',
    courseId: topicsList[0].displayText,
    validUserInput: true,
  }

  getUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  getCourseId = event => {
    this.setState({courseId: event.target.value})
  }

  renderUserInput = () => {
    const {userInput} = this.state
    return (
      <InputContainer>
        <Label>NAME</Label>
        <Input
          type="text"
          placeholder="YOUR NAME"
          onChange={this.getUserInput}
          value={userInput}
        />
      </InputContainer>
    )
  }

  renderSelectInput = () => {
    const {courseId} = this.state
    return (
      <InputContainer>
        <Label>TOPICS</Label>
        <Select onChange={this.getCourseId} value={courseId}>
          {topicsList.map(eachItem => (
            <option key={eachItem.id} value={eachItem.displayText}>
              {eachItem.displayText}
            </option>
          ))}
        </Select>
      </InputContainer>
    )
  }

  render() {
    return (
      <>
        <meetupContext.Consumer>
          {value => {
            const {onClickRegister} = value
            const {userInput, courseId, validUserInput} = this.state
            const toggleRegister = event => {
              event.preventDefault()
              if (userInput.length > 0) {
                const {history} = this.props
                this.setState({validUserInput: true})
                onClickRegister(userInput, courseId)
                history.replace('/')
              } else {
                this.setState({validUserInput: false})
              }
            }
            const checkUserInput = () => {
              if (userInput.length === 0) {
                this.setState({validUserInput: false})
              }
            }

            return (
              <>
                <Header />
                <RegisterMainContainer>
                  <RegisterCartContainer>
                    <ImagContainer>
                      <RegisterImage
                        src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                        alt="website register"
                      />
                    </ImagContainer>
                    <FormInputContainer onSubmit={toggleRegister}>
                      <Heading>Let us join</Heading>
                      {this.renderUserInput()}
                      {this.renderSelectInput()}
                      <CustomButton type="submit" onBlur={checkUserInput}>
                        Register Now
                      </CustomButton>
                      {validUserInput ? null : (
                        <Error>Please enter your name</Error>
                      )}
                    </FormInputContainer>
                  </RegisterCartContainer>
                </RegisterMainContainer>
              </>
            )
          }}
        </meetupContext.Consumer>
      </>
    )
  }
}

export default Register
