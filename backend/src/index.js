import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import campaignRoutes from './routes/campaigns.js';
import donationRoutes from './routes/donations.js';
import locationRoutes from './routes/locations.js';
import { dummyCampaigns, dummyDonations } from './data/dummyData.js';
import Campaign from './models/Campaign.js';
import Donation from './models/Donation.js';

dotenv.config();

const app = express();

// Configure CORS with specific options
app.use(cors({
  origin: process.env.FRONTEND_URL, // Use environment variable for frontend URL
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Routes
app.use('/api/campaigns', campaignRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/locations', locationRoutes);

// Connect to MongoDB and seed data if needed
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Check if we need to seed data
    const campaignsCount = await Campaign.countDocuments();
    if (campaignsCount === 0) {
      console.log('Seeding dummy data...');
      const campaigns = await Campaign.insertMany(dummyCampaigns);
      
      // Add campaign references to donations
      const donationsWithCampaigns = dummyDonations.map((donation, index) => ({
        ...donation,
        campaign: campaigns[index % campaigns.length]._id
      }));
      await Donation.insertMany(donationsWithCampaigns);
      
      console.log('Dummy data seeded successfully');
    }
  })
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});