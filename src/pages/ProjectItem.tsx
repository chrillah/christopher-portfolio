import { Link, useParams } from 'react-router-dom'
import PictureContainer from './PictureContainer'
import ImageListRefs from '../ImageListRefs'

const ProjectItem = () => {
    const { project } = useParams<{ project: string }>()
    const listOfPorjects = {
        tjuvgods : {
            description : '',
            linkToProject: '',
            linkToGitHub : '',
            listOfTech: [
                ''
            ]
        }
    }


    return (
        <div className="project-item-wrapper">
            <div className="project-container">
                <Link
                    to={'/projects'}
                    className="back-button"
                    onClick={() => console.log('back')}
                >
                    <div className="caret rev"></div>
                    Back to Projects
                </Link>
            </div>
            {ImageListRefs ? (
                        ImageListRefs.map((imagesRef, key) => (
                            <PictureContainer key={key} imagesRef={imagesRef} project={project}/>
                        ))
                    ) : (
                        <span className="loader"></span>
                    )}
        </div>
    )
}

export default ProjectItem
