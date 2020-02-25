import React from 'react';
import './App.scss';

//import SessionManager from "./authentication/SessionManager";
//import ValidationTest from "./authentication/ValidationTest";

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import PostIndex from './views/posts/index/PostIndex';
import NewPost from './views/posts/new/NewPost';
import About from './views/static/About';
import ProfileSettings from "./views/user/ProfileSettings";
import NavigationUpper from "./components/navigation/NavigationUpper";
import ShowPost from "./views/posts/show/ShowPost"
import ShowProfile from "./views/user/ShowProfile";
import GettingStarted from './views/welcome/GettingStarted';
import NotFound from "./views/static/errors/NotFound";

function App() {
  return (
      <Router>
        <div className="App">

            <NavigationUpper />

            <Switch>

                <Route exact path="/" component={PostIndex} />
                <Route exact path="/posts/new" component={NewPost} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile/settings" component={ProfileSettings}/>
                <Route exact path="/show/post/:id" component={ShowPost} />
                <Route exact path="/show/userprofile/:id" component={ShowProfile} />
                <Route exact path={'/welcome'} component={GettingStarted}/>

                <Route component={NotFound}/>

            </Switch>

            <div className={'content-spacer'}/>

        </div>
      </Router>
  );
}

export default App;


