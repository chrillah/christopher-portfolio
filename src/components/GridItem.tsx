import React, { useState, useEffect } from 'react'
import { StorageReference, listAll, getDownloadURL } from 'firebase/storage'

interface GridItemProps {
    imagesRef: StorageReference
}

const GridItem: React.FC<GridItemProps> = ({ imagesRef }) => {
    const [isSelected, setIsSelected] = useState(false)

    // skapa en div om täcker hela skärmen + overfow: auto

    // lägg till knapp som förstorar projektet

    // knapp som förminskar projektet
    const listOfProjects = [
        'tjuvgods',
        'kwitter',
        'techware',
        'rick',
        'sweet',
        'eyes',
        'gomoku'
    ]
    const [imageList, setImageList] = useState<string[]>([])
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

    const onFilteredListRef = (urlParts: string[]) => {
        listOfProjects.forEach((project) => {
            const filteredArray = urlParts.filter((item) =>
                item.includes(project)
            )
            if (filteredArray.length > 0) {
                console.log(`Filtered parts for ${project}:`, filteredArray)
            }
        })
    }

    return (
        <>
            {isSelected ? (
                <div className="project-item">
                    <button
                        className="back-button"
                        onClick={() => setIsSelected(false)}
                    >
                        <div className="caret rev"></div>
                        Back
                    </button>
                    <div className="project-container"></div>
                </div>
            ) : (
                <button
                    onClick={() => {
                        onFilteredListRef(imageList)
                        setIsSelected(true)
                    }}
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
            )}
        </>
    )
}

export default GridItem
