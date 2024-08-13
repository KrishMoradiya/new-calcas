import React from 'react';
import {Box} from "@mui/material";
import Button from "../../common/button/button";
import TypographyBlock from "../../common/typography_block/typographyblock";
import {StyledBox, StyledLink} from "../navbar/Navbar.styles";
import {LocalShipping} from "@mui/icons-material";

export const ClaimExtraComponent = ()=>{
    return (
        <StyledBox>
            <StyledBox sx={{flexDirection:'column'}}>
                <StyledBox>
                    <Button
                        endIcon={null}
                        onClick={() => {}}
                        onFocus={() => {}}
                        onMouseOver={() => {}}
                        startIcon={null}
                    >
                        Button
                    </Button>
                </StyledBox>
                <StyledBox>
                        <TypographyBlock
                            paragraphChildren="Non-Customer claims"
                            paragraphColor="#00305E"
                            paragraphFontFamily="Raleway"
                            paragraphVariant="subtitle2"
                        />
                    </StyledBox>
            </StyledBox>
            <StyledBox sx={{px:3,flexDirection:'column'}}>
                <StyledBox sx={{flexDirection:'row'}}>
                    <StyledBox paddingX={1}>
                        <LocalShipping color='primary' size='small' />
                    </StyledBox>
                    <StyledBox sx={{flexDirection:'column'}}>
                            <StyledLink href='/' >
                                <TypographyBlock
                                    headerChildren="Roadside Assistance"
                                    headerColor='primary'
                                    headerVariant="h6"
                                />
                            </StyledLink>
                            <TypographyBlock
                                paragraphChildren="Call 1.800.331.7350"
                                paragraphColor='primary'
                                paragraphVariant="caption"
                            />
                    </StyledBox>
                </StyledBox>
                <StyledBox sx={{flexDirection:'row',mt:3}}>
                    <StyledBox paddingX={1}>
                        <LocalShipping color='primary' size='small' />
                    </StyledBox>
                    <StyledBox sx={{flexDirection:'column'}}>
                            <StyledLink href='/' >
                                <TypographyBlock
                                    headerChildren="Glass Claims"
                                    headerColor='primary'
                                    headerVariant="h6"
                                />
                            </StyledLink>
                            <Button
                                endIcon={null}
                                onClick={() => {}}
                                onFocus={() => {}}
                                onMouseOver={() => {}}
                                startIcon={null}
                            >
                                Button
                            </Button>
                    </StyledBox>
                </StyledBox>
            </StyledBox>
        </StyledBox>
    );
}
