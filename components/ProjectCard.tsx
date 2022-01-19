import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";

const ProjectCard: FunctionComponent<{
    project: IProject;
}> = ({
    project: {
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs
    }
}) => {

        const [showDetail, setShowDetail] = useState(false);

        return (
            <div>
                <img src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetail(true)}/>
                <p className="my-2 text-center">{name}</p>

                {showDetail &&

                    <div className="grid md:grid-cols-2">

                        <div>
                            <img src={image_path} alt={name} />
                            <div>
                                <a href={github_url}>
                                    <AiFillGithub /><span>Github</span>
                                </a>
                                <a href={deployed_url}>
                                    <AiFillProject /><span>Project</span>
                                </a>
                            </div>

                        </div>

                        <div>
                            <h2>{name}</h2>
                            <h3>{description}</h3>
                            <div>
                                {
                                    key_techs.map(tech => <span key={tech}>
                                        {tech}
                                    </span>)
                                }
                            </div>
                        </div>

                        <button>
                            <MdClose size={30} onClick={() => setShowDetail(false)}/>
                        </button>

                    </div>
                }

            </div>
        );
    };

export default ProjectCard;
