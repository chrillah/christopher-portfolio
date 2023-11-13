import { storage } from '../firebase'
import { ref, StorageReference } from 'firebase/storage'

import GridItem from '../components/GridItem'

function ProjectPage() {
    // fixa en json-fil med projektuppgifter

    // koppla json-fil med rätt imageListRef

    // objekt istället för lista/array
    const imageListRefs: StorageReference[] | null = [
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
                    {imageListRefs ? (
                        imageListRefs.map((imagesRef, key) => (
                            <GridItem key={key} imagesRef={imagesRef} />
                        ))
                    ) : (
                        <span className="loader"></span>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProjectPage
