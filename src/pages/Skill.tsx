import * as React from 'react';
import styled from 'styled-components';
import { HeadTitle } from '../components/HeadTitle';
import { EtcData, OsData, ProgLanData } from '../assets/data/SkillData';
import { SkillDecor } from '../components/skill/SkillDecor';
import { SubTitle } from '../components/TextDecor';
import { ContentBox } from './Home';
import { SubContentBox } from './About';
import { PrevsBtn } from '../components/PrevsBtn';

export function Skill() {
  return (
    <ContentBox className="flex-c-c">
      <div className='motionContent'>
        <SubContentBox>
          <HeadTitle title='Skill' />
          <div className='flex-col'>
            <SubTitle>Programming Languages</SubTitle>
            <SkillDecor skill={ProgLanData} start={0} stop={5} />
            <br />
            <SkillDecor skill={ProgLanData} start={5} stop={ProgLanData.length} />
            <br />
            <SubTitle>Framework - Library - Database - Version Control</SubTitle>
            <SkillDecor skill={EtcData} start={0} stop={5} />
            <br/>
            <SkillDecor skill={EtcData} start={5} stop={10} />
            <br />
            <SubTitle>Operating Systems</SubTitle>
            <SkillDecor skill={OsData} start={0} stop={5} />
          </div>
        </SubContentBox>
      </div>
      <PrevsBtn />
    </ContentBox>
  );
}
