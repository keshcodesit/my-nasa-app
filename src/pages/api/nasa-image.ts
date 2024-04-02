// pages/api/nasa-image.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=18iTTbF1QyFjNTWerURM8Dgcd0T86VfvlTUcPnko');
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
