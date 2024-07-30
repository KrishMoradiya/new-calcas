import React from 'react';
import {Box} from "@mui/material";
import Button from "../../common/button/button";
import TypographyBlock from "../../common/typography_block/typographyblock";
import {StyledBox} from "../navbar/Navbar.styles";

export const ClaimExtraComponent = ()=>{
    return (
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
    );
}
