# CODERSCAMP 2021 NODE.JS API PROJECT: RESTAURANTS CHAIN MANAGEMENT SYSTEM

## Table of contents

-   [Authors](#authors)
-   [Acknowledgments](#acknowledgments)
-   [Overview](#overview)
-   [Docs](#docs)
-   [How to run the project](#how-to-run-the-project)

## Authors

To code this project our team collaborated as part of CodersCamp Bootcamp. The restaurant API p was coded by students and delivered on 24.03.2022 for demo presentation. Please feel free to check all collaborator's Github profiles to find out more about them and to see their projects.

Students:

-   [Hanna Kozak](https://github.com/hannakozak)
-   [Agnieszka Urbanowicz](https://github.com/axseinga)
-   [Krzysztof Kos](https://github.com/Kosik33i6)
-   [Sylwia Prusak](https://github.com/sylcym)

## Acknowledgments

Big shoutouts to our Mentors: [Radek Bajor](https://github.com/radekwojpl) and [Mateusz Ossoliński](https://github.com/m-ossolinski).

## Overview

The goal was to create API that will allow to manage restaurant chains. The data can be modified with three types of roles (user, owner and admin) which give different level of access to resources.

Collections:

-   users,
-   restaurantChains,
-   restaurants,
-   tables.

For authentication we use JWT (access token with expiration of 60 days with refresh token).

### Docs

Please check out below docs for all information about restaurant chains API:

-   [HTTP Status Codes](docs/statusCodes.md)
-   [Auth](docs/auth.md)
-   [User](docs/user.md)
-   [RestaurantChains](docs/restaurantChains.md)
-   [Restaurants](docs/restaurant.md)
-   [Tables](docs/tables.md)
-   [Reservations](docs/reservations.md)

### How to run the project

To run the app follow steps below on your local machine:

1. Clone git repository and open file on your local device in Code editor.
2. Run `npm install` command to initialise the project.
3. Run `npm run start` to start API.

The API will run on port [http://localhost:5050](http://localhost:5050).
