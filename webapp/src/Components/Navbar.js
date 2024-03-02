import {Typography } from '@mui/material'
import React from 'react'
import {StyledAppBar, StyledMenuItem, StyledNavMenu, StyledToolBar} from './StyledElements'

const NavBar = () => {
  return (
        <StyledToolBar>
            <Typography variant='h6'>
                Logan's Website
            </Typography>
            <StyledNavMenu>
            <StyledMenuItem variant='h8' component="a" href="/about" noWrap>About</StyledMenuItem>
            <StyledMenuItem variant='h8' component="a" href="/projects">Projects</StyledMenuItem>
            <StyledMenuItem variant='h8' component="a" href="/bloghome">Blog</StyledMenuItem>
            <StyledMenuItem variant='h8' component="a" href="/resume">Resume</StyledMenuItem>
            </StyledNavMenu>
        </StyledToolBar>
  )
}

export default NavBar