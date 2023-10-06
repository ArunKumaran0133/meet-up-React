import React from 'react'

const meetupContext = React.createContext({
  isRegistered: false,
  onClickRegister: () => {},
  userInput: '',
  courseId: '',
})

export default meetupContext
