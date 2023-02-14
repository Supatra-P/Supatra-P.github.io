import * as React from 'react';
import { SideMenu } from './SideMenu';
import './Sidebar.css';
import { motion } from 'framer-motion';

export function SideBar() {
  return (
    <div className='Sidebar'>
      <SideMenu />
    </div>
  );
}
