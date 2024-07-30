import React, {memo} from 'react';
import {StyledBox, StyledLink} from "./Navbar.styles";
import TypographyBlock from "../../common/typography_block/typographyblock";
import {MenuItem} from "@mui/material";
import {SubMenuSectionDefaultProps, SubMenuSectionPropTypes} from "./Navbar.propTypes";

function SubMenuSection(props) {
    const {
        items,
        color,
        subMenu
    } = props;
    return (
        <StyledBox sx={{px:3,borderColor:color.borderColor,backgroundColor:color.backgroundColor}}>
            <StyledBox sx={{flexDirection:'row'}}>
                <StyledBox paddingX={1}>
                    {
                        items.icon && items.icon
                    }
                </StyledBox>
                <StyledBox sx={{flexDirection:'column'}}>
                    <StyledLink href={items.key} >
                        <TypographyBlock
                            headerChildren={items.label}
                            headerColor={color.textColor}
                            headerVariant="h6"
                        />
                    </StyledLink>
                    {
                        subMenu && subMenu.map((sectionItem,subIndex)=>{
                            return (
                                // <MenuItem key={subIndex}>
                                    <StyledLink href={sectionItem.key} key={subIndex}>
                                        <TypographyBlock
                                            headerChildren={sectionItem.label}
                                            headerColor={color.textColor}
                                            headerVariant="caption"
                                        />
                                    </StyledLink>
                                // </MenuItem>
                            )
                        })
                    }
                </StyledBox>
            </StyledBox>
        </StyledBox>
    );
}

SubMenuSection.propTypes = {
    ...SubMenuSectionPropTypes
}
SubMenuSection.defaultPros = {
    ...SubMenuSectionDefaultProps
}

export default memo(SubMenuSection);