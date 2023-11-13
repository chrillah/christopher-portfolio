import { Link, useParams } from 'react-router-dom';
import ImageListRefs from '../ImageListRefs';

const ProjectItem = () =>{
    const { project } = useParams<{ project: string }>();
    return (
        <div className="project-item-wrapper">
            <div className="project-container">
                <Link to={'/projects'}
                    className="back-button"
                    onClick={() => console.log('back')}
                >
                    <div className="caret rev"></div>
                    {project}
                </Link>
            </div>
        </div>
    )
}

        // <>
        //     {isSelected ? (
        //         <div className="project-item-wrapper">
        //             <div className="project-container">
        //                 <button
        //                     className="back-button"
        //                     onClick={() => setIsSelected(false)}
        //                 >
        //                     <div className="caret rev"></div>
        //                     Back
        //                 </button>
        //             </div>
        //         </div>
        //     ) : (
        //         <button
        //             onClick={() => {
        //                 onFilteredListRef(imageList)
        //                 setIsSelected(true)
        //             }}
        //             className="grid-item"
        //         >
        //             {imageList.length > 0 && (
        //                 <div
        //                     style={{
        //                         backgroundImage: `url(${imageList[currentImageIndex]})`,
        //                         height: '100%',
        //                         backgroundPosition: 'center',
        //                         backgroundSize: 'cover'
        //                     }}
        //                     className="project-image-container"
        //                 ></div>
        //             )}
        //         </button>
        //     )}
        // </>

export default ProjectItem
