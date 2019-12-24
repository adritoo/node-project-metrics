# node-metrics

[![HitCount](http://hits.dwyl.io/adritoo/node-metrics.svg)](http://hits.dwyl.io/adritoo/node-metrics)

Simple web API to work on metrics

## Features

  * Authentication
  * CRUD users
  * CRUD metrics

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To build and run this app locally you will need Node.js

### Quick start

Clone the repository
```bash
git clone https://github.com/adritoo/node-metrics.git
cd node-metrics
```

Install dependencies
```bash
npm install
```

Populate database
```bash
npm run pop
```

Build and run the project
```bash
npm run build
npm start
```

Finally, navigate to `http://localhost:8080` and you should see the project being served and rendered locally.

## Built With

* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [EJS](https://ejs.co/) - Embedded JavaScript templating
* [Level](https://github.com/Level/level) - Fast & simple storage
* [Chart.js](https://www.chartjs.org/docs/latest/) - Simple yet flexible JavaScript charting

## Authors

* [**Adrien BOURGET**](https://github.com/adritoo)

For more information, see the [CONTRIBUTORS](CONTRIBUTORS.md) file

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Routes


| Method | Route | Description |
| - | - | - |
| GET | / | Displays the homepage |
| GET | /connexion | Displays the login form |
| POST | /login | Logs the user in |
| GET | /logout | Signs out the current out |
| GET | /inscription | Displays the signup form |
| POST | /signup | Adds a user |
| GET | /user | Gets the current user |
| GET | /metrics | Gets all metrics |
| GET | /metrics/:id | Gets a metric given an id |
| POST | /new | Adds a new metric |
| POST | /update | Updates an existing metric |
| POST | /delete | Deletes a metric |
