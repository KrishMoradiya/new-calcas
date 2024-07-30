import React from 'react';
import MenuBox from '../../../packages/calcas-theme/src/components/navbar/navbar/MenuBox';
import items from '../../../packages/calcas-theme/src/components/navbar/navbar-data/menu-item';

export default {
    title: 'Components/MenuBox',
    component: MenuBox,
    tags: ['autodocs'],
    args: {
        navSectionItem: items[0]
    }
};
export const Claims = {
    args: {
        navSectionItem: items[1]
    }
}