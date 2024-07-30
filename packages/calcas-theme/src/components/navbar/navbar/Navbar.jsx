import React, {useCallback, useState} from 'react';
import {ImageListItem,Button as MuiButton} from "@mui/material";
import {StyledAppBar, StyledBox, StyledContainer, StyledLink, StyledToolbar} from "./Navbar.styles";
import {Person} from "@mui/icons-material";
import TypographyBlock from "../../common/typography_block/typographyblock";
import NavbarLinks from "./NavbarLinks";
import CustomMenu from "./CustomMenu";
import {NavbarDefaultProps, NavbarPropTypes, UserMenuDefaultProps, UserMenuPropTypes} from "./Navbar.propTypes";
// import logo from "../../../assets/images/logo.jpg"



const Navbar = (props) => {
    const {
        items
    } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState("");
    const [navItem, setNavItem] = useState({});

    const open = Boolean(anchorEl);

    const handleClick = useCallback((event,navItem,selectedMenu) => {
        setAnchorEl(event.currentTarget);
        setSelectedMenu(selectedMenu);
        setNavItem(navItem);
    },[]);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
        setSelectedMenu("")
        setNavItem({})
    },[]);

    return (
        <>
            <StyledContainer>
                <StyledAppBar color='text' >
                    <StyledToolbar>
                        <StyledBox justifyContent='space-between' alignItems='center'>
                            <StyledBox width={{ md:'20%',sm:'20%',xs:'80%'}} height='100%' display={{xs:'flex',sm:'flex',md:'flex'}}>
                                <CalcasLogo />
                            </StyledBox>
                            <StyledBox width={{ md:'80%',sm:'70%',xs:'0%'}} display={{xs:'none',sm:'flex',md:'flex'}} alignItems='center' justifyContent='flex-end'>
                                    <StyledBox onMouseEnter={handleClose}  sx={{paddingX:{xs:0,sm:0.5,md:1.5}}}>
                                        <MuiButton variant='contained' color='primary' sx={{fontSize:{xs:0,sm:10,md:15}, fontFamily:'Raleway' }}>
                                            Get a quote
                                        </MuiButton>
                                    </StyledBox>
                                    {
                                        items && items.map((navItem,index)=>{
                                            return (
                                                <StyledBox key={index} alignItems='center' sx={{paddingX:{xs:0,sm:0.5,md:1.5}}}>
                                                    <NavbarLinks menuOpen={open}
                                                        handleMenuOpen={(event)=>handleClick(event,navItem,navItem.label)}
                                                        handleMenuClose={handleClose}
                                                        navLinkItem={navItem}
                                                        isSelected={(selectedMenu===navItem.label)?true:false} />
                                                </StyledBox>
                                            )
                                        })
                                    }
                                    <UserMenu handleMenuClose={()=>{handleClose()}} />
                            </StyledBox>
                        </StyledBox>
                    </StyledToolbar>
                    <CustomMenu
                        handleMenuClose={handleClose}
                        selectedMenu={selectedMenu}
                        anchorEl={anchorEl}
                        menuOpen={open}
                        navSectionItem={navItem}
                    />
                </StyledAppBar>
            </StyledContainer>
        </>
    );
};

export const UserMenu = ({handleMenuClose})=>{
    return (
            <StyledBox onMouseEnter={handleMenuClose} paddingX={1.5}>
                <Person color='primary' fontSize='small' />
                <StyledLink href='/my-account'>
                    <TypographyBlock
                        paragraphChildren="My Account"
                        paragraphColor="text.secondary"
                        paragraphVariant="subtitle2"
                        paragraphFontFamily='Raleway'
                        sx={{fontSize:{xs:0,sm:12,md:15}}}
                    />
                </StyledLink>
            </StyledBox>
    )
}

export const CalcasLogo = () => {
    return (
        <>
            <ImageListItem key={0}>
                <img
                    src="../../../assets/images/logo.jpg"
                    alt="Calcas logo"
                />
            </ImageListItem>
        </>
    )
}

Navbar.propTypes = {
    ...NavbarPropTypes
};
Navbar.defaultProps = {
    ...NavbarDefaultProps
}
UserMenu.propTypes = {
    ...UserMenuPropTypes
}
UserMenu.defaultProps = {
    ...UserMenuDefaultProps
}

export default Navbar;


