import { useEffect, useState } from 'react';
import { getDownloadURL, listAll, StorageReference } from 'firebase/storage';

interface ImageListProps {
  imagesReference: StorageReference;
}

const PictureContainer: React.FC<ImageListProps> = ({ imagesReference }) => {
  const [imageURLs, setImageURLs] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const resp = await listAll(imagesReference);
        const urls = await Promise.all(
          resp.items.map(async (itemRef) => await getDownloadURL(itemRef))
        );
        setImageURLs(urls);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    fetchImages();
  }, [imagesReference]);

  return (
    <div className='image-wrapper'>
      {imageURLs.length > 0 ? (
        <div className='image-container'>
          {imageURLs.map((url, index) => (
            <img key={index} src={url} alt={`Image ${index}`} />
          ))}
        </div>
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
};

export default PictureContainer;
