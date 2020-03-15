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
import NewProject from './views/user/dashboard/project/new/NewProject';

// About serves as a static info page
import About from './views/static/About';

// ProfileSettings allows users to manage their profile
import ProfileSettings from "./views/user/profile/ProfileSettings";

// NavigationUpper serves as the main nav-bar which is always present
import NavigationUpper from "./components/navigation/NavigationUpper";

// ShowPost shows an individual project
import ShowPost from "./views/posts/show/ShowPost"

// ShowProfile shows a users public profile
import ShowProfile from "./views/user/profile/ShowProfile";

// GettingStarted is the landing page for new users
import GettingStarted from './views/welcome/GettingStarted';

// NotFound is the 404 landing page and base condition route
import NotFound from "./views/static/errors/NotFound";

import Pricing from "./views/static/Pricing";
import Tutorial from "./views/static/Tutorial";
import Home from "./views/static/Home";
import MainDash from "./views/user/dashboard/MainDash";
import Settings from "./views/user/Settings";
import Billing from "./views/user/payments/Billing";
import Help from "./views/user/Help";
import ProjectDash from "./views/user/dashboard/project/ProjectDash";
import NewTest from "./views/user/dashboard/project/NewTest";
//import HomeLanding from "./views/static/home-old/HomeLanding";


// NOTE make ShowPost and ShowProfile routes: /post/:id and /user/:id

function App() {
  return (
      <Router>
        <div className="App">

            <NavigationUpper />

            <Switch>

                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/pricing'} component={Pricing}/>
                <Route exact path={'/about'} component={About}/>
                <Route exact path={'/tutorial'} component={Tutorial}/>
                <Route exact path={'/about'} component={About}/>

                <Route exact path={'/explore'} component={PostIndex}/>
                <Route exact path={'/post/:id'} component={ShowPost}/>

                <Route exact path={'/dashboard'} component={MainDash}/>
                <Route exact path={'/posts/new'} component={NewProject}/>
                <Route exact path={'/project'} component={ProjectDash}/>
                <Route exact path={'/test/new'} component={NewTest}/>

                <Route exact path={'/profile'} component={ShowProfile}/>
                <Route exact path={'/billing'} component={Billing}/>
                <Route exact path={'/settings'} component={Settings}/>
                <Route exact path={'/help'} component={Help}/>

                <Route exact path={'/welcome'} component={GettingStarted}/>

                <Route component={NotFound}/>

            </Switch>

            <div className={'content-spacer'}/>

        </div>
      </Router>
  );
}

export default App;


