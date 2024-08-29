# Weather Information Service (Backend)

This is a Node.js backend application that fetches and provides weather information for a given city using the Weatherstack API. It serves weather data via a simple REST API.

# Here is the project setup instructions

## Features
- Fetch current weather data from the Weatherstack API.
- Provide weather information for any valid city.
- Handle errors for invalid city names and API failures.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) and npm.
- A valid API key from [Weatherstack](https://weatherstack.com/).

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/weather-information-service-backend.git
cd weather-information-service-backend
```

## 2. Install dependencies
```bash
   npm install
```

### 3. Create a `.env` file
    Create a `.env` file in the root of the project and add your Weatherstack API key:

```bash
    WEATHERSTACK_API_KEY=your_weatherstack_api_key
```

#### 4. Start the server
```bash
   node app.js
```

The server will start on `http://localhost:3000`

# API Usage
Endpoint: `/weather`
Method: GET
Query Parameter: `city` - The name of the city for which you want to fetch weather information.

# Example Request:

```bash
GET `http://localhost:3000/weather?city=London`
```

# Example Response

```bash
{
  "location": "London",
  "temperature": 15,
  "description": "Partly cloudy",
  "humidity": 72,
  "wind_speed": 13
}
```

# Error Handling

- If the `city` query parameter is missing, the API will return a `400` error with a message requesting a city name.

- If the city is not found, the API will return a `400` error indicating that the location could not be found.

- If there is a failure in fetching the weather data (e.g., API issue), a `500` error will be returned.


# Project Structure
```bash
weather-information-service-backend/
├── app.js           # Main application file
├── package.json     # Project metadata and dependencies
└── .env             # Environment variables (not included in repo)
```

# License
This project is licensed under the MIT License.

# Acknowledgements

- Weatherstack for providing the weather data API.


### Explanation

```vbnet
  - **API Usage**: This section explains how to interact with the backend API, including the endpoint, request method, and an example response.

  - **Error Handling**: A brief explanation of how different errors are handled by the API.

  - **Project Structure**: This section only covers the backend, listing key files.
    
  This `README.md` is specific to the how to set up the project and guides users through setting up and using the API. You can further adjust it based on your needs before pushing it to GitHub.
```



