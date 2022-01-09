import Bar from "../components/bar"
import { languages, tools } from "../data"

const Resume = () => {
    return (
        <div className="px-6 py-2">
            {/* education and exp */}
            
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-blod">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Computer Science Engineering</h5>
                        <p className="font-semibold">University College o1f Engineering(August 2016 - December 2020)</p>
                        <p className="my-3">Complete my <b>B.Tech</b> in Computer Science Engineering</p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-blod">Experience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
                        <p className="font-semibold">Neoito (December 2020 - )</p>
                        <p className="my-3">Working in projects invaolving tech like React, AWS</p>
                    </div>
                </div>
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
        </div>
    )
}

export default Resume
