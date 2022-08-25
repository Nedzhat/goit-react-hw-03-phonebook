import styled from "styled-components";



export const BtnForm = styled.button`
margin-top: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[4]}px;
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.dimGray};
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.white};
`;