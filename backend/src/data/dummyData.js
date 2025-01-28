export const dummyCampaigns = [
  {
    title: "Education for Rural Children",
    description: "Help provide quality education to children in rural areas. This campaign aims to build schools, provide learning materials, and support teacher training programs. Your contribution will help create a brighter future for underprivileged children.",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    target: 50000,
    raised: 25000,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    location: {
      type: "Point",
      coordinates: [77.2090, 28.6139] // Delhi
    },
    status: "active"
  },
  {
    title: "Clean Water Initiative",
    description: "Provide clean drinking water to communities in need. We're installing water purification systems and conducting awareness programs about water conservation. Join us in making clean water accessible to everyone.",
    imageUrl: "https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    target: 75000,
    raised: 45000,
    startDate: "2024-02-01",
    endDate: "2024-11-30",
    location: {
      type: "Point",
      coordinates: [72.8777, 19.0760] // Mumbai
    },
    status: "active"
  },
  {
    title: "Healthcare for All",
    description: "Support our mobile medical camps that provide essential healthcare services to remote villages and underserved communities. Help us bring medical care to those who need it most.",
    imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    target: 100000,
    raised: 80000,
    startDate: "2024-03-01",
    endDate: "2024-10-31",
    location: {
      type: "Point",
      coordinates: [80.2707, 13.0827] // Chennai
    },
    status: "active"
  },
  {
    title: "Women Empowerment Program",
    description: "Support women entrepreneurs through skill development, financial literacy, and micro-loans. Help create sustainable livelihoods and promote gender equality in communities.",
    imageUrl: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    target: 60000,
    raised: 35000,
    startDate: "2024-02-15",
    endDate: "2024-11-15",
    location: {
      type: "Point",
      coordinates: [88.3639, 22.5726] // Kolkata
    },
    status: "active"
  },
  {
    title: "Environmental Conservation",
    description: "Join our efforts to protect local ecosystems through tree planting, waste management, and environmental education programs. Together, we can create a sustainable future.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    target: 40000,
    raised: 15000,
    startDate: "2024-04-01",
    endDate: "2024-09-30",
    location: {
      type: "Point",
      coordinates: [77.5946, 12.9716] // Bangalore
    },
    status: "active"
  },
  {
    title: "Digital Literacy for Youth",
    description: "Empower young people with digital skills through computer training programs and technology workshops. Help bridge the digital divide and create opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    target: 35000,
    raised: 20000,
    startDate: "2024-03-15",
    endDate: "2024-10-15",
    location: {
      type: "Point",
      coordinates: [78.4867, 17.3850] // Hyderabad
    },
    status: "active"
  }
];

export const dummyDonations = [
  {
    donor: {
      name: "John Doe",
      email: "john@example.com"
    },
    amount: 5000,
    message: "Happy to support education for children!",
    createdAt: "2024-03-15T10:00:00Z"
  },
  {
    donor: {
      name: "Jane Smith",
      email: "jane@example.com"
    },
    amount: 7500,
    message: "Clean water is a basic right. Keep up the good work!",
    createdAt: "2024-03-14T15:30:00Z"
  },
  {
    donor: {
      name: "Robert Johnson",
      email: "robert@example.com"
    },
    amount: 10000,
    message: "Healthcare should be accessible to everyone.",
    createdAt: "2024-03-13T09:45:00Z"
  },
  {
    donor: {
      name: "Sarah Williams",
      email: "sarah@example.com"
    },
    amount: 3000,
    message: "Supporting women entrepreneurs!",
    createdAt: "2024-03-12T14:20:00Z"
  },
  {
    donor: {
      name: "Michael Brown",
      email: "michael@example.com"
    },
    amount: 2500,
    message: "For a greener future!",
    createdAt: "2024-03-11T11:15:00Z"
  }
];