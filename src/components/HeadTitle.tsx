import * as React from 'react';
import { FC } from 'react';
import { Miniline, Title } from './TextDecor';

export interface IHeadTitleProps {
    title: string;
}

export const HeadTitle: FC<IHeadTitleProps> = ({title}) => {
    return (
        <div>
            <Title>{title}</Title>
            <Miniline />
        </div>
    );
}
