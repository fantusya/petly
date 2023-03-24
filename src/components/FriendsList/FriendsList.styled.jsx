import styled from "styled-components";

export const ListFriends = styled.ul`
    display: flex;
    flex-wrap: wrap;

    a {
        display: block;
    }
`

export const ItemFriend = styled.li`
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[2]}px;
    margin-right: ${p => p.theme.space[5]}px;
    &:nth-child(3n) {
        margin-right: 0;
    }
    margin-bottom: ${p => p.theme.space[5]}px;
    &:nth-last-child(${p => p.resultsLength % 3}) {
        margin-bottom: 0;
    }
    width: calc((100% / 3) - (${p => p.theme.space[5]}px * 2 / 3));
    
    justify-content: center;

    border-radius: ${p => p.theme.radii.big};

    background-color: ${p => p.theme.colors.white};
`

export const ItemFriendBox = styled.div`
    display: flex;
`

export const ItemFriendName = styled.a`
    text-align: center;

    color: ${p => p.theme.colors.accent};

    font-size: ${p => p.theme.fontSizes[4]};
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.text};
    letter-spacing: ${p => p.theme.letterSpacing.text};
`