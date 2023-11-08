import { useEffect, useState } from 'react'
import { storage } from '../firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { Link } from 'react-router-dom'

function PictureContainer() {
    const [imageList, setImageList] = useState<string[]>([])
    const imageListRef = ref(storage, 'images/')

    useEffect(() => {
        setImageList([])
        listAll(imageListRef).then((resp) => {
            resp.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])
    return (
        <div>
            <h1>Portfolio</h1>
            <Link to="/">HOME</Link>
            <div className="list-container">
                {imageList.map((url, index) => (
                    <img key={index} src={url} alt="bilder" />
                ))}
            </div>
        </div>
    )
}

export default PictureContainer
