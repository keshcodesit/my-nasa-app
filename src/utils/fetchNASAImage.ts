// utils/fetchNASAImage.ts
import cron from 'node-cron';
import fetch from 'node-fetch';

const fetchNASAImage = async () => {
  try {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=18iTTbF1QyFjNTWerURM8Dgcd0T86VfvlTUcPnko');
    const data = await response.json();
    console.log('NASA Image of the Day:', data.url);
    // You can save or process the image URL as needed
  } catch (error) {
    console.error('Error fetching NASA image:', error);
  }
};

// Schedule fetching the NASA image daily at midnight
cron.schedule('0 0 * * *', fetchNASAImage);
