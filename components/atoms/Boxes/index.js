import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    width: ${props => props.boxWidth || "104px"};
    height: ${props => props.boxHeight || "104px"};
    background-color: #FFF;
    box-shadow: 0px 5px 16px rgba(130, 130, 130, 0.16);
    border-radius: 8px;
`;

export default function Boxes(props) {
    console.log('height ==>', props.boxHeight);
    console.log('width ==>', props.boxWidth);
    return <Box boxWidth={props.boxWidth} boxHeight={props.boxHeight}/>;
} 