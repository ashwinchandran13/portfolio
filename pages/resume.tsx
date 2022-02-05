import Bar from "../components/bar"
import { languages, tools } from "../data"
import { fadeInUp, routeAnimation } from "../animations"

import { motion } from "framer-motion"
import Head from 'next/head';

const Resume = () => {

    return (
        <motion.div className="px-6 py-2" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
            {/* education and exp */}

            <Head>
                <title>
                    Web Developer | Resume
                </title>
            </Head>
            
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-blod">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Computer Science Engineering</h5>
                        <p className="font-semibold">University College of Engineering(August 2016 - December 2020)</p>
                        <p className="my-3">Completed my <b>B.Tech</b> in Computer Science Engineering</p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-blod">Experience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
                        <p className="font-semibold">Neoito (December 2020 - )</p>
                        <p className="my-3">Working in projects involving tech like React, AWS</p>
                    </div>
                </motion.div>
            </div>

            {/* languages and tools */}

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">

                        {
                            languages.map((language) => <Bar data={language} key={language.name}/>)
                        }

                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
                    <div className="my-2">

                        {
                            tools.map((tool) => <Bar data={tool} key={tool.name}/>)
                        }

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume
