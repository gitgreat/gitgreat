import {LoginForm} from 'react-stormpath'
import React from 'react'

var LoginPage = () => {
  //MIGHT NEED TO RE-READ REGISTRATIONFORM PAGE
  return (
    <LoginForm redirectTo='/' />
  )
}

module.exports = LoginPage;