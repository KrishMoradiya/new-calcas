import React, {memo, useEffect, useLayoutEffect, useState} from 'react';
import {StyledBox, StyledLink} from "./Navbar.styles";
import {MenuBoxDefaultProps, MenuBoxPropTypes, NavbarDefaultProps, NavbarPropTypes} from "./Navbar.propTypes";
import SubMenuSection from "./SubMenuSection";
import {ClaimExtraComponent} from ".././extra-components/ClaimExtraComponent";
import {Button} from "@mui/material"
import ResourcesExtraComponent from "../extra-components/ResourcesExtraComponent";

const MenuBox = (props) => {

    const {
        navSectionItem
    } = props;
    const otherComponents = {
        "Insurance":
            {
                Component:null
            },
        "Claims":
            {
                Component:<ClaimExtraComponent />
            },
        "Customer Care":{
            Component: <StyledBox sx={{alignItems:'center',justifyItems:'center'}}>
                <Button
                    variant="contained"
                    color='primary'
                    sx={{height:'fit-content'}}
                >
                    Button
                </Button>
            </StyledBox>
        },
        "Resources":
            {
                Component:<ResourcesExtraComponent />
            },
    }
    console.log("Nav Section Item is: ",navSectionItem)

    return (
        <StyledBox paddingX={3} paddingY={4} sx={{flexWrap:'wrap'}}>
            {
                navSectionItem
                && navSectionItem.child_items
                && navSectionItem.child_items.map((section,index)=>{
                    return (section.ID !== undefined) ?
                         <SubMenuSection key={index} items={section}
                                               color={
                                                   {
                                                       bgColor:'transparent',
                                                       textColor:'primary',
                                                       borderColor:'transparent'
                                                   }
                                               }
                                               subMenu={section.child_items} />
                    :
                        otherComponents[navSectionItem.title].Component
                        /*section.otherExtraComponents.map((otherComponent,subIndex)=>{
                            return <ExtraComponent Component={otherComponent.Component} subIndex={subIndex} />
                        })*/
                })
            }
        </StyledBox>
    );
}

MenuBox.propTypes = {
    ...MenuBoxPropTypes
};
MenuBox.defaultProps = {
    ...MenuBoxDefaultProps
}
// export default memo(MenuBox);
export default MenuBox;