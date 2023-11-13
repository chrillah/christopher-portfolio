import { storage } from '../firebase'
import { ref, StorageReference } from 'firebase/storage'

import GridItem from '../components/GridItem'

function ProjectPage() {
    const imageListRefs: StorageReference[] = [
        ref(storage, 'images/tjuvgods/'),
        ref(storage, 'images/eyes/'),
        ref(storage, 'images/gomoku/'),
        ref(storage, 'images/kwitter/'),
        ref(storage, 'images/rickandmorty/'),
        ref(storage, 'images/sweet/'),
        ref(storage, 'images/techware/')
    ]

    return (
        <>
            <div className="grid-wrapper">
                <div className="grid-container">
                    {imageListRefs.map((imagesRef, key) => (
                        <GridItem key={key} imagesRef={imagesRef} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectPage
