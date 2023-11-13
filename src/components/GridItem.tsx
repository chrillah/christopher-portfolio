import React, { useState, useEffect } from 'react';
import { StorageReference, listAll, getDownloadURL } from 'firebase/storage';

interface GridItemProps {
  imagesRef: StorageReference;
}

const GridItem: React.FC<GridItemProps> = ({ imagesRef }) => {
  const [imageList, setImageList] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const resp = await listAll(imagesRef);
        const urls = await Promise.all(
          resp.items.map(async (item) => await getDownloadURL(item))
        );
        setImageList(urls);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    fetchImages();
  }, [imagesRef]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000); // Byter bild var 3:e sekund, ändra behovet

    return () => clearInterval(intervalId);
  }, [imageList]);

  const message = () => {
    console.log(imagesRef);
  };

  return (
    <button onClick={() => message()} className="grid-item">
      {imageList.length > 0 && (
        <img
          src={imageList[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
        />
      )}
    </button>
  );
};

export default GridItem;
