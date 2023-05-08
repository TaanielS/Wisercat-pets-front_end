# Wisercat 2023 front-end

Link for the back-end application: [https://github.com/TaanielS/Wisercat-pets-back_end](https://github.com/TaanielS/Wisercat-pets-back_end)\
The program can be started by running `ng serve` in the main folder. It can be seen on `http://localhost:4200/`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.\
Dependencies' versions can be found in package.json.

### Tasks:
*	~~Create a Spring Boot application.~~
*	~~User is displayed a list of pets that the user has entered (see the provided html).~~
*	~~User can add pets (see the provided html).~~
*	~~A pet has a name, an identification code, a type (CAT, DOG, etc) and a fur color.~~
*	~~When a new pet is saved, validate all mandatory fields.~~
*	~~Store all input data to database.~~
*	~~Values of select lists have to be populated with data from database.~~

### Optional tasks:
*	~~User can edit pets.~~
*	Log in with one of the created user accounts (registration does not have to be implemented).
*	Create 3 user accounts into the database (username and password). `(back-end branch withUser has this)`
*	User is not allowed to see other user’s pets.
*	~~User can sort pets by all columns in the table.~~
*	~~A pet has a country of origin.~~
*	~~Validate form fields both inline and in the back-end.~~

### Technical requirements:
*	~~Application has to run with 1 click or command.~~
~~If front- and back-end are in different projects, then 1 click/command per project.~~
*	~~Use Spring Boot.~~
*	~~Embed a H2 database into the application.~~
*	~~Use Liquibase as a database migration tool, execute SQL scripts on app startup.~~
*	~~Use Angular for front end.~~
*	~~Use Bootstrap for design and styling. Do not use multiple CSS libraries.~~
*	~~Use latest versions of all used technologies.~~
*	~~API has to be RESTful.~~

### TODO:
*   Show, allow to add and modify only pets that belong to the signed in user.

### Thoughts:
*   I was not familiar with Angular, so it took some time to get it going. Luckly I knew some Vue.js so I knew the basics of it. I had to do some googeling to find solutions that are efficient. Implementing front-end took more time than a back-end, around 16 hours. Adding sorting to the table took the most time, but it's nice that there are documentations like [this](https://material.angular.io/components/sort/overview). I would like to add an autofill to a form when `Edit pet` is clicked.
