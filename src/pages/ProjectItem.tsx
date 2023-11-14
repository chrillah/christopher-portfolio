import { Link, useParams } from 'react-router-dom';
import { StorageReference } from '@firebase/storage';
import PictureContainer from './PictureContainer';
import imageListRefs from '../ImageListRefs';

const ProjectItem = () => {
  const { project } = useParams<{ project: string | '' }>();

  function findReferenceByPath(searchPath: string): StorageReference | undefined {
    if (imageListRefs) {
      return imageListRefs.find(ref => ref.fullPath.includes(searchPath));
    }
    return undefined;
  }

  let projectRef: StorageReference | undefined = undefined;

  if (project) {
    projectRef = findReferenceByPath(project);
    if (projectRef) {
      console.log('Found reference:', projectRef);
    } else {
      console.log('Reference not found');
    }
  }

  return (
    <div className="project-item-wrapper">
      <div className="project-container">
        <Link
          to={'/projects'}
          className="back-button"
          onClick={() => console.log('back')}
        >
          <div className="caret rev"></div>
          Back to Projects
        </Link>
      </div>
      {projectRef && <PictureContainer imagesReference={projectRef} />}
    </div>
  );
};

export default ProjectItem;
