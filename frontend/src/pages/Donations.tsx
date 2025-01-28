import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Heart, DollarSign, Calendar } from 'lucide-react';
import axios from 'axios';
import { format } from 'date-fns';
import { useState } from 'react';

interface Donation {
  _id: string;
  amount: number;
  campaign: {
    _id: string;
    title: string;
    imageUrl: string;
  };
  donor: {
    name: string;
    email: string;
  };
  message?: string;
  createdAt: string;
}

export default function Donations() {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: donations = [], isLoading } = useQuery({
    queryKey: ['donations'],
    queryFn: async () => {
      const { data } = await axios.get<Donation[]>(
        `${import.meta.env.VITE_API_URL}/donations`
      );
      // Ensure we always return an array
      return Array.isArray(data) ? data : [];
    },
  });

  const filteredDonations = donations.filter(
    (donation) =>
      donation.campaign.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      donation.donor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Recent Donations
        </h1>
        <input
          type="text"
          placeholder="Search by campaign or donor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-500 dark:bg-gray-700 dark:text-white w-full md:w-auto"
        />
      </div>

      <div className="grid gap-6">
        {filteredDonations.map((donation, index) => (
          <motion.div
            key={donation._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={donation.campaign.imageUrl}
                alt={donation.campaign.title}
                className="w-full md:w-48 h-32 object-cover rounded-lg"
              />
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {donation.campaign.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Donor
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {donation.donor.name}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Amount
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {donation.amount.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Date
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {format(new Date(donation.createdAt), 'MMM d, yyyy')}
                    </div>
                  </div>
                </div>
                {donation.message && (
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Message
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {donation.message}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}