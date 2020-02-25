// This is the frontend's main function which controls the frontend
// apps routing.

import React from 'react';
import './App.scss';

// Using hash routing, everything after '#' in url is ignored by the backend API
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/* Import View Components */

// PostsIndex shows all projects
import PostIndex from './views/posts/index/PostIndex';

// NewPost allows the user to create a new project
import NewPost from './views/posts/new/NewPost';

// About serves as a static info page
import About from './views/static/About';

// ProfileSettings allows users to manage their profile
import ProfileSettings from "./views/user/ProfileSettings";

// NavigationUpper serves as the main nav-bar which is always present
import NavigationUpper from "./components/navigation/NavigationUpper";

// ShowPost shows an individual project
import ShowPost from "./views/posts/show/ShowPost"

// ShowProfile shows a users public profile
import ShowProfile from "./views/user/ShowProfile";

// GettingStarted is the landing page for new users
import GettingStarted from './views/welcome/GettingStarted';

// NotFound is the 404 landing page and base condition route
import NotFound from "./views/static/errors/NotFound";
import HomeLanding from "./views/landing/HomeLanding";


// NOTE make ShowPost and ShowProfile routes: /post/:id and /user/:id

function App() {
  return (
      <Router>
        <div className="App">

            <NavigationUpper />

            <Switch>

                <Route exact path={'/home'} component={HomeLanding}/>
                <Route exact path={'/'} component={PostIndex} />
                <Route exact path={'/posts/new'} component={NewPost} />
                <Route exact path={'/about'} component={About} />
                <Route exact path={'/profile/settings'} component={ProfileSettings}/>
                <Route exact path={'/show/post/:id'} component={ShowPost} />
                <Route exact path={'/show/userprofile/:id'} component={ShowProfile} />
                <Route exact path={'/welcome'} component={GettingStarted}/>

                <Route component={NotFound}/>

            </Switch>

            <div className={'content-spacer'}/>

        </div>
      </Router>
  );
}

export default App;


