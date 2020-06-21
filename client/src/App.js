import React, {Component} from 'react';

import {  Route } from 'react-router-dom'


import Login from './containers/Login'
import Home from './containers/Home'
import SignUp from './containers/SignUp'

import 'bootstrap/dist/css/bootstrap.css';
import Layout from './hoc/Layout';


import {loadUser} from './store/actions/authActions'
import HeaderSection from './components/HeaderSection/HeaderSection';



class App extends Component {




  render(){
    return (
     
          <div className="App" >
            <Layout>
              <HeaderSection />
              <Route path="/login" exact component={Login}/>
              <Route path="/register" exact component={SignUp} />
              <Route path="/" exact component={Home} />
            </Layout>
          </div>
        
    );

  }
}

export default App;
