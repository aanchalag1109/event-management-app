# event-management-app
# Event Management API

This Node.js application provides a RESTful API for managing events.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB database (local or cloud-based).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aanchalag1109/event-management-app.git
   cd event-management-app
   
2. Install dependencies:
npm install

3. Create a .env file in the root directory with the following:
MONGODB_URI=your-mongodb-uri
PORT=3000

4. Running Locally
Start the development server: npm run dev

The server will start at http://localhost:3000.

API Documentation
Endpoints:
GET /events: Get all events.
GET /events/:id: Get event by ID.
POST /events: Add a new event.
PUT /events/:id: Update an existing event.
DELETE /events/:id: Delete an event.
