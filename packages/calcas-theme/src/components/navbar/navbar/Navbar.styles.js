import React from "react";
import {alpha, AppBar, Box, Container, Link, Menu, Toolbar} from "@mui/material";
import {styled} from "@mui/material/styles";

export const StyledBox = styled(Box)(({paddingX,paddingY,justifyContent,alignItems,width,height,display})=>({
    display : display !== undefined
        ? (typeof display === 'string' ? display : {...display})
        : 'flex',

    flexDirection: "row",
    pointerEvents:'auto',
    px: paddingX || 'auto',
    py: paddingY || 'auto',
    justifyContent: justifyContent || 'auto',
    alignItems: alignItems || 'auto',
    width : width !== undefined
        ? (typeof width === 'string' ? width : {...width})
        : 'auto',
    height: height || 'auto'
}))
export const StyledContainer = styled(Container)(({})=>({
    margin:0,
    padding:'0px !important',
    maxWidth:'none !important'
}));
export const StyledAppBar = styled(AppBar)(({})=>({
    position:'static',
    boxShadow:'none',
    padding: '15px 0',
}));
export const StyledToolbar = styled(Toolbar)(({})=>({
    minHeight:'0px !important',
    maxHeight:'max-content',
    display:'block'
}));
export const StyledLink = styled(Link)(({})=>({
    textDecoration:'none !important'
}));


export const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        {...props}
    />
))(({ theme }) => ({
    disableScrolling:true,
    disableScrollLock:true,
    pointerEvents:'none',
    '& .MuiPopover-paper':{
        maxHeight:'none',
        right:'40px',
        left:'auto !important',
        marginLeft:'40px',
    },
    '& .MuiPaper-root': {
        borderRadius: '16px',
        minWidth: 180,
        backgroundColor: '#F4F7FB',
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));