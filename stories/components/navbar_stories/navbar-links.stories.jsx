import React from 'react';
import NavbarLinks from '../../../packages/calcas-theme/src/components/navbar/navbar/NavbarLinks';
import items from '../../../packages/calcas-theme/src/components/navbar/navbar-data/menu-item';

export default {
    title: 'Components/NavbarLinks',
    component: NavbarLinks,
    tags: ['autodocs'],
    args: {
        menuOpen: false,
        handleMenuOpen: (e)=>{
            console.log("Link is Hovered and open menubox");
        },
        handleMenuClose: (e)=>{
            console.log("ExpandLess is clicked and close menubox");
        },
        navLinkItem: items[0],
        isSelected: false
    }
};
export const Primary = {}