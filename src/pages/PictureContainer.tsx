import { StorageReference, listAll, getDownloadURL } from 'firebase/storage'
import { useState, useEffect } from 'react'

interface PictureProps {
    imagesRef: StorageReference
    project: string
}

const PictureContainer: React.FC<PictureProps> = ({ imagesRef, project }) => {
    const [imageListRef, setImageListRef] = useState<string[] | ''>([]);

    useEffect(() => {
        const fetchAllImages = async () => {
            try {
                const resp = await listAll(imagesRef)
                const urls = await Promise.all(
                    resp.items.map(async (item) => await getDownloadURL(item))
                )
                const projectImageListRef = await onFilteredListRef(urls, project)
                console.log(projectImageListRef)
                setImageListRef(projectImageListRef)
            } catch (error) {
                console.error('Error loading images:', error)
            }
        }

        fetchAllImages()
    }, [imagesRef])

    const onFilteredListRef = async (urlParts: string[], project: string) => {
        const filteredArray = urlParts.filter((item) => item.includes(project))
        if (filteredArray.length > 0) {
            console.log(`IN PICTURE CONTAINER ${project}:`, filteredArray)
            return filteredArray
        }
        return ''
    }

    return <div>{imageListRef ? <p>Ej tom</p> : <>{imageListRef}</>}</div>
}

export default PictureContainer
