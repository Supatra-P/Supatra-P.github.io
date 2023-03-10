import * as React from 'react';
import { Gallery } from '../components/portfolio/Gallery';
import styled from 'styled-components';
import { PrevsBtn } from '../components/PrevsBtn';

const Content = styled.div`
  display: flex;
  padding: 10vw 0 10vw 36vw;

  @media (max-width: 786px) {
    padding: 10vw 10vw 30vw 10vw;
  }
`;

export function Portfolio() {
  return (
    <div>
      <div className='motionContent'>
        <Content>
          <Gallery />
        </Content>
      </div>
      <PrevsBtn />
    </div>

  );
}
