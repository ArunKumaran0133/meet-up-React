import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import meetupContext from './context/meetupContext'
import MeetUpHome from './components/MeetUpHome'
import NotFound from './components/NotFound'
import Register from './components/Register'

class App extends Component {
  state = {isRegistered: false, userInput: '', courseId: ''}

  onClickRegister = (userInput, courseId) => {
    this.setState(prevState => ({
      isRegistered: !prevState.isRegistered,
      userInput,
      courseId,
    }))
  }

  render() {
    const {isRegistered, userInput, courseId} = this.state
    console.log(isRegistered, userInput, courseId)
    return (
      <meetupContext.Provider
        value={{
          isRegistered,
          onClickRegister: this.onClickRegister,
          userInput,
          courseId,
        }}
      >
        <Switch>
          <Route exact path="/" component={MeetUpHome} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </meetupContext.Provider>
    )
  }
}

export default App
