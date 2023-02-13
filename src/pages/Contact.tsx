import * as React from 'react';
import { motion } from 'framer-motion';
import { itemUp } from '../components/Animation';
import { HeadTitle } from '../components/HeadTitle';
import { ContactBtn } from '../components/contact/ContactBtn';
import { SubContentBox } from './About';
import { ContentBox } from './Home';
import { PrevsBtn } from '../components/PrevsBtn';

export interface IContactProps {
}

export function Contact(props: IContactProps) {
  return (
    <ContentBox>
      <motion.div
        variants={itemUp}
        initial="hidden"
        animate="visible"
      >
          <div style={{ paddingLeft: '10vw' }}>
            <HeadTitle title='Contact' />
          </div>
          <div className='flex-c-c' style={{ paddingTop: '25vw' }}>
            <ContactBtn />
          </div>
      </motion.div>
      <PrevsBtn />
    </ContentBox>
  );
}
