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
                className="w-32 h-32 rounded-full"
            />
            <h3 className='my-4 text-2xl font-medium tracking-wider'>
                <span className='font-pressstart2p'>Ashwin Chandran</span>
            </h3>
            <p className='px-2 py-1 bg-gray-200 rounded-full'>
                Web Developer
            </p>
            <a 
                className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' 
                href='' download='name'>
                <GiTie className='w-6 h-6'/>Download Resume
            </a>

            {/* social icon */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
                <a href="">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href="">
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href="">
                    <DiStackoverflow className='w-8 h-8 cursor-pointer'/>
                </a>
            </div>
            {/* address */}
            <div className='py-4 my-5 bg-gray-200' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Ernakulam, India</span>
                </div>
                <p className='my-2'>ashwinchandran13@gmail.com</p>
                <p className='my-2'>stack overflow link</p>
            </div>
            {/* Email button */}
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400'>Email Me</button>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400'>Toggle Theme</button>
        </div>
    )
}

export default Sidebar;
