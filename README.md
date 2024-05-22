# Table-Trick
Repository containing the Nest.js part of this project called TableTrick

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
This project emphasizes on authentication to know if the user that is going to enter the application is registered and what role he/she fulfills within the application itself.

## Installation

```bash
$ npm install
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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Installed Units
```txt
-@nestjs/common : 
This is the core module of Nest.js that provides the basic functionality for creating web applications and APIs.
It contains decorators, dependency injectors, exceptions, filters, and other essential elements for Nest.js development.
-@nestjs/config :
Enables management of application configuration through environment variables, configuration files, and other configuration providers.
It facilitates the loading and access to the application configuration in a structured way.
-@nestjs/jwt: 
Provides support for JSON Web Tokens (JWT) based authentication in Nest.js applications.
It allows the generation, verification and management of JWT tokens for user authentication.
-@nestjs/mapped-types:
Provides utilities for data type manipulation and transformation in Nest.js.
Facilitates the creation of extended and transformed data types from existing types.
-@nestjs/mongoose:
Provides integration with Mongoose, a MongoDB object modeling library for Node.js.
Allows easy connection and interaction with MongoDB databases in Nest.js applications.
-@nestjs/passport:
Provides support for strategy-based authentication in Nest.js.
It allows the integration of different authentication strategies, such as local, JWT, OAuth, among others, in Nest.js applications.
-@nestjs/-platform-express: 
Provides integration of Nest.js with Express, a web framework for Node.js.
Allows Express functionality to be used in Nest.js applications.
-@nestjs/swagger: 
Facilitates the generation of interactive API documentation using Swagger in Nest.js applications.
Allows API endpoints to be documented and visualized automatically.
-bcrypt : 
It is a password hashing library used to store passwords securely in Node.js applications.
It allows hashing passwords before storing them in the database.
-class-transformer : 
Provides functionality to transform objects and classes in Node.js applications.
Facilitates data transformation between different structures and formats.
-class-validator : 
Provides decorator-based data validation for classes and objects in Node.js applications.
Allows defining validation rules for class and object properties declaratively.
-jsonwebtoken : 
It is a library for the generation and verification of JWT tokens in Node.js applications.
It allows authentication and authorization based on JWT tokens in Node.js applications.
-mongoose : 
It is a MongoDB object modeling library for Node.js.
It allows interacting with MongoDB databases in a simple way and defining data models in Node.js applications.
-passport-jwt : 
A JWT authentication strategy for Passport, an authentication middleware for Node.js.
It enables JWT token-based authentication in Node.js applications using Passport.
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
