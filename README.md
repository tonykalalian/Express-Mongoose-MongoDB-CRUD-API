# 🚀 Express-Mongoose-MongoDB-CRUD-API

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# ✨ Description

Welcome to **Express-Mongoose-MongoDB-CRUD-API**! This repository contains the backend built using **Node.js**, **Express**, **MongoDB**, and **Mongoose**. It provides a **RESTful API** for managing notes, allowing you to perform **CRUD** (Create, Read, Update, Delete) operations with ease.

# 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

# ⚙️Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/tonykalalian/Express-Mongoose-MongoDB-CRUD-API.git
    ```

2. Install dependencies:

    ```bash
    cd Express-Mongoose-MongoDB-CRUD-API
    npm install
    ```

3. Set up environment variables:

    - Create a `.env` file in the root directory of the project.
    - Define the following variables in the `.env` file:

        ```bash
        PORT=XXXX
        MONGODB_URI=<your-mongodb-connection-url><your-mongodb-atlas-cluster>
       
        ```

4. Start the server:

    ```bash
    nodemon app.js/npm run dev
    ```
# 📝Usage
The backend API is now running at http://localhost:3000/. You can use tools like Postman or curl to interact with the endpoints. Below are the available API endpoints:
### 📚 API Endpoints
### GET /notes: Retrieve a list of all notes.
### GET /notes/:id: Retrieve a single note by its ID.
### POST /notes: Create a new note. (Request body should contain title and body fields.)
### PUT /notes/:id: Update an existing note by its ID. (Request body should contain title and body fields.)
### DELETE /notes/:id: Delete a note by its ID.
### 🤝 Contributing
Contributions are welcome! To contribute to this project, follow these steps:

Fork the repository
Create your feature branch: git checkout -b feature-name
Commit your changes: git commit -m 'Add some feature'
Push to the branch: git push origin feature-name
Submit a pull request
Please make sure to follow the Contributing Guidelines and adhere to the Code of Conduct when contributing to this project.

# 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
