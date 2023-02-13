import { useState } from 'react';
import { Menu } from './Menu';
import './Menubar.css';

export function MenuBar () {
  const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };
  return (
    <div className='Menubar'>
      <Menu toggle={toggleMenu} isOpen={isOpen} />
    </div>
  );
}
