import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Supatra from '../Supatra.png';
import { itemUp } from '../components/Animation';
import { HeadTitle } from '../components/HeadTitle';
import { ContentBox } from './Home';
import { PrevsBtn } from '../components/PrevsBtn';

const ResmBox = styled.div`
    width: calc(100vw/7);
    height: calc(100vw/7);
    background-color: var(--pBlue);
    border-radius: 18px;
    padding: .8vw;
    text-align: end;
    color: #000;
    font-size: 1vw;
    letter-spacing: 2px;

    &:hover {
        background-color: var(--dBlue);
    }

    @media (max-width: 786px) {
        margin-top: 15vw;
        width: 40vw;
        height: 40vw;
        font-size: 3vw;
        padding-right: 6vw;
    }
`;

export const SubContentBox = styled.div`
    padding-left: 15vw;

    @media (max-width: 786px) {
        padding: 10vw;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 786px) {
        flex-direction: column;
    }
`;

const Desc = styled.p`
    width: 30vw;
    padding-right: 2vw;
    line-height: 1.6rem;

    @media (max-width: 786px) {
        width: auto;
    }
`;

export function About() {
    return (
        <ContentBox className="flex-c-c">
            <motion.div
                variants={itemUp}
                initial="hidden"
                animate="visible"
            >
                <SubContentBox>
                    <HeadTitle title='About' />
                    <Content>
                        <Desc>
                            I am constantly interested in improving my&nbsp;technical skills so that I can create beautiful web applications and mobile applications, and I want to be a full-stack developer in the future. I enjoy taking on challenges and learning new things, which makes me enthusiastic about&nbsp;my work.
                        </Desc>
                        <a href={Supatra} target="_blank" rel="noreferrer">
                            <ResmBox>
                                <div style={{ height: "calc(100vw/18)" }}></div>
                                <p>Here's my</p>
                                <a href={Supatra} target="_blank" rel="noreferrer"><b>RESUME</b></a>
                                <p>ー Feb 2023</p>
                            </ResmBox>
                        </a>
                    </Content>
                </SubContentBox>
            </motion.div>
            <PrevsBtn />
        </ContentBox>
    );
}
