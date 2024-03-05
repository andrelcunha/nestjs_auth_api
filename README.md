
### NestJS Authentication API
This is a simple authentication API built with NestJS, Fastify, TypeScript, and Prisma. It uses JSON Web Tokens (JWT) for session management.

## Prerequisites
Before you begin, ensure you have met the following requirements:

You have installed Node.js and npm.
You have a MySQL server running.
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installing the API
To install this project, follow these steps:

Clone the repository:
```bash
$ git clone <your-repository-url>
```

Change into the project directory:
```bash
$ cd <project-directory>
```


Install the dependencies:

```bash
$ npm install
```

## Configuring the Database
This project uses Prisma to interact with the MySQL database. To set up your own database, follow these steps:

Copy the .env.example file to a new file named .env:
```bash
$ cp .env.example .env
```

Update the DATABASE_URL in the .env file with your own MySQL credentials:
```
DATABASE_URL="mysql://user:password@localhost:3306/mydb"
```

Run the Prisma migration to create the database schema:
```bash
$ npx prisma db push
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

By default, the API will be available at http://localhost:3000.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Testing the API
You can test the API using any HTTP client like curl or Postman. The available routes are:

POST /auth/signup: Create a new user.
POST /auth/login: Authenticate a user and get a JWT.
GET /protected: Access a protected route with a valid JWT.

## License

Nest is [MIT licensed](LICENSE).
