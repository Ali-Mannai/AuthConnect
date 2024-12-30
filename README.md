

# AuthConnect

AuthConnect is a Node.js-based authentication service with a React frontend, leveraging Google OAuth 2.0 for secure user authentication. The application uses Passport.js for managing authentication strategies and MongoDB for storing user data. Designed with simplicity and scalability in mind, AuthConnect allows seamless user login and secure profile access.

## Features

- Secure Google OAuth 2.0 authentication
- User session management with `express-session`
- MongoDB integration for user data storage
- Scalable and modular architecture
- React frontend for a seamless user experience

## Technologies Used

- **Backend:** Node.js, Express.js, Passport.js
- **Frontend:** React.js
- **Database:** MongoDB
- **Authentication:** Google OAuth 2.0
- **Other:** dotenv, cookie-parser, cors, express-session

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or later)
- MongoDB (running on `localhost:27017`)
- A Google Cloud project with OAuth 2.0 credentials

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Ali-Mannai/AuthConnect.git
   cd AuthConnect
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables in a `.env` file:
   ```
   CLIENT_ID=your-google-client-id
   CLIENT_SECRET=your-google-client-secret
   ```
![clientID](https://github.com/user-attachments/assets/b9cdca87-022c-4fac-8686-8c2fb78026e9)


4. Start the MongoDB server:
   ```
   mongod
   ```

5. Run the server:
   ```
   npm start
   ```

6. Start the React frontend (if applicable):
   ```
   cd frontend
   npm install
   npm start
   ```

## Usage

1. Open your browser and visit:
   - **Backend:** `http://localhost:3000`
   - **Frontend:** `http://localhost:3001`

2. Click the "Login with Google" button to authenticate.

3. After successful login, you will be redirected to the dashboard.

## API Endpoints

- `GET /auth/google`: Initiates Google OAuth 2.0 authentication.
- `GET /auth/callback`: Handles the callback from Google after user authentication.
- `GET /user`: Retrieves user token and profile details (requires authentication).

## Project Structure

```
AuthConnect/
├── backend/
│   ├── server.js       # Main server file
│   ├── routes/         # API routes
│   ├── models/         # Mongoose models
│   └── config/         # Passport and database configuration
├── frontend/           # React frontend (if applicable)
└── README.md           # Project documentation
```

## Screenshots

![AuthConnect](https://github.com/user-attachments/assets/3f38a89e-137c-49db-82b4-43ff9dc9c28f)

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to improve the project.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2)
- [Passport.js Documentation](http://www.passportjs.org/docs/)
- [Mongoose](https://mongoosejs.com/)
