import { RiComputerLine } from 'react-icons/ri'; 
import { IService, ISkill } from './type';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';
 
export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title: 'Frontend Dev',
        about: 
            'Using <b> HTML</b>, <b> CSS</b> and <b> React.js</b> to build scalable SPA'
    },
    {
        Icon: FaServer,
        title: 'Backend Dev',
        about: 
            '<b>Express</b>, <b>Fastify</b> and other frameworks to handle database, server, api'
    },
    {
        Icon: MdDeveloperMode,
        title: 'Open Source love',
        about: 
            'Love to contribute to <i>open source<i> projects whenever I could'
    },
    {
        Icon: AiOutlineAntDesign,
        title: 'UI/UX Desiger',
        about: 
            'User interface design using <b>Figma</b>'
    },
    {
        Icon: RiComputerLine,
        title: 'Any Tech',
        about: 
            'Love to dive into any tech and challenges associated with it'
    },
    
]

export const languages:ISkill[] = [
    {
        name: 'C++',
        level: '40%',
        Icon: BsCircleFill
    },
    {
        name: 'Java Script',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'React',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Java',
        level: '40%',
        Icon: BsCircleFill
    }
]

export const tools:ISkill[] = [
    {
        name: 'Figma',
        level: '40%',
        Icon: BsCircleFill
    },
    {
        name: 'Docker',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'UE5',
        level: '30%',
        Icon: BsCircleFill
    }
]