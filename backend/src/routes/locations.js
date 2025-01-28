import express from 'express';
import Campaign from '../models/Campaign.js';

const router = express.Router();

// Get campaigns near a location
router.get('/nearby', async (req, res) => {
  const { longitude, latitude, maxDistance = 10000 } = req.query;

  try {
    const campaigns = await Campaign.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          $maxDistance: parseInt(maxDistance),
        },
      },
    });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;