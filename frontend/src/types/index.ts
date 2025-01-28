export interface Campaign {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    target: number;
    raised: number;
    startDate: string;
    endDate: string;
    location: {
      type: string;
      coordinates: [number, number];
    };
    status: 'active' | 'completed' | 'cancelled';
  }
  
  export interface Donation {
    _id: string;
    campaign: Campaign;
    donor: {
      name: string;
      email: string;
    };
    amount: number;
    message?: string;
    createdAt: string;
  }