import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from '../../../assets/data/SidebarData';
import './Sidebar.css';
import { ContactBtn } from '../../contact/ContactBtn';
import { Logo } from '../Logo';

export function SideMenu() {
    return (
        <div className='flex-c-c'>
            <nav>
                <div className='flex-col gaph8'>
                    <Logo />
                    <ul className='flex-col gap1p5'>
                        {SidebarData.map((menu, key) => {
                            return <li>{(key < 5) ? <NavLink to={menu.link}>{menu.name}</NavLink> : null}</li>;
                        })}
                    </ul>
                    <ContactBtn />
                </div>
            </nav>
        </div>
    );
}
