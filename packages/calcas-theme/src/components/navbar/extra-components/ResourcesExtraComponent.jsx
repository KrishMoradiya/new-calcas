import React from 'react';
import {StyledBox, StyledLink} from "../navbar/Navbar.styles";
import {LocalShipping, Plagiarism, Thunderstorm} from "@mui/icons-material";
import TypographyBlock from "../../common/typography_block/typographyblock";

function ResourcesExtraComponent(props) {
    return (
        <StyledBox sx={{px:3,flexDirection:'column'}}>
            <StyledBox sx={{flexDirection:'row'}}>
                <StyledBox paddingX={1}>
                    <Thunderstorm color='primary' size='small' />
                </StyledBox>
                <StyledBox sx={{flexDirection:'column'}}>
                    <StyledLink href='/' >
                        <TypographyBlock
                            paragraphChildren="Visit the Catastrophe Center"
                            paragraphColor='primary'
                            paragraphVariant="subtitle2"
                        />
                    </StyledLink>
                </StyledBox>
            </StyledBox>
            <StyledBox sx={{flexDirection:'row'}}>
                <StyledBox paddingX={1}>
                    <Plagiarism color='primary' size='small' />
                </StyledBox>
                <StyledBox sx={{flexDirection:'column'}}>
                    <StyledLink href='/' >
                        <TypographyBlock
                            paragraphChildren="Visit our Blog Archive"
                            paragraphColor='primary'
                            paragraphVariant="subtitle2"
                        />
                    </StyledLink>
                </StyledBox>
            </StyledBox>
        </StyledBox>
    );
}

export default ResourcesExtraComponent;