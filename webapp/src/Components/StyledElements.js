import { AppBar, Box, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import styled from '@emotion/styled'

export const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifycontent: "space-between",
    alignItems: "center",
    backgroundColor: "#36558F",
})
export const StyledNavMenu = styled(Box)({
    textAlign: "center",
    margin: "auto",
    paddingRight: "170px",
})
export const StyledMenuItem = styled(Typography)({
    margin: "auto",
    padding: "1rem",
    display: "box",
    borderBlock: "solid",
})
export const StyledAppBar = styled(AppBar)({
    height: "80px",
    display: "flex",
    justifycontent: "center",
    alignitems: "center",
    position: "sticky",
    backgroundColor: "#36558F"
})
export const HeroBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
        m: 1,
        width: 1500,
        height: 1800,
        textAlign: 'center',
        mx: 'auto',
    },
    minHeight: "1200px",
})
export const HeroGridLeft = styled(Box)({
    backgroundColor: "#F96E46"
})

export const HeroGridRight = styled(Box)({
    backgroundColor: "#8EB8E5"
})