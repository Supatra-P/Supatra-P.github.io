import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import scholar_engr_cer from "../assets/img/scholar_engr_cer.png";
import { MenuBar } from "../components/navbar/mnavbar/MenuBar";
import { Content, Desc, SubContentBox } from "./About";
import { HeadTitle } from "../components/HeadTitle";
import { PrevsBtn } from "../components/PrevsBtn";

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

export function Certificate() {
  return (
    // <div className='motionContent'>
    //   <SwitchPages>
    //     <MenuBar />
    //   </SwitchPages>
    //   <ContentBox className="flex-c-c">
    //     <div className='flex-row flex-c-c' style={{ paddingLeft: '15vw' }}>
    //       <div style={{ paddingLeft: '4vw' }}>

    //       </div>
    //       <img width={400} style={{ borderRadius: '18px' }} src={scholar_engr_cer} alt="Supatra profile picture" />
    //     </div>
    //   </ContentBox>
    // </div>
    <ContentBox className="flex-c-c">
      <div className="motionContent">
        <SubContentBox>
          <HeadTitle title="Certificate" />
          <Content>
            <Desc>
              <br />
              <h3>Certificate of Attendance</h3>
              ー Top 5 GPA
              <br />
              <br />
              <img
                width={"100%"}
                style={{ borderRadius: "18px" }}
                src={scholar_engr_cer}
                alt="Certificate of Attendance"
              />
              <br />
              Major of Software Engineering
              <br />
              <b>
                Faculty of Engineering, 
                Thammasat&nbsp;University
              </b>
            </Desc>
          </Content>
        </SubContentBox>
      </div>
      <PrevsBtn />
    </ContentBox>
  );
}
