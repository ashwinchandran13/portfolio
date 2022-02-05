import profilePic from '../public/assets/profile-pic.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiStackoverflow } from 'react-icons/di';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Sidebar = () => {

    const { theme, setTheme } = useTheme();
    
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div>
            <Image 
                src={profilePic.src}
                alt='user avatar'
                className="object-cover mx-auto rounded-lg"
                translate="yes"
                height="128"
                width="128"
                layout="intrinsic"
                quality="100"
            />
            <h3 className='my-4 font-medium tracking-wider select-none text-2 xl font-pressstart2p hover:text-black hover:bg-white'>
                <span className='text-green hover:text-purple-800'>Ashwin </span>Chandran
            </h3>
            <p className='px-2 py-1 bg-gray-200 rounded-full select-none dark:bg-dark-200 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white'>
                I Slam Keyboards (Developer)
            </p>
            <a 
                className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white' 
                href='/assets/ashwin-resume.pdf' download='ashwin-resume.pdf'>
                <GiTie className='w-6 h-6'/>Download Resume
            </a>

            {/* social icon */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <motion.a whileHover={{scale: 1.1}} href="https://www.linkedin.com/in/ashwin-chandran-65274815b/"  aria-label='linkedin'>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://github.com/ashwinchandran13" aria-label='github'>
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://stackoverflow.com/users/13185675/ashwin-chandran" aria-label='stackoverflow'>
                    <DiStackoverflow className='w-8 h-8 cursor-pointer'/>
                </motion.a>
            </div>
            {/* address */}
            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:text-white' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Ernakulam, India</span>
                </div>
                <p className='my-2'>ashwinchandran13@gmail.com</p>
            </div>
            {/* Email button */}
            <motion.button whileHover={{scale: 1.05}} className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
            onClick={() => window.open('mailto:ashwinchandran13@gmail.com')}>
                Email Me
            </motion.button>
            <motion.button whileHover={{scale: 1.05}} className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
                onClick={changeTheme}
            >Toggle Theme</motion.button>
        </div>
    )
}

export default Sidebar;
