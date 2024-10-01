import {cloudinary} from '../cloudinary';

export default async function handler(req, res) {
    try {
      const csvUrl = 'https://res.cloudinary.com/decjdbz9z/raw/upload/v1727745113/qr4xm5rqelwictxasd6h.csv';
  
      const response = await fetch(csvUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch CSV from Cloudinary');
      }
  
      const csvText = await response.text();
      res.status(200).json({ csvText });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }