import React, {memo} from 'react';
import {StyledBox, StyledLink} from "./Navbar.styles";
import {ExpandMore,ExpandLess} from "@mui/icons-material"
import {Typography} from "@mui/material";
import {NavbarLinksDefaultProps, NavbarLinksPropTypes} from "./Navbar.propTypes";

const NavbarLinks = (props) => {
    const {
        menuOpen,
        handleMenuOpen,
        navLinkItem,
        isSelected,
        handleMenuClose
    } = props;

    const handleExpandClick = (e) => {
        e.preventDefault(); // prevent the link from navigating
        handleMenuOpen(e, navLinkItem, navLinkItem.label);
    };
    return (
        <>
            <StyledBox>
                <StyledLink
                    href={navLinkItem.key || '/'}
                    id={navLinkItem.label}
                    aria-controls={menuOpen ? 'navbar-menu-card' : undefined}
                    aria-haspopup="true"
                    aria-expanded={menuOpen ? 'true' : undefined}
                    onMouseEnter = {(e)=>handleMenuOpen(e,navLinkItem,navLinkItem.label)}
                >
                    <Typography color='secondary' variant='subtitle2' fontFamily='Raleway' sx={{display:'flex',alignItems:'center',fontSize:{xs:0,sm:12,md:15}}}>
                        {navLinkItem.label}
                    </Typography>
                </StyledLink>
            </StyledBox>
            <StyledBox>
                {isSelected ? <ExpandLess color='secondary' onClick={handleMenuClose}/>:<ExpandMore color='secondary' onClick={handleExpandClick} />}
            </StyledBox>
        </>
    );
}

NavbarLinks.propTypes = {
    ...NavbarLinksPropTypes
}
NavbarLinks.defaultProps = {
    ...NavbarLinksDefaultProps
}
export default memo(NavbarLinks);