import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

import * as actionCreators from '../../../store/actions/authActions'


import styles from './Navbar.module.scss'
import Logo from '../../Logo/Logo';

class Example extends Component {
  state = {
    isOpen: false
  }
  
  componentDidMount(){
    this.props.onLoadUser()
  }

  toggle = () => {
    this.setState (state=>{ 
      return  {
        isOpen: !state.isOpen
      }
    })
  }

  render(){
    
    const classes = [styles.Navbar, 'px-0']

    // if(props.sticky)
    classes.push(styles.sticky)

    if(this.props.showNav)
      classes.push(styles.isVisible)


    let navText =
      (<NavbarText>
        <NavLink activeClassName={styles.active} 
          to='/login'
        >
          Login
        </NavLink>
        <NavLink activeClassName={styles.active} 
          to='/register'
        >
          Signup
        </NavLink>
      </NavbarText> )

      if(this.props.user)
        navText =
          (<NavbarText>
            <ul className={styles.userDropdown}>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <h5 className="d-inline mr-2">Welcome {this.props.user.name}!</h5>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.props.onLogout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ul> 
          </NavbarText>) 


    return (
      <div>
        <Navbar sticky="top" className={classes.join(' ')}  expand="md">
          <NavbarBrand href="/"><Logo /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} style={{color: 'white'}}>
            &#9776;
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink activeClassName={styles.active} to="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName={styles.active} to="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            {navText}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return{
      user: state.auth.user,
      showNav: state.ui.showNavbar
  }
}


const mapDispatchtoProps = dispatch => {
  return {
      onLoadUser: () => dispatch(actionCreators.loadUser()),
      onLogout: () => dispatch(actionCreators.logOut()),
  }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Example);