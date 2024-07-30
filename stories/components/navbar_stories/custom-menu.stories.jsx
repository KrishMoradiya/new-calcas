import React from 'react';
import CustomMenu from '../../../packages/calcas-theme/src/components/navbar/navbar/CustomMenu';
import items from '../../../packages/calcas-theme/src/components/navbar/navbar-data/menu-item';

export default {
    title: 'Components/CustomMenu',
    component: CustomMenu,
    tags: ['autodocs'],
    args: {
        menuOpen:true,
        handleMenuClose : (e)=>{
            console.log("Handle menu close called")
        },
        selectedMenu : "",
        anchorEl : <a></a>,
        navSectionItem:items[0]
    }
};
export const Primary = {}