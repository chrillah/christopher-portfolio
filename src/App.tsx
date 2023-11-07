import { useEffect, useState } from 'react'
import './App.css'
import { storage } from './firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

function App(): JSX.Element {
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
        <>
            <h1>Portfolio</h1>
            <div className="list-container">
                {imageList.map((url, index) => (
                    <img key={index} src={url} alt="bilder" />
                ))}
            </div>
        </>
    )
}

export default App
