//must be a class component in order to use lifecycle methods to dipatch action that checks server for current user

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import all action and pass them to connect
import * as actions from '../actions';

import Header from './Header';
import SurveyNew from './surveys/SurveyNew'

const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

//since we don't have mapStateToProps, we will pass in null as the first arg.
export default connect(null, actions)(App);
