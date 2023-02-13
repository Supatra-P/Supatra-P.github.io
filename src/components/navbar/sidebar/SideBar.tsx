import * as React from 'react';
import { SideMenu } from './SideMenu';
import './Sidebar.css';
import { motion } from 'framer-motion';

export function SideBar() {
  return (
    <motion.div className='Sidebar'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <SideMenu />
    </motion.div>
  );
}
