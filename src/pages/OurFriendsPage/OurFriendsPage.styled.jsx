import styled from "styled-components";

export const FriendsTitle = styled.h1`
    margin-top: 100px;
    margin-bottom: 28px;

    text-align: center;

    font-size: ${p => p.theme.fontSizes[5]};
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.text};
    letter-spacing: ${p => p.theme.letterSpacing.text};

    @media (min-width: ${p => p.theme.breakpoints[1]}) {
        margin-top: 160px;
        margin-bottom: 40px;

        font-size: ${p => p.theme.fontSizes[9]};
    };

    @media (min-width: ${p => p.theme.breakpoints[2]}) {
        margin-top: 129px;
        margin-bottom: 60px;
    };
`