import React, {memo} from 'react';
import {StyledBox, StyledLink} from "./Navbar.styles";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TypographyBlock from "../../common/typography_block/typographyblock";
import Home from "@mui/icons-material/Home";
import {MenuBoxDefaultProps, MenuBoxPropTypes, NavbarDefaultProps, NavbarPropTypes} from "./Navbar.propTypes";
import Navbar from "./Navbar";
import SubMenuSection from "./SubMenuSection";

const MenuBox = (props) => {

    const {
        navSectionItem
    } = props;

    return (
        <StyledBox paddingX={3} paddingY={4} sx={{flexWrap:'wrap'}}>
            {
                navSectionItem
                && navSectionItem.children
                && navSectionItem.children.map((section,index)=>{
                    return section.label ? (
                        <SubMenuSection key={index} items={section}
                                        color={
                                            {
                                                backgroundColor:'transparent',
                                                textColor:'primary',
                                                borderColor:'transparent'
                                            }
                                        }
                                        subMenu={section.children} />
                    ) : (
                        section.otherExtraComponents.map((otherComponent,subIndex)=>{
                            return (
                                <StyledBox sx={{px:3,pt:1.5}} key={subIndex}>
                                    {otherComponent.Component}
                                </StyledBox>
                            )
                        })
                    )
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