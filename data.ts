import { RiComputerLine } from 'react-icons/ri'; 
import { IService } from './type';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';

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