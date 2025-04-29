# NourishVita Essentials

NourishVita Essentials is a web application focused on providing a wide array of superfoods and wellness products. This project is built using the following technologies:

-   **Frontend**: Next.js (React framework)
-   **Backend**: Express.js (Node.js framework)
-   **Database**: MongoDB (NoSQL database)

## Project Structure

The project is structured as follows:

-   **`components`**: Contains reusable React components.
-   **`controllers`**: Contains backend controllers that handle business logic.
-   **`models`**: Contains database models for MongoDB.
-   **`routes`**: Contains backend routes for the API endpoints.
-   **`src`**: Contains the main source code for the Next.js application.
    -   **`app`**: Contains the routes for the Next.js application.
    -   **`components`**: Contains reusable React components specific to the frontend.
    -   **`hooks`**: Contains custom React hooks.
    -   **`lib`**: Contains utility functions.
    -   **`services`**: Contains services that interact with external APIs.
    - **`types`:** Contains the Typescript types
-   **`db.js`**: Contains the MongoDB database connection setup.
-   **`server.js`**: Contains the Express.js server setup.
-   **`package.json`**: Contains project dependencies and scripts.
- **`seed.js`**: Contains the script to seed the database.

## Getting Started

To run the project locally, follow these steps:

1.  **Install Dependencies**:
```
bash
    npm install
    
```
2.  **Set up MongoDB**:

    -   Ensure you have MongoDB installed and running.
    -   Update the database connection string in `db.js` to match your MongoDB instance.

3.  **Run the Backend Server**:
```
bash
    node server.js
    
```
4.  **Run the Frontend**:
```
bash
    npm run dev
    
```
5.  **Seed the database**
```
bash
    node seed.js
    
```
This will start the frontend development server at `http://localhost:3000` and the backend server at `http://localhost:3001`.