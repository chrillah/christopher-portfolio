import ImageListRefs from '../ImageListRefs'
import GridItem from '../components/GridItem'

function ProjectPage() {
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
