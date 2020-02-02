import React from 'react';
import './App.scss';

//import SessionManager from "./authentication/SessionManager";
//import ValidationTest from "./authentication/ValidationTest";

import { HashRouter as Router, Route } from 'react-router-dom';

import PostIndex from './views/posts/PostIndex';
import NewPost from './views/posts/NewPost';
import About from './views/static/About';
import ProfileSettings from "./views/user/ProfileSettings";
import NavigationUpper from "./components/navigation/NavigationUpper";
import ShowPost from "./views/posts/ShowPost"
import ShowProfile from "./views/user/ShowProfile";
import GettingStarted from './views/welcome/GettingStarted';

function App() {
  return (
      <Router>
        <div className="App">

          <NavigationUpper />


          <Route exact path="/" component={PostIndex} />
          <Route exact path="/posts/new" component={NewPost} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile/settings" component={ProfileSettings}/>
          <Route exact path="/show/post/:id" component={ShowPost} />
          <Route exact path="/show/userprofile/:id" component={ShowProfile} />
          <Route exact path={'/welcome'} component={GettingStarted}/>

          <div className={'content-spacer'}/>


        </div>
      </Router>
  );
}

export default App;

/*
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
        >
          Hello!
        </a>

          <SessionManager/>

          <ValidationTest/>

      </header>

    </div>
*/

