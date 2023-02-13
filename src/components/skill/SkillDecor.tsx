import * as React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

const WhiteBox = styled.div`
    margin-left: 1vw;
    width: calc(100vw/18);
    height: calc(100vw/18);
    background-color: var(--white);
    border-radius: 12px;

    :hover {
        box-shadow: 0px 0px 0px 2px var(--white);
    }
    
    img {
        width: calc(100vw/29);
        height: calc(100vw/29);
    }

    @media (max-width: 768px) {
        padding: 2vw;
        width: calc(100vw/8);
        height: calc(100vw/8);

        img {
            width: calc(100vw/12);
            height: calc(100vw/12);
        }
    }
`;

export interface ISkillDecorProps {
    skill?: any;
    start: number;
    stop: number;
}

export const SkillDecor: FC<ISkillDecorProps> = ({ skill, start, stop }) => {
    return (
        <div className='flex-row gap1p5'>
            {skill.map((logo: { link: string | undefined; icon: string | undefined; name: string | undefined; }, key: number) => {
                return (key >= start && key < stop) ?
                    <a href={logo.link}>
                        <WhiteBox className='flex-c-c'>
                            <img src={logo.icon} alt={logo.name} />
                        </WhiteBox>
                    </a> : null;
            })}
        </div>
    );
}
