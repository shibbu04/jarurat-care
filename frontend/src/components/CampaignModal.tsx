import { X } from 'lucide-react';
import { format } from 'date-fns';
import { Campaign } from '../types';
import DonationForm from './DonationForm';

interface CampaignModalProps {
  campaign: Campaign;
  onClose: () => void;
}

export default function CampaignModal({ campaign, onClose }: CampaignModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full p-6 overflow-hidden shadow-xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img
                src={campaign.imageUrl}
                alt={campaign.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="mt-4 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {campaign.title}
                </h2>
                
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
                    />
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

                <div className="prose dark:prose-invert">
                  <p>{campaign.description}</p>
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p>Campaign Duration:</p>
                  <p>
                    {format(new Date(campaign.startDate), 'MMM d, yyyy')} -{' '}
                    {format(new Date(campaign.endDate), 'MMM d, yyyy')}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 pt-6 md:pt-0 md:pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Make a Donation
              </h3>
              <DonationForm campaignId={campaign._id} onSuccess={onClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}