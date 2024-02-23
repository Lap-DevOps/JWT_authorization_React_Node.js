
# JWT Authentication Example

This project demonstrates how to implement JSON Web Token (JWT) authentication in a React application with a Node.js backend. The main goal of the project is to showcase the usage of JWT tokens for user authentication and authorization.


## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project demonstrates how to implement JSON Web Token (JWT) authentication in a React application with a Node.js backend. The main goal of the project is to showcase the usage of JWT tokens for user authentication and authorization.

## Features

- User registration with email verification
- User login with JWT token generation
- Protected routes requiring authentication
- Logout functionality

## Technologies Used

- React for the frontend
- Node.js with Express for the backend
- MongoDB for database storage
- JSON Web Tokens (JWT) for authentication

## Setup Instructions

1. Clone the repository: `git clone https://github.com/Lap-DevOps/JWT_authorization_React_Node.js.git`
2. Navigate to the project directory: `cd your_repository`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Navigate to the client directory: `cd client`
6. Install client dependencies: `npm install`
7. Start the client: `npm start`

## API Endpoints

- `GET /api/users`: Retrieve a list of users.
- `POST /api/register`: Register a new user.
- `POST /api/login`: Login an existing user.
- `GET /api/logout`: Logout the current user.
- `POST /api/confirm-email`: Confirm user's email address.

## Usage

1. Register a new user using the `/api/register` endpoint.
2. Login using the `/api/login` endpoint to obtain a JWT token.
3. Use the obtained JWT token to access protected routes or perform authenticated actions.
4. Logout using the `/api/logout` endpoint when finished.
5. Confirm user's email address using the `/api/confirm-email` endpoint.

## Contributing

If you would like to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`
3. Make changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
