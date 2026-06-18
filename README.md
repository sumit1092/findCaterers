Live Demo

Frontend: https://find-caterers-org.vercel.app/caterers

Backend API: https://findcaterers-2.onrender.com/api/caterers

# Find Catering Backend

Professional backend setup for a catering search platform using Node.js, Express, MongoDB Atlas, and Mongoose with modern ES6 module syntax.

As per assignment, **3 required APIs**:

1. `GET /api/caterers`
2. `GET /api/caterers/:id`
3. `POST /api/caterers`

Do **not** need separate APIs for search and price filtering. Those can be handled with query parameters on `GET /api/caterers`.

Example:

```http
GET /api/caterers?search=royal&minPrice=200&maxPrice=600
```

## Step-by-step project setup

### 1. Recommended project layout

If your VS Code project is named `findCaterers`, keep the structure like this:

```text
findCaterers/
├── backend/
└── frontend/
```

This backend code belongs inside the `backend` folder.

### 2. Create the backend folder

```bash
mkdir backend
cd backend
```

### 3. Initialize the Node.js project

```bash
npm init -y
```

### 4. Install dependencies

```bash
npm install express mongoose dotenv cors morgan express-validator
npm install -D nodemon
```

### 5. Enable ES modules

Add this to `package.json`:

```json
"type": "module"
```

This allows modern syntax like:

```js
import express from 'express';
```

### 6. Use a professional backend structure

```text
backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── catererController.js
│   ├── data/
│   │   └── sampleCaterers.json
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   ├── notFound.js
│   │   └── validateRequest.js
│   ├── models/
│   │   └── Caterer.js
│   ├── routes/
│   │   └── catererRoutes.js
│   ├── scripts/
│   │   └── seedCaterers.js
│   ├── utils/
│   │   ├── apiError.js
│   │   └── asyncHandler.js
│   ├── validators/
│   │   └── catererValidator.js
│   ├── app.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

### 7. Create your MongoDB Atlas database

1. Sign in to [MongoDB Atlas](https://www.mongodb.com/atlas/database).
2. Create a cluster.
3. Create a database user.
4. Add your current IP in Network Access.
5. Copy the connection string.
6. Create `.env` from `.env.example`.

Example `.env`:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://yourUser:yourPassword@cluster0.xxxxx.mongodb.net/findCaterersDB?retryWrites=true&w=majority&appName=Cluster0
```

### 8. Add useful scripts

Keep these scripts in `package.json`:

```json
"scripts": {
  "dev": "nodemon src/server.js",
  "start": "node src/server.js",
  "seed": "node src/scripts/seedCaterers.js"
}
```

### 9. Run the backend

```bash
npm run dev
```

### 10. Seed sample data into MongoDB Atlas

```bash
npm run seed
```

This clears the existing caterers collection and inserts sample caterers.

## API details

### 1. Get all caterers

```http
GET /api/caterers
```

Optional query parameters:

- `search`
- `minPrice`
- `maxPrice`

Example:

```http
GET /api/caterers?search=feast&minPrice=300&maxPrice=600
```

### 2. Get caterer by ID

```http
GET /api/caterers/:id
```

### 3. Create a new caterer

```http
POST /api/caterers
Content-Type: application/json
```

Request body:

```json
{
  "name": "Royal Feast Catering",
  "location": "Mumbai",
  "pricePerPlate": 450,
  "cuisines": ["North Indian", "Chinese"],
  "rating": 4.6
}
```

## Validation included

The backend validates:

- `name` is required
- `location` is required
- `pricePerPlate` must be greater than 0
- `cuisines` must be a non-empty array
- `rating` must be between 0 and 5
- `id` must be a valid MongoDB ObjectId
- `maxPrice` cannot be less than `minPrice`

## Frontend integration

Your Next.js `/caterers` page can use these backend calls:

```http
GET http://localhost:5000/api/caterers
GET http://localhost:5000/api/caterers?search=royal
GET http://localhost:5000/api/caterers?minPrice=300&maxPrice=600
GET http://localhost:5000/api/caterers/yourCatererId
POST http://localhost:5000/api/caterers
```
