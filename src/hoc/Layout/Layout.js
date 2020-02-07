import React, { useState } from 'react'
import AuxFile from '../AuxFile'
import { connect } from 'react-redux'

import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)

  const sideDrawerCloseHandler = () => {
    setSideDrawerIsVisible(false)
  }

  const sideDrawerToggleClicked = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible)
  }

  return (
    <AuxFile>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleClicked}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={sideDrawerIsVisible}
        closed={sideDrawerCloseHandler}
      />
      <main className={classes.Content}>{props.children}</main>
    </AuxFile>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout)
