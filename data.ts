import { RiComputerLine } from 'react-icons/ri'; 
import { IProject, IService, ISkill } from './type';
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
        name: 'UE4',
        level: '30%',
        Icon: BsCircleFill
    }
]

export const projects:IProject[] = [
    {
        id: 1,
        name: 'Linux Rice',
        description: 'Custom Linux Interface using i3wm',
        image_path: '/images/firstrice.jpeg',
        deployed_url: '',
        github_url: 'https://github.com/ashwinchandran13/firstrice',
        category: ['scripting'],
        key_techs: ['yml', 'shell']
    },
    {
        id: 2,
        name: 'SpaceX Launch Tracker',
        description: 'New launches by SpaceX tracked using Graphql, Nextjs',
        image_path: '/images/spacex-tracker.png',
        deployed_url: '',
        github_url: 'https://github.com/ashwinchandran13/spacex-graphql-next',
        category: ['react'],
        key_techs: ['Graphql', 'Nextjs']
    },
    {
        id: 3,
        name: 'Redis Simple Search',
        description: 'A data entry app to understand the capabilities of using key-value based db using redis-om, redis-search, Nextjs',
        image_path: '/images/simple-search.png',
        deployed_url: '',
        github_url: 'https://github.com/ashwinchandran13/redis-simple-search',
        category: ['react', 'node'],
        key_techs: ['Redis', 'Nextjs', 'React', 'TailwindCss']
    },
    {
        id: 4,
        name: 'Neoito X Matrix ',
        description: 'A landing page created in theme to the movie Matrix for a contest held at Neoito using Nextjs, TailwindCss V3, Framer Motion',
        image_path: '/images/neoitoxmatrix.png',
        deployed_url: 'https://neoitoxmatrix.vercel.app/',
        github_url: 'https://github.com/ashwinchandran13/neoitoxmatrix',
        category: ['react'],
        key_techs: ['Nextjs', 'React', 'TailwindCss', 'Framer Motion']
    }
]