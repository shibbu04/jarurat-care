import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, DollarSign } from 'lucide-react';
import axios from 'axios';
import { format } from 'date-fns';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface Campaign {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  target: number;
  raised: number;
  startDate: string;
  endDate: string;
  location: {
    coordinates: [number, number];
  };
  status: 'active' | 'completed' | 'cancelled';
}

interface DonationForm {
  name: string;
  email: string;
  amount: number;
  message?: string;
}

export default function CampaignDetails() {
  const { id } = useParams<{ id: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DonationForm>();

  const { data: campaign, isLoading } = useQuery({
    queryKey: ['campaign', id],
    queryFn: async () => {
      const { data } = await axios.get<Campaign>(
        `${import.meta.env.VITE_API_URL}/campaigns/${id}`
      );
      return data;
    },
  });

  const onSubmit = async (formData: DonationForm) => {
    try {
      setIsSubmitting(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/donations`, {
        campaignId: id,
        donor: {
          name: formData.name,
          email: formData.email,
        },
        amount: formData.amount,
        message: formData.message,
      });
      toast.success('Thank you for your donation!');
      reset();
    } catch (error) {
      toast.error('Failed to process donation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading || !campaign) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <img
          src={campaign.imageUrl}
          alt={campaign.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {campaign.title}
            </h1>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                campaign.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : campaign.status === 'completed'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300">{campaign.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Calendar className="w-5 h-5 mr-2" />
              <span>
                {format(new Date(campaign.startDate), 'MMM d, yyyy')} -{' '}
                {format(new Date(campaign.endDate), 'MMM d, yyyy')}
              </span>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <MapPin className="w-5 h-5 mr-2" />
              <span>View on map</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Progress</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {Math.round((campaign.raised / campaign.target) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-rose-500 h-2 rounded-full"
                style={{
                  width: `${Math.min(
                    (campaign.raised / campaign.target) * 100,
                    100
                  )}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">
                Raised: ${campaign.raised.toLocaleString()}
              </span>
              <span className="text-gray-900 dark:text-white font-medium">
                Target: ${campaign.target.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Make a Donation
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring focus:ring-rose-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring focus:ring-rose-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Amount ($)
            </label>
            <input
              type="number"
              id="amount"
              {...register('amount', {
                required: 'Amount is required',
                min: { value: 1, message: 'Minimum donation is $1' },
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring focus:ring-rose-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message (Optional)
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring focus:ring-rose-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
            ) : (
              <>
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </>
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="h-64">
          <MapContainer
            center={[
              campaign.location.coordinates[1],
              campaign.location.coordinates[0],
            ]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[
                campaign.location.coordinates[1],
                campaign.location.coordinates[0],
              ]}
            >
              <Popup>{campaign.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </motion.div>
    </div>
  );
}