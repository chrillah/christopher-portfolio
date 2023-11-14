import { Link, useParams } from 'react-router-dom'
import { StorageReference } from '@firebase/storage'
import PictureContainer from './PictureContainer'
import imageListRefs from '../ImageListRefs'
import myProjects from './myProjects'
import { useState } from 'react'

interface ProjectData {
    name: string;
    description: string;
    linkToWeb: string | null;
    linkToGitHub: string;
    technology: string[];
  }

const ProjectItem = () => {
    const { project } = useParams<{ project: string | '' }>()

    const [projectInfo, setProjectInfo] = useState({});



    function findReferenceByPath(
        searchPath: string
    ): StorageReference | undefined {
        if (imageListRefs) {
            return imageListRefs.find((ref) =>
                ref.fullPath.includes(searchPath)
            )
        }
        return undefined
    }

    let projectRef: StorageReference | undefined = undefined

    if (project) {
        projectRef = findReferenceByPath(project)
        // if (projectRef) {
        //     console.log('Found reference:', projectRef)
        // } else {
        //     console.log('Reference not found')
        // }
    }

    const matchingProjectEntry = Object.entries(myProjects).find(
        ([key]) => key === project
      );

      const projectsToRender: Record<string, ProjectData> = matchingProjectEntry
        ? { [matchingProjectEntry[0]]: matchingProjectEntry[1] }
        : {};

      if (Object.keys(projectsToRender).length > 0) {
        const [projectKey, projectData] = Object.entries(projectsToRender)[0];
        console.log(`${projectData.name}`);
        console.log(`${projectData.description}`);
        console.log(`${projectData.linkToWeb}`);
        console.log(`${projectData.linkToGitHub}`);
        console.log(`${projectData.technology}`);
      } else {
        console.log('Inget matchande projekt hittades.');
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
                {projectRef && <PictureContainer imagesReference={projectRef} />}
            </div>
        </div>
    )
}

export default ProjectItem
