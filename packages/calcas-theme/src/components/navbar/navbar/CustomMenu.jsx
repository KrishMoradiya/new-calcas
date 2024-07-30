import React, {memo} from 'react';
import {StyledMenu} from "./Navbar.styles";
import MenuBox from "./MenuBox";
import {CustomMenuDefaultProps, CustomMenuPropTypes} from "./Navbar.propTypes";

const CustomMenu = (props) => {

    const {
        handleMenuClose,
        selectedMenu,
        anchorEl,
        menuOpen,
        navSectionItem,
    } = props;

    return (
        <StyledMenu
            id="navbar-menu-card"
            MenuListProps={{
                'aria-labelledby': selectedMenu,
                // onMouseLeave:handleMenuClose
            }}
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            sx={{mt:{sm:7,md:1,xs:'none'}}}
        >
            <MenuBox navSectionItem={navSectionItem} />
        </StyledMenu>
    );
}

CustomMenu.propTypes = {
    ...CustomMenuPropTypes
}
CustomMenu.defaultProps = {
    ...CustomMenuDefaultProps
}
export default memo(CustomMenu);