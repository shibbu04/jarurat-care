import express from 'express';
import Campaign from '../models/Campaign.js';

const router = express.Router();

// Get all campaigns
router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaign.find().sort({ createdAt: -1 });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get campaign by ID
router.get('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    res.json(campaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create campaign
router.post('/', async (req, res) => {
  const campaign = new Campaign({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    target: req.body.target,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    location: {
      type: 'Point',
      coordinates: req.body.location.coordinates,
    },
  });

  try {
    const newCampaign = await campaign.save();
    res.status(201).json(newCampaign);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update campaign
router.patch('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }

    Object.keys(req.body).forEach((key) => {
      if (key === 'location') {
        campaign.location = {
          type: 'Point',
          coordinates: req.body.location.coordinates,
        };
      } else {
        campaign[key] = req.body[key];
      }
    });

    const updatedCampaign = await campaign.save();
    res.json(updatedCampaign);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;