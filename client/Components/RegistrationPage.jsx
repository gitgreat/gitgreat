import {RegistrationForm, LoginLink} from 'react-stormpath'
import React from 'react'
import $ from 'jquery'

class RegistrationPage extends React.Component {
  //MIGHT NEED TO RE-READ REGISTRATIONFORM PAGE

  constructor (props) {
    super (props);

    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstNameSubmit = this.firstNameSubmit.bind(this);
    this.lastNameSubmit = this.lastNameSubmit.bind(this);
    this.emailSubmit = this.emailSubmit.bind(this);
  }

  firstNameSubmit (e) {
    this.setState({firstName: e.target.value})  
  }

  lastNameSubmit (e) {
    this.setState({lastName: e.target.value})  
  }

  emailSubmit (e) {
    this.setState({email: e.target.value})  
  }



  handleSubmit (e) {
    var data = this.state
    console.log(data)
    $.ajax({
      method:'POST',
      url:'/createAccount',
      contentType: 'application/json',
      data: JSON.stringify(data)
    })
  }

  // createAccount () {
  //   $.ajax({
  //     method: 'POST',
  //     url: '/createAccount',
  //     data: 
  //   })
  // }

  render () {
    return (
      <RegistrationForm redirectTo='/'>
        <div data-spIf="account.created">
          <span data-spIf="!account.enabled">To verify your account, click the verification link that we sent to your email then proceed to login by going to <LoginLink />.</span>
        </div>
        <div data-spIf="!account.created">
          <p>
            <label htmlFor="firstName">First name</label><br />
            <input id="firstName" type="text" name="givenName" onChange={this.firstNameSubmit} />
          </p>
          <p>
            <label htmlFor="lastName">Last name</label><br />
            <input id="lastName" type="text" name="surname" onChange={this.lastNameSubmit} />
          </p>
          <p>
            <label htmlFor="email">Email</label><br />
            <input id="email" type="text" name="email" onChange={this.emailSubmit} />
          </p>
          <p>
            <label htmlFor="password">Password</label><br />
            <input id="password" type="password" name="password" />
          </p>
          <p data-spIf="form.error">
            <strong>Error:</strong><br />
            <span data-spBind="form.errorMessage" />
          </p>
          <p>
            <input type="submit" value="Register" onClick={this.handleSubmit} />
          </p>
        </div>
      </RegistrationForm>
    )
  }
}

module.exports = RegistrationPage