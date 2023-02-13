import { Link } from 'react-router-dom';
import logo from '../../assets/img/LogoSP.svg';
import './mnavbar/Menubar.css';

export function Logo() {
    return (
        <div>
            <span>
                <Link to="/"><img src={logo} alt="Supatra Pinjinda Logo" /></Link>
            </span>
        </div>
    );
}

export function LogoMB() {
    return (
        <div className='fixed tr showMB'><Logo /></div>
    );
}