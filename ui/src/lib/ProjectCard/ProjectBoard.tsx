import { ProjectBoardTypes } from "./ProjectBoardTypes"

const ProjectBoard = ({ children }: ProjectBoardTypes) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProjectBoard