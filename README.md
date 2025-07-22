# BikeInfo Application

## Overview
BikeInfo is a Node.js application that allows users to submit and fetch records of stolen bikes. The application uses MongoDB as its database to store the records.

## Features
- Submit stolen bike records
- Fetch all stolen bike records

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose

## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- MongoDB database (local or cloud)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd BikeInfo-backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
1. Update the database connection settings in `src/config/db.js` to point to your MongoDB instance.

### Running the Application
1. Start the application:
   ```
   npm start
   ```
2. The application will run on `http://localhost:3000`.

## API Endpoints

### Submit a Stolen Bike Record
- **Endpoint:** `POST /api/records`
- **Request Body:**
  ```json
  {
    "bikeId": "string",
    "ownerName": "string",
    "dateStolen": "YYYY-MM-DD",
    "description": "string"
  }
  ```
- **Response:** Returns the submitted record.

### Fetch All Stolen Bike Records
- **Endpoint:** `GET /api/records`
- **Response:** Returns an array of stolen bike records.

## License
This project is licensed under the MIT License.