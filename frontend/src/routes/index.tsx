import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Campaigns from '../pages/Campaigns';
import CampaignDetails from '../pages/CampaignDetails';
import Donations from '../pages/Donations';
import Locations from '../pages/Locations';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/campaigns/:id" element={<CampaignDetails />} />
      <Route path="/donations" element={<Donations />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}