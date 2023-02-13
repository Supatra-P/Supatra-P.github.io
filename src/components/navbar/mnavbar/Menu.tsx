import * as React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { SidebarData } from '../../../assets/data/SidebarData';
import './Menubar.css';


const variants = {
  show: {
    opacity: 1
  },
  hide: {
    opacity: 0
  }
}

interface IMenuProps {
  toggle: any;
  isOpen: boolean;
}

export const Menu = ({ toggle, isOpen }: IMenuProps) => {
  return (
    <div>
      <nav className='flex-col'>
        <div className='flex-row'>
          <p style={{ paddingLeft: "10vw" }}>TU<br />SF</p>
          <p style={{ textAlign: 'start', paddingLeft: "10vw" }}>Supatra<br />Pinjinda</p>
        </div>
        <div className='flex-col gap8 fixed bl'>
          <ul className='flex-col gap5p5'>
            {SidebarData.map((menu, key) => {
              return <li className='m-font-dec'>
                {(key > 0) ?
                  <motion.li
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                  >
                    <Link to={menu.link} onClick={toggle}>{menu.name}</Link>
                  </motion.li>
                  : null}
              </li>;
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
