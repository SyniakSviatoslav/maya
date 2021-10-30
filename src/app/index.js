import React from 'react';
import Layout from './core/layout';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import AboutComponent from './pages/about';
import CollectionComponent from './pages/collection';
import SignInComponent from './pages/sign-in';
import HomeComponent from './pages/home';
import PublishComponent from './pages/publish';
import { collectionPath, publishPath, aboutPath, signInPath, homePath } from './constants';


const AppComponent = () => {
  return (
    <Layout>
      <Switch>
        <Route path={collectionPath}>
          <CollectionComponent />
        </Route>
        <Route path={aboutPath}>
          <AboutComponent />
        </Route>
        <Route path={publishPath}>
          <PublishComponent />
        </Route>
        <Route path={signInPath}>
          <SignInComponent />
        </Route>
        <Route path={homePath}>
          <HomeComponent />
        </Route>
      </Switch>
    </Layout>
  );
}

export default AppComponent;
