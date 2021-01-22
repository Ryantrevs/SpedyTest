import React, { Component } from 'react';
import { Route } from 'react-router';
import { Body } from './components/cardBody/Body';
import Navbar from './components/navbar/Index'
import {Provider} from 'react-redux'
import {Store} from './Store/index'
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <main>
        <Navbar/>
        <Provider store={Store}>
          <Body/>
        </Provider>
      </main>
    );
  }
}
