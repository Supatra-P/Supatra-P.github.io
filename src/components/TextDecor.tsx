import * as React from 'react';
import styled from 'styled-components';

export const Title = styled.p`
    font-size: xx-large;
`;

export const Miniline = styled.div`
    margin: 30px 0;
    width: 40px;
    height: 3px;
    background-color: var(--dBlue);
`;

export const SubTitle = styled.p`
    line-height: 3rem;

     @media (max-width: 786px) {
        line-height: 1.5rem;
        padding-bottom: 3.5vw;
    }
`;