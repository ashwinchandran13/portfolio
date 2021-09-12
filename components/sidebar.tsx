import profilePic from '../Assets/profile-pic.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiStackoverflow } from 'react-icons/di';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

const Sidebar = () => {
    
    return (
        <div>
            <img 
                src={profilePic.src}
                alt='user avatar'
            />
            <h3>Ashwin Chandran</h3>
            <p>Web Developer</p>
            <p><GiTie className='w-6 h-6'/>Download Resume</p>

            {/* social icon */}
            <div>
                <a href="">
                    <AiFillLinkedin className='w-8 h-8'/>
                </a>
                <a href="">
                    <AiFillGithub className='w-8 h-8'/>
                </a>
                <a href="">
                    <DiStackoverflow className='w-8 h-8'/>
                </a>
            </div>
            {/* address */}
            <div>
                <div>
                    <GoLocation />
                    <span>Ernakulam, India</span>
                </div>
                <p>ashwinchandran13@gmail.com</p>
                <p>stack overflow link</p>
            </div>
            {/* Email button */}
            <button>Email Me</button>
            <button>Toggle Theme</button>
        </div>
    )
}

export default Sidebar;
