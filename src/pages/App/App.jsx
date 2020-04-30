import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import SearchResults from '../SearchResults/SearchResults';

const App = () => {

    return (
        <Switch>
          <Route exact path='/' render={({ history }) => 
            <HomePage />
          }/>
          <Route exact path='/search/:query' render={({ history }) => 
            <SearchResults />
          }/>
        </Switch>
    )
}

export default App;