// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email, password } = req.body;
    const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
