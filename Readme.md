<!-- markdownlint-disable MD033 -->
# 🌟 Jarurat Care NGO Platform

<div align="center">
  <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" alt="Jarurat Care" width="600">

  <p>A comprehensive platform for managing NGO campaigns and donations</p>

  [![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/yourusername)
  [![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue.svg)](https://www.mongodb.com/mern-stack)
</div>

## 📧 Live Link

Project Link: [https://jarurat-care.vercel.app/](https://jarurat-care.vercel.app/)


## 🚀 Features

- 📱 Responsive design for all devices
- 🌓 Light/Dark mode support
- 🗺️ Interactive map integration with Leaflet.js
- 💰 Secure donation processing
- 📊 Real-time campaign progress tracking
- 🔍 Advanced search and filtering
- 📍 Location-based campaign discovery
- ✨ Beautiful animations with Framer Motion

## 🛠️ Tech Stack

### Frontend
- ⚛️ React with TypeScript
- 🎨 Tailwind CSS for styling
- 🔄 React Query for data fetching
- 🗺️ Leaflet.js for maps
- ✨ Framer Motion for animations
- 📝 React Hook Form for form handling
- 🚦 React Router for navigation

### Backend
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB with Mongoose
- 🔐 Environment variables for configuration

## 🏗️ Project Structure

```
jarurat-care/
├── frontend/                # Frontend application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/       # React context providers
│   │   ├── pages/         # Page components
│   │   ├── hooks/
│   │   ├── routes/        # Route configurations
│   │   └── main.tsx       # Application entry point
│   ├── .env               # Environment variables
│   └── package.json       # Frontend dependencies
│
└── backend/               # Backend application
    ├── src/
    │   ├── models/        # MongoDB models
    │   ├── routes/        # API routes
    │   └── index.js       # Server entry point
    ├── .env               # Environment variables
    └── package.json       # Backend dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shibbu04/jarurat-care.git
cd jarurat-care
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Set up environment variables:

Frontend (.env):
```env
VITE_API_URL=http://localhost:5000/api
```

Backend (.env):
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

5. Start the development servers:

Backend:
```bash
cd backend
npm start
```

Frontend:
```bash
cd frontend
npm run dev
```

## 🌐 API Endpoints

### Campaigns
- `GET /api/campaigns` - Get all campaigns
- `GET /api/campaigns/:id` - Get campaign by ID
- `POST /api/campaigns` - Create new campaign
- `PATCH /api/campaigns/:id` - Update campaign

### Donations
- `GET /api/donations` - Get all donations
- `POST /api/donations` - Create new donation

### Locations
- `GET /api/locations/nearby` - Get campaigns near location

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Leaflet](https://leafletjs.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

Shivam Singh - [@Shivam](https://shivam04.tech)

Project Link: [https://github.com/shibbu04/jarurat-care/](https://github.com/shibbu04/jarurat-care/)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/shibbu04/">Shivam</a>
</div>