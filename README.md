# Transaction Logging System

A simple transaction logging system built using the **PERN stack** (PostgreSQL, Express.js, React.js, Node.js). It allows users to **add transactions (credit/debit)** and view them via a **REST API and frontend UI**.

## Features

- REST API for transaction management
- PostgreSQL database integration
- React frontend to display transactions
- Environment variable configuration for database credentials
- Error handling and validation

## Tech Stack

### Backend

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **TypeORM**

### Frontend

- **React.js**
- **React Query**
- **Ant Design (Antd)**

### Database

- **PostgreSQL**

### Libraries Used

- `express` – Web framework for Node.js
- `pg` – PostgreSQL client for Node.js
- `dotenv` – Environment variable management
- `cors` – Cross-Origin Resource Sharing
- `axios` – HTTP client for API calls

## Project Structure

The project follows a **monorepo structure**, containing separate packages for the client, server, and shared modules.

```
Dal/
│── server/
│   ├── api/        # Main server logic
│   ├── service/    # Business logic
│   ├── repository/ # Database operations
│   ├── migrations/ # Database migrations
│   ├── utils/      # Helper functions
│   ├── types/      # Type definitions
│   ├── routes/
│   │   ├── transactions.js  # API endpoints for transactions
│   ├── models/
│   │   ├── transaction.js  # Database schema/model
│   ├── .env                # Environment variables for DB credentials
│── frontend/
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── components/
│   │   │   ├── TransactionList.js  # Displays transactions
│   │   ├── hooks/
│   │   │   ├── transactions.js  # API calls
│── README.md              # Documentation
│── package.json           # Project dependencies
```

## API Endpoints

### 1. Add a New Transaction

**Endpoint:** `POST /api/transactions`

**Request Body:**

```json
{
  "amount": 100,
  "type": "credit",
  "timestamp": "2024-03-09T12:00:00Z"
}
```

**Response:**

```json
{
  "id": 1,
  "amount": 100,
  "type": "credit",
  "timestamp": "2024-03-09T12:00:00Z"
}
```

### 2. Fetch All Transactions

**Endpoint:** `GET /api/transactions`

**Response:**

```json
[
  {
    "id": 1,
    "amount": 100,
    "type": "credit",
    "timestamp": "2024-03-09T12:00:00Z"
  },
  {
    "id": 2,
    "amount": 50,
    "type": "debit",
    "timestamp": "2024-03-09T12:30:00Z"
  }
]
```

### 3. Fetch a Specific Transaction

**Endpoint:** `GET /api/transactions/:id`

**Response:**

```json
{
  "id": 1,
  "amount": 100,
  "type": "credit",
  "timestamp": "2024-03-09T12:00:00Z"
}
```

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <repository-url>
cd Dal
```

### 2. Setup Backend

```sh
cd server
yarn install
yarn dev
```

- Create a `.env` file and add PostgreSQL credentials:
  ```sh
  DATABASE_URL=postgres://user:password@localhost:5432/transactions_db
  ```
- Start the server:
  ```sh
  npm start
  ```

### 3. Setup Frontend

```sh
cd client
yarn install
yarn dev
```

## Challenges & Decisions

- **Database Choice:** Used PostgreSQL instead of Supabase for simplicity.
- **State Management:** Used React Query instead of Redux due to the app’s small size.
- **Error Handling:** Implemented try-catch blocks in API calls for better debugging.
