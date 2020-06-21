import React, { useState } from 'react';
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


import styles from './Navbar.module.scss'
import Logo from '../../Logo/Logo';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const classes = [styles.Navbar, 'px-0']

  // if(props.sticky)
  classes.push(styles.sticky)

  if(props.isVisible)
  classes.push(styles.isVisible)

  return (
    <div>
      <Navbar sticky="top" className={classes.join(' ')}  expand="md">
        <NavbarBrand href="/"><Logo /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
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
          <NavbarText>
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
            </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;