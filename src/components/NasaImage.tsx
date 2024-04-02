// components/NASAImage.tsx
import { useEffect, useState } from 'react';

function NASAImage() {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const fetchNASAImage = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=18iTTbF1QyFjNTWerURM8Dgcd0T86VfvlTUcPnko');
        const data = await response.json();
        setImageUrl(data.url);
      } catch (error) {
        console.error('Error fetching NASA image:', error);
      }
    };

    fetchNASAImage();
  }, []);

  return (
    <div>
      <h1>NASA Image of the Day</h1>
      {imageUrl && <img src={imageUrl} alt="NASA" />}
    </div>
  );
}

export default NASAImage;

