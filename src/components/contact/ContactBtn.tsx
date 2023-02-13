import { ContactData } from '../../assets/data/ContactData';
import './Contactbtn.css';
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import styled from 'styled-components';

const ContactBar = styled.ul`
    display: flex;
    gap: 1.1vw;

    @media (max-width: 786px) {
        flex-direction: column;
        gap: 8vw;
    }
`;

export function ContactBtn() {
    return (
        <div>
            <ContactBar>
                {ContactData.map((btn, key) => {
                    return (
                        <li>
                            <a className='ccircle flex-c-c' href={btn.link} target="_blank" rel="noopener noreferrer" >
                                {
                                    (key == 0) ? <FaLinkedinIn size={20} />
                                        : (key == 1) ? <AiOutlineGithub size={24} />
                                            : (key == 2) ? <HiOutlineMail size={24} />
                                                : <HiOutlineLocationMarker size={24} />
                                }
                            </a>
                        </li>
                    );
                })}
            </ContactBar>
        </div>
    );
}
