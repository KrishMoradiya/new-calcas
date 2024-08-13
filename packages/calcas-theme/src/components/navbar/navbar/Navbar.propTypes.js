import PropTypes from 'prop-types';
import {UserMenu} from "./Navbar";

export const NavbarPropTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
            icon: PropTypes.object,
            children: PropTypes.arrayOf(PropTypes.object)
        })
    ).isRequired
};
export const NavbarDefaultProps = {
    items: [
        {
            label: 'Home',
            key: '/'
        }
    ]
}
export const CustomMenuPropTypes = {
    handleMenuClose: PropTypes.func.isRequired,
    selectedMenu: PropTypes.string,
    anchorEl:PropTypes.any,
    menuOpen:PropTypes.bool.isRequired,
    navSectionItem: PropTypes.object.isRequired
}
export const CustomMenuDefaultProps = {
    handleMenuClose: ()=>{console.log("Default menu close called by CustomMenuDefaultProps")},
    selectedMenu: "",
    menuOpen:false,
    navSectionItem: {}
}
export const MenuBoxPropTypes = {
    navSectionItem : PropTypes.object.isRequired
}
export const MenuBoxDefaultProps = {
    navSectionItem : {}
}
export const SubMenuSectionPropTypes = {
    items : PropTypes.object.isRequired,
    /*color:PropTypes.objectOf(
        PropTypes.shape({
            borderColor:PropTypes.string.isRequired,
            textColor:PropTypes.string.isRequired,
            bgColor:PropTypes.string.isRequired,
        })
    ),*/
    color: PropTypes.object.isRequired,
    subMenu: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    )
}
export const SubMenuSectionDefaultProps = {
    items : {
        label:'Auto',
        key: '/auto',
    },
    color:{
        borderColor:'transparent',
        textColor:'primary',
        bgColor:'transparent',
    },
    subMenu: [
        {
            label:'Auto',
            key:'/auto'
        },
        {
            label:'Motorcycle',
            key:'/motorcycle'
        },
    ]
}
export const NavbarLinksPropTypes = {
    menuOpen:PropTypes.bool.isRequired,
    handleMenuOpen:PropTypes.func.isRequired,
    handleMenuClose:PropTypes.func.isRequired,
    navLinkItem:PropTypes.object,
    isSelected: PropTypes.bool.isRequired
}
export const NavbarLinksDefaultProps = {
    menuOpen: false,
    handleMenuOpen: ()=>{console.log("Default menu open called by NavbarLinksDefaultProps")},
    handleMenuClose: ()=>{console.log("Default menu close called by NavbarLinksDefaultProps")},
    navLinkItem: {},
    isSelected: false
}

export const UserMenuPropTypes = {
    handleMenuClose: PropTypes.func.isRequired,
}
export const UserMenuDefaultProps = {
    handleMenuClose: ()=>{console.log("Default menu close called by UserMenuDefaultProps")},
}