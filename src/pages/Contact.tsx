import * as React from 'react';
import { HeadTitle } from '../components/HeadTitle';
import { ContactBtn } from '../components/contact/ContactBtn';
import { ContentBox } from './Home';
import { PrevsBtn } from '../components/PrevsBtn';

export function Contact() {
  return (
    <ContentBox>
      <div className='motionContent'>
          <div style={{ paddingLeft: '10vw' }}>
            <HeadTitle title='Contact' />
          </div>
          <div className='flex-c-c' style={{ paddingTop: '25vw' }}>
            <ContactBtn />
          </div>
      </div>
      <PrevsBtn />
    </ContentBox>
  );
}
