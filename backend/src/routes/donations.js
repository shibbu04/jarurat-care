import express from 'express';
import Donation from '../models/Donation.js';
import Campaign from '../models/Campaign.js';

const router = express.Router();

// Get all donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find()
      .populate('campaign')
      .sort({ createdAt: -1 });
    res.json(donations);
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.status(500).json({ message: 'Failed to fetch donations' });
  }
});

// Create donation
router.post('/', async (req, res) => {
  const session = await Donation.startSession();
  session.startTransaction();

  try {
    const { campaignId, donor, amount, message } = req.body;

    if (!campaignId || !donor || !amount) {
      throw new Error('Missing required fields');
    }

    const campaign = await Campaign.findById(campaignId).session(session);
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    const donation = new Donation({
      campaign: campaignId,
      donor: {
        name: donor.name,
        email: donor.email,
      },
      amount: amount,
      message: message,
    });

    await donation.save({ session });

    campaign.raised += amount;
    await campaign.save({ session });

    await session.commitTransaction();
    
    const populatedDonation = await Donation.findById(donation._id).populate('campaign');
    res.status(201).json(populatedDonation);
  } catch (error) {
    await session.abortTransaction();
    console.error('Error creating donation:', error);
    res.status(400).json({ message: error.message || 'Failed to process donation' });
  } finally {
    session.endSession();
  }
});

export default router;