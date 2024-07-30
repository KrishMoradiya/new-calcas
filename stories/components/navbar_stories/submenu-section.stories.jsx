import React from 'react';
import SubMenuSection from '../../../packages/calcas-theme/src/components/navbar/navbar/SubMenuSection';
import items from '../../../packages/calcas-theme/src/components/navbar/navbar-data/menu-item';

export default {
    title: 'Components/SubMenuSection',
    component: SubMenuSection,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: {
                type: 'object',
                properties: {
                    backgroundColor: {
                        control: {
                            type: 'select',
                            options: ['transparent', 'yellow', 'pink']
                        }
                    },
                    textColor: {
                        control: {
                            type: 'select',
                            options: ['primary', 'secondary', 'text']
                        }
                    },
                    borderColor: {
                        control: {
                            type: 'select',
                            options: ['transparent', 'yellow', 'pink']
                        }
                    }
                }
            }
        }
    },
    args: {
        items : items[0],
        subMenu: items[0]["children"][0]["children"],
        color: {
            backgroundColor: 'transparent',
            borderColor: 'yellow',
            textColor: 'primary'
        }
    }
};
export const Primary = {}