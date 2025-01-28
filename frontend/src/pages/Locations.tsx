import { useQuery } from '@tanstack/react-query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';

interface Campaign {
  _id: string;
  title: string;
  description: string;
  location: {
    coordinates: [number, number];
  };
  status: string;
}

export default function Locations() {
  const { data: campaigns, isLoading } = useQuery({
    queryKey: ['campaigns'],
    queryFn: async () => {
      const { data } = await axios.get<Campaign[]>(
        'http://localhost:5000/api/campaigns'
      );
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Campaign Locations
      </h1>
      <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={[20.5937, 78.9629]} // Center of India
          zoom={5}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {campaigns?.map((campaign) => (
            <Marker
              key={campaign._id}
              position={[
                campaign.location.coordinates[1],
                campaign.location.coordinates[0],
              ]}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold mb-1">{campaign.title}</h3>
                  <p className="text-sm mb-2">{campaign.description}</p>
                  <Link
                    to={`/campaigns/${campaign._id}`}
                    className="text-rose-500 hover:text-rose-600 text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}