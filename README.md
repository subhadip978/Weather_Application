
<h2>This project is a weather search engine that allows users to search for the current weather by city name. It fetches weather details using the OpenWeather API and displays key attributes such as temperature, humidity, and weather conditions.</h2>

🛠️ Tech Stack

### Backend (Web Service)
- **Language**: Node.js  
- **API Framework**: Express.js  
- **Caching**: Redis  
- **External API**: OpenWeather API  

### Frontend (User Interface)
- **Library**: React.js  
- **Styling**: CSS (TailwindCSS)


⚙️ Installation and Setup

### Steps to Run the Weather Application

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Weather_Application.git
    ```

2. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

3. **Install backend dependencies:**

    ```bash
    npm install
    ```

4. **Set up Redis**  
   Make sure Redis is installed and running on your machine. If you don't have Redis installed, you can follow the installation instructions from the official Redis website: [Redis Installation](https://redis.io/docs/getting-started/).

   - If you’re using Docker, you can run Redis with the following command:
   
     ```bash
     docker run --name redis -p 6379:6379 -d redis
     ```

5. **Start the backend server:**

    ```bash
    npm start
    ```

   The backend will now connect to Redis for caching weather data.

6. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

7. **Install frontend dependencies:**

    ```bash
    npm install
    ```

8. **Start the frontend server:**

    ```bash
    npm start
    ```

### Notes on Redis:

- Redis is used for caching API responses to speed up repeated queries and reduce the load on the OpenWeather API.
- By default, Redis will be running on port `6379` unless otherwise configured.
