import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema(
  {
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campaign',
      required: true,
    },
    donor: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Donation', donationSchema);