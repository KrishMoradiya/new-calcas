import React, {memo, useEffect,useLayoutEffect} from 'react';
import {StyledBox, StyledLink} from "./Navbar.styles";
import TypographyBlock from "../../common/typography_block/typographyblock";
import {SubMenuSectionDefaultProps, SubMenuSectionPropTypes} from "./Navbar.propTypes";
import {DashboardCustomize, DirectionsCar, Home, Info, SupportAgent} from "@mui/icons-material";

function SubMenuSection(props) {
    const {
        items,
        color,
        subMenu
    } = props;

    // const iconDetails = {
    //     "Auto" : <DirectionsCar color='primary' size='small' />,
    //     "Property" : <Home color='primary' size='small' />,
    //     "More" : <DashboardCustomize color='primary' size='small' />,
    //     "About Us": <Info color='primary' size='small' />,
    //     "Customer Care":<SupportAgent color='primary' size='small' />
    // }
    // useLayoutEffect(() => {
    //     if(iconDetails[items.title]){
    //         items.icon = iconDetails[items.title]
    //     }
    // }, []);

    return (
        <StyledBox sx={{px:3,borderColor:color.borderColor,backgroundColor:color.bgColor}}>
            <StyledBox sx={{flexDirection:'row'}}>
                <StyledBox paddingX={1}>
                    {
                        items.icon && items.icon
                    }
                </StyledBox>
                <StyledBox sx={{flexDirection:'column'}}>
                    {
                        items.title &&
                        <StyledLink href={items.url} >
                            <TypographyBlock
                                headerChildren={items.title}
                                headerColor={color.textColor}
                                headerVariant="h6"
                            />
                        </StyledLink>
                    }
                    {
                        subMenu && subMenu.map((sectionItem,subIndex)=>{
                            return (
                                // <MenuItem key={subIndex}>
                                    <StyledLink href={sectionItem.url} key={sectionItem.ID}>
                                        <TypographyBlock
                                            paragraphChildren={sectionItem.title}
                                            paragraphColor={color.textColor}
                                            paragraphVariant="caption"
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