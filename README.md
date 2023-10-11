

```markdown
# IS-24 Full Stack Developer Code Challenge

Welcome to the IS-24 Full Stack Developer Code Challenge! This web application is designed to track and manage web applications developed by the Province of BC. Below, you'll find information about the project, instructions for running it locally, and user stories.

## Project Overview

For this code challenge, I have built a web application that helps catalog web applications developed by the Province of BC. It allows users to view, add, and edit product information. The project consists of two main components:

1. **Backend API Component**: This component provides API endpoints that serve data to the frontend component. It includes functionality for retrieving product information and adding/editing products. The project is built on NodeJs, ExpressJS and Swagger for the API documentation. 

2. **Frontend Web Application Component**: This component is a Create-react-app(CRA) web application that interacts with the API to display, create, and edit product information.

## Getting Started

To run this project on your local development machine, follow these steps:
````

1. Clone this GitHub repository:

```bash
git clone https://github.com/Sid-Agnihotri/sidhant-sharma-ecc-dssb-IS24-code-challenge
````
2. Navigate to the project directory:

```bash
cd sidhant-sharma-ecc-dssb-IS24-code-challenge
```

3. Install dependencies for the frontend and backend components. This project uses Docker to run the application:
install Docker (if not already installed) and run the following Docker Compose command:

```bash
# Navigate to the root directory and run
docker-compose up --build
```

4. The project should now be running locally, and you can access it in your web browser at `http://localhost:3000`.

## API Documentation (Swagger)

I've provided Swagger documentation for the API. You can access it at:

```
http://localhost:5000/api/api-docs
```

### Running the Application
If you encounter issues with the backend port already being in use, follow the steps below:

Stop the Docker Containers:
Bring down the running containers by executing:

```bash
docker-compose down
```
#### Resolve the Port Conflict:

You can free up the port that's in use and then restart the docker containers.
Alternatively, you can specify a different port that's available. To do this, update the docker-compose.yml file as detailed in the next step.
Update the docker-compose.yml File:
Adjust the ports and environment variables based on the available port you want to use:

```bash
ports:
  - "3000:3000" # This is the frontend port; adjust if needed

environment:
  # URL for the frontend to connect to the backend
  - REACT_APP_BACKEND_URL=http://localhost:<YOUR_AVAILABLE_PORT>  # Replace <YOUR_AVAILABLE_PORT> with your port

backend:
  build:
    context: ./backend
    dockerfile: Dockerfile
  ports:
    - "5000:5000" # This is the backend port; replace 5000 with <YOUR_AVAILABLE_PORT>
  environment:
    # Environment variables for the Swagger configuration
    - PORT=<YOUR_AVAILABLE_PORT> # Replace <YOUR_AVAILABLE_PORT> with your port
    - HOST=localhost

```

Once done, you can run the commands below - 

```bash
docker-compose build
docker-compose up
```

Now, you should be able to run your application using the updated port settings.

## User Stories

### User Story One (View Products)

As Lisa, I want to see a list of all products that ECC currently develops or maintains in a list view.

### User Story Two (Add Product)

As Lisa, I want to be able to add a product to the list of products that ECC is developing or maintaining.

### User Story Three (Edit Product)

As Alan, I want to be able to add or edit product-related information so that I can ensure that product data is accurate.

### Bonus User Story Four (Search by Scrum Master)

As Lisa, I want to search for a specific Scrum Master name so that I can see all of the products that they are currently working on.

### Bonus User Story Five (Search by Developer)

As Alan, I want to search for a specific Developer name so that I can see all of the products that they are currently working on.

## Feedback and Contributions

If you have any feedback, please feel free to create issues or pull requests on this GitHub repository.

Happy coding!
