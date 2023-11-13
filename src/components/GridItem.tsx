import React, { useState, useEffect } from 'react'
import { StorageReference, listAll, getDownloadURL } from 'firebase/storage'
import { useNavigate  } from 'react-router-dom';

interface GridItemProps {
    imagesRef: StorageReference
}

const GridItem: React.FC<GridItemProps> = ({ imagesRef }) => {
    // let selectedProject: string = ''
    const [imageList, setImageList] = useState<string[]>([])
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const navigate = useNavigate();
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const resp = await listAll(imagesRef)
                const urls = await Promise.all(
                    resp.items.map(async (item) => await getDownloadURL(item))
                )
                setImageList(urls)
            } catch (error) {
                console.error('Error loading images:', error)
            }
        }

        fetchImages()
    }, [imagesRef])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % imageList.length
            )
        }, 4000)

        return () => clearInterval(intervalId)
    }, [imageList])

    const onFilteredListRef = async (urlParts: string[]) => {
        for (const project of listOfProjects) {
            const filteredArray = urlParts.filter((item) =>
                item.includes(project)
            )
            if (filteredArray.length > 0) {
                console.log(`Filtered parts for ${project}:`, filteredArray)
                return project
            }
        }
        return ''
    }

    const listOfProjects = [
        'tjuvgods',
        'kwitter',
        'techware',
        'rickandmorty',
        'sweet',
        'eyes',
        'gomoku'
    ]

    const navigateToProject = async () => {
       const selectedProject = await onFilteredListRef(imageList)
       navigate(`/project/${selectedProject}`);
        // window.location.href = `/project/${selectedProject}`;
    }

    return (
        <button
        onClick={navigateToProject}
            className="grid-item"
        >
            {imageList.length > 0 && (
                <div
                    style={{
                        backgroundImage: `url(${imageList[currentImageIndex]})`,
                        height: '100%',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                    className="project-image-container"
                ></div>
            )}
        </button>
    )
}

export default GridItem
