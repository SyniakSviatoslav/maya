import React from 'react';
import Layout from './core/layout';
import './index.css';
import { Switch, Route} from 'react-router-dom';
import { collectionPath, publishPath, aboutPath, signInPath, homePath } from './constants';


const AppComponent = () => {
  return (
    <Layout>
      <Switch>
        <Route path={collectionPath}>
          Collection
        </Route>
        <Route path={aboutPath}>
          About
        </Route>
        <Route path={publishPath}>
          Publish
        </Route>
        <Route path={signInPath}>
          Sign In
        </Route>
      </Switch>
    </Layout>
  );
}

export default AppComponent;
