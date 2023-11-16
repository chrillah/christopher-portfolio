import { Link, useParams } from 'react-router-dom'
import { StorageReference } from '@firebase/storage'
import PictureContainer from '../components/PictureContainer'
import imageListRefs from '../ImageListRefs'
import myProjects from '../myProjects'
import { useEffect, useState } from 'react'

interface ProjectData {
    name: string
    description: string
    linkToWeb: string | null
    linkToGitHub: string
    technology: string[]
}

const ProjectItem = () => {
    const { project } = useParams<{ project: string | '' }>()
    const [projectData, setProjectData] = useState<ProjectData | null>(null)
    const [projectRef, setProjectRef] = useState<StorageReference | undefined>()

    useEffect(() => {
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

        let foundProjectRef: StorageReference | undefined = undefined

        if (project) {
            foundProjectRef = findReferenceByPath(project)
            setProjectRef(foundProjectRef)
        }

        const matchingProjectEntry = Object.entries(myProjects).find(
            ([key]) => key === project
        )

        if (matchingProjectEntry) {
            setProjectData(matchingProjectEntry[1])
        } else {
            console.log('Inget matchande projekt hittades.')
        }
    }, [project])

    return (
        <div className="project-item-wrapper">
            <div className="project-container">
                <Link
                    to={'/projects'}
                    className="back-button"
                    onClick={() => console.log('back')}
                >
                    <div className="rev">
                        <div className="caret"></div>
                    </div>
                    <p>Back</p>
                </Link>
                {projectRef && (
                    <PictureContainer imagesReference={projectRef} />
                )}
                <div className="project-info-wrapper">
                    {projectData ? (
                        <>
                            <div className="project-info-container-1">
                                <p className="project-name">
                                    {projectData.name}
                                </p>
                                <p className="project-description">
                                    {projectData.description}
                                </p>
                                {projectData.linkToWeb ? (
                                    <>
                                        <a
                                            className="link-to-button"
                                            target="blanc"
                                            href={projectData.linkToWeb}
                                        >
                                            To webpage
                                            <div className="no-rotate">
                                                <div className="caret"></div>
                                            </div>
                                        </a>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="project-info-container-2">
                                <p className="technology-header">
                                    Technologies and Languages
                                </p>
                                <div className="technology-list">
                                    {projectData.technology.map(
                                        (index, key) => (
                                            <p key={key}>{index}</p>
                                        )
                                    )}
                                </div>
                                <a
                                    className="link-to-button"
                                    target="blanc"
                                    href={projectData.linkToGitHub}
                                >
                                    GitHub
                                    <div className="no-rotate">
                                        <div className="caret"></div>
                                    </div>
                                </a>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
