import ImageListRefs from '../ImageListRefs'
import GridItem from '../components/GridItem'

function ProjectPage() {
    // fixa en json-fil med projektuppgifter

    // koppla json-fil med rätt imageListRef

    // objekt istället för lista/array

    return (
        <>
            <div className="grid-wrapper">
                <div className="grid-container">
                    {ImageListRefs ? (
                        ImageListRefs.map((imagesRef, key) => (
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
