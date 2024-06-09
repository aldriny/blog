# Blog API Project

This project is a simple API for managing blog posts. It allows you to create, read, update, and delete blog posts. The API is built using Node.js with Express.js for handling HTTP requests and MongoDB with Mongoose for data storage.

## Project Structure

The project consists of the following components:

- **Controllers**: Contains controller functions for handling different HTTP requests related to blogs. (File: `api.js`)
- **Models**: Defines the Mongoose schema for the `Blog` model. (File: `Blog.js`)
- **Routes**: Defines the API routes for interacting with the blog resources. (File: `BlogController.js`)
- **Middleware**: Contains middleware functions for handling common tasks such as error handling and authentication. (File: `DBConnect.js`)
- **Configuration**: Contains configuration files for setting up environment variables and other project configurations. (File: `app.js`)

## Usage

To use this API, follow the steps below:

1. Install Node.js and MongoDB on your system if you haven't already.
2. Clone this repository to your local machine.
3. Install dependencies using `npm install`.
4. Start the MongoDB server.
5. Run the API server using `npm run dev`.
6. Use an HTTP client like Postman to interact with the API endpoints.

## Dependencies

- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Body-parser**: Middleware to parse request bodies.
- **Dotenv**: Load environment variables from a `.env` file.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **XSS-clean**: Middleware for sanitizing user input from XSS attacks.
- **Helmet**: Middleware for setting HTTP headers for security.
- **Compression**: Middleware for compressing HTTP responses.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or enhancements, feel free to open an issue or create a pull request.

