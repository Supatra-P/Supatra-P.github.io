import * as React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import gimchi from '../assets/img/gimchi.jpg';
import { motion } from "framer-motion"
import { itemUp } from "../components/Animation";
import { MenuBar } from "../components/navbar/mnavbar/MenuBar";

export const SwitchPages = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ContentBox = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 10vw;

  @media (max-width: 786px) {
    padding: 10vw 0;
  }
`;

export const ContentBoxHome = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 10vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MyName = styled.p`
  font-size: xx-large;
`;

const Edu = styled.p`
  padding: 10px 0 30px 0;
  font-size: large;
  line-height: 1.6rem;
`;

const LetsBtn = styled.span`
  font-size: large;
  text-decoration: underline;

  :hover {
    color: var(--dBlue);
    text-decoration: none;
  }
`;


export function Home() {
  return (
    <div className='motionContent'>
      <SwitchPages>
        <MenuBar />
      </SwitchPages>
      <ContentBoxHome className="flex-c-c">
        <div className='flex-row flex-c-c' style={{ paddingLeft: '15vw' }}>
          <img width={250} style={{ borderRadius: '18px' }} src={gimchi} alt="Supatra profile picture" />
          <div style={{ paddingLeft: '4vw' }}>
            <MyName>SUPATRA PINJINDA</MyName>
            <Edu>Software Engineering<br />
              at Thammasat University</Edu>
            <Link to="/about">
              &#x3E;&nbsp;
              <LetsBtn>
                Get Started
              </LetsBtn>
            </Link>
          </div>
        </div>
      </ContentBoxHome>
    </div>
  );
}
