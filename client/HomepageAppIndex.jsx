import ReactDOM from 'react-dom';
import HomepageApp from './Components/HomepageApp.jsx';
import CreateEventApp from './Components/CreateEventApp.jsx';
import EventList from './Components/EventList.jsx';
import EventPlanning from './Components/EventPlanning.jsx';
import Reminders from './Components/Reminders.jsx';
import Photos from './Components/Photos.jsx';
import Info from './Components/Info.jsx';
import Bulletin from './Components/Bulletin.jsx';
import WhatToBring from './Components/WhatToBring.jsx';
import {Route, Link, browserHistory, IndexRoute} from 'react-router';
import React from 'react';
import ReactStormpath, { Router, AuthenticatedRoute, LoginLink, HomeRoute, LoginRoute } from 'react-stormpath';
import LoginPage from './Components/LoginPage.jsx'
import RegistrationPage from './Components/RegistrationPage.jsx'

ReactStormpath.init({

  //   endpoints: {
  //   baseUri: 'http://localhost:3000', // E.g. https://api.example.com
  //   register: '/register',
  //   create: '/create',
  //   login: '/login',
  //   list: '/list',
  //   planning: '/planning',
  //   reminders: '/reminders',
  //   photos: '/photos',
  //   'what-to-bring': '/what-to-bring'
  // }
  // // See docs for available configuration options.
});
//TENANT -- copper-bow
//MIGHT NEED TO ACCESS USER STATE IN COMPONENTS

// Renders the HomepageApp component on index.html
// ReactDOM.render((
//   <Router history={browserHistory}>
//     <HomeRoute path="/" component={HomepageApp}>
//       <AuthenticatedRoute>
//         <IndexRoute component={EventList} />
//       </AuthenticatedRoute>
//       <LoginRoute path='/login' component={LoginPage} />
//       <Route path='/register' component={RegistrationPage} />
//       <AuthenticatedRoute path="create" component={CreateEventApp} />
//       <Route path="planning" component={EventPlanning} />
//         <Route path="info" component={Info} />
//         <Route path="reminders" component={Reminders} />
//         <Route path="photos" component={Photos} />
//         <Route path="what-to-bring" component={WhatToBring} />
//         <Route path="bulletin" component={Bulletin} />
//     </HomeRoute>
//   </Router>
//   ), document.getElementById('HomepageApp')
// );

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={HomepageApp}>
      <IndexRoute component={EventList} />
      <Route path="create" component={CreateEventApp} />
      <Route path="list" component={EventList}/>
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/register' component={RegistrationPage} />
      <Route path="planning" component={EventPlanning}>
        <IndexRoute component={Info} />
        <Route path="info" component={Info} />
        <Route path="reminders" component={Reminders} />
        <Route path="photos" component={Photos} />
        <Route path="what-to-bring" component={WhatToBring} />
        <Route path="bulletin" component={Bulletin} />
      </Route>
    </Route>
  </Router>
  ), document.getElementById('HomepageApp')
);
