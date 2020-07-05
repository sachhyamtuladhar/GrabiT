import React, {Component} from 'react';

import {  Route, Switch } from 'react-router-dom'


import Layout from './hoc/Layout';
import HeaderSection from './components/HeaderSection/HeaderSection';
import Login from './containers/Login'
import Home from './containers/Home'
import SignUp from './containers/SignUp'
import Buy from './containers/Buy'
import Sell from './containers/Sell'
import NotFound from './containers/NotFound';


import 'bootstrap/dist/css/bootstrap.css';
import './App.scss'




class App extends Component {
  // componentDidMount(){
  //   window.addEventListener("scroll", (e)=>{
  //     let hs = document.querySelector('#headerSection')
  //     if(window.scrollY > (hs.offsetHeight - 120) )
  //       this.setState({
  //         showNavBar: true
  //       })
  //     else
  //       this.setState({
  //         showNavBar: false
  //       })
  //   });
  // }

  render(){
    return (
     
          <div className="App" >
            <Layout>
              <HeaderSection />
              <Switch>
                  <Route path="/login" exact component={Login}/>
                  <Route path="/buy" exact component={Buy} />
                  <Route path="/sell" exact component={Sell} />
                  <Route path="/register" exact component={SignUp} />
                  <Route path="/" exact component={Home} />
                  <Route path="/" component={NotFound} />
              </Switch>
            </Layout>
          </div>
        
    );

  }
}

export default App;
