# ECE Project on NodeJs : metrics & users

[![Build Status](https://travis-ci.com/adritoo/node-metrics.svg?branch=master)](https://travis-ci.com/adritoo/node-metrics)
[![HitCount](http://hits.dwyl.io/adritoo/node-metrics.svg)](http://hits.dwyl.io/adritoo/node-metrics)

ECE Fall 2019 project from DevOps & NodeJS courses.

## Features

  * Authentication
  * CRU users
  * CRUD metrics
  * Display data with chart (Chart.js)

### Before starting

To build and run this app locally you will need Node.js

### How to start

Clone the repository on your computer
```bash
git clone https://github.com/adritoo/node-project-metrics.git
cd node-project-metrics
```

Install dependencies
```bash
npm install
```

Populate database with the script
```bash
npm run pop
```

Build and run the project
```bash
npm run build
npm start
```
<<<<<<< HEAD

Go to `http://localhost:8080` and you should see the project running locally.
=======
Finally, navigate to `http://localhost:8080` and you should see the project being served and rendered locally.
>>>>>>> 4174b7a1a9471f20e685dd7c9ad49691a61bf942

## Running the tests

Run unit tests
```bash
npm run test
```
### Run in Docker

This app can also be launched in a Docker container.
Make sure you’re in the directory `node-project-metrics/` in a terminal or powershell, and build your bulletin board image:
```bash
docker build -t node-project-metrics .
```

Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built:
```bash
docker run -p 8080:8080 -d node-metrics
```

Go to `http://localhost:8080` and you should see the app running locally.

## Built With

* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [EJS](https://ejs.co/) - Embedded JavaScript templating
* [Level](https://github.com/Level/level) - Fast key-value storage library by Google
* [Chart.js](https://www.chartjs.org/docs/latest/) - Simple, clean HTML5 based JavaScript charts

## Authors

* [**Adrien BOURGET**](https://github.com/adritoo)

For more information, see the [CONTRIBUTORS](CONTRIBUTORS.md) file

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Routes


| Method | Route | Description |
| - | - | - |
| GET | / | Displays the homepage |
| GET | /connexion | It displays the login form |
| POST | /login | It logs the user in |
| GET | /logout | It signs out the current user |
| GET | /inscription | It displays the signup form |
| POST | /signup | It adds a user |
| GET | /user | Gets the current user |
| GET | /metrics | Gets all metrics |
| GET | /metrics/:id | Gets a metric given an id |
| POST | /new | Adds a new metric |
| POST | /update | Updates an existing metric |
| POST | /delete | Deletes a metric |
