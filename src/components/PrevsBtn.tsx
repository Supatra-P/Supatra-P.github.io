import { Link } from 'react-router-dom';
import './navbar/mnavbar/Menubar.css';
import './contact/Contactbtn.css';
import { HiArrowSmLeft } from 'react-icons/hi';

export function PrevsBtn() {
    return (
        <div>
            <span>
                <Link to="/" className='ccircle fixed bc flex-c-c showMB'><HiArrowSmLeft size={24} /></Link>
            </span>
        </div>
    );
}