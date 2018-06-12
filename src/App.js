import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux';
import { BrowserRouter } from 'react-router-dom';
import Navigation from 'components/navigation';
import AppBodyContainer from 'containers/app_body_container';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppComponent />
        </BrowserRouter>
      </Provider>
    );
  }
}

function AppComponent() {
  return (
    <div className='app'>
      <Navigation />
      <AppBodyContainer />
    </div>
  );
}
