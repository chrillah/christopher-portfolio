import { useEffect, useState } from 'react'
import { storage } from '../firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { Link } from 'react-router-dom'
function Hemma() {
    const [imageList, setImageList] = useState<string[]>([])
    const imageListTjuvgods = ref(storage, 'images/tjuvgods/')
    const imageListEyes = ref(storage, 'images/eyes/')
    const imageListGomoku = ref(storage, 'images/gomoku/')
    const imageListKwitter = ref(storage, 'images/kwitter/')
    const imageListRickAndMorty = ref(storage, 'images/rickandmorty/')
    const imageListSweet = ref(storage, 'images/sweet/')
    const imageListTechware = ref(storage, 'images/techware/')

    useEffect(() => {
        setImageList([])
        listAll(imageListTjuvgods).then((resp) => {
            resp.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })

        listAll(imageListEyes).then((resp) => {
            resp.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })

        listAll(imageListGomoku).then((resp) => {
            resp.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })

        listAll(imageListKwitter).then((resp) => {
            resp.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })

        listAll(imageListRickAndMorty).then((resp) => {
            resp.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })

        listAll(imageListSweet).then((resp) => {
            resp.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })

        listAll(imageListTechware).then((resp) => {
            resp.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])
    return (
        <div>
            <Link to="/">HOME</Link>
            <div>
                {imageList.map((url, index) => (
                    <img key={index} src={url} alt="bilder" />
                ))}
            </div>
        </div>
    )
}

export default Hemma
