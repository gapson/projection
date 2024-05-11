# Backend service to provide histogram data from a CSV file

## Introduction
This project is a backend API service built for providing histogram data from a CSV file. It offers endpoints to retrieve histogram data for each column in the CSV file.

## Requirements
- Docker for running the project with Docker Compose
- Node.js (if you want to run the project on your local machine)

## Installation
1. **Clone the repository:**
    ```
    git https://github.com/gapson/projection.git
    cd projection
    ```
    
2. **If you want to run the project localy:**
    - run `npm install`

Running Locally
1. **Start the server:**
    `npm start`
2. **The server will be running at http://localhost:3000.**

Running with Docker Compose
1. **Ensure Docker is installed on your system.**
2. **Run the following command:**
`docker-compose up --build`
3. **The server will be accessible at http://localhost:3000.**

Endpoints

- Get Histogram for a Column
- URL: /histogram/:column/:type
- Method: GET
- Description: Retrieves histogram data for the specified column in the Projection2021.csv.
- Parameters:
    - column: Name of the column for which histogram data is requested.
    - type: Type of report (html, bar, json)
- Example:
    - http://localhost:3000/histogram/Commodity/html
    - http://localhost:3000/histogram/CommodityType/bar

Testing
    coming soon...

Built With
- Node.js
- Express.js
- Docker




