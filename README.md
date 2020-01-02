# WHAT'S NEXT? @gaOutcomes

## Link to Live Website

https://gaoutcomes-frontend.herokuapp.com/

## Two Separate Repo to Deploy
https://github.com/wlaw019/gaoutcomes_frontend
https://github.com/wlaw019/gaoutcomes-backend

## Original Single Repo
https://github.com/wlaw019/wlaw019.github.io

## Overview

gaOutcomes tracker built for General Assembly career coaches.  App can summarize and chart quantitative data identifying students in need of attention.  Notes can be added for each student to aid follow-up.  

## Features

- User can create course and cohort with different graduation date.  Data goes into the Postgres table "courses"
- User can edit and delete a specific course.  Corresponding students taking that course will also be deleted from a separate Postgres table "students"
- User can add students to a specific course.  Data goes into the Postgres table "students" with foreign course_id key.
- User can add and edit date of 1st offer, number of interviews and also be able to delete the student from a course.
- Search Time = Date of 1st offer - Graduation date unless it is in pending status then the Search Time will be based on today's date.
- Forms can be not submitted unless all the required fields are completed
- Highlight student with the longest Search Time within a course
- Toggle Notes to display

## Resources Used

- https://node-postgres.com/features/connecting
- https://expressjs.com/en/resources/middleware/cors.html
- https://medium.com/@olinations/build-a-crud-template-using-react-bootstrap-express-postgres-9f84cc444438
- https://www.taniarascia.com/node-express-postgresql-heroku/#deploy-app-to-heroku
- https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/
- http://www.postgresqltutorial.com/postgresql-add-column/
- https://devconnected.com/how-to-unstage-files-on-git/
- https://dev.to/paulasantamaria/change-the-timezone-on-a-heroku-app-2b4
- https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a
- https://imagecolorpicker.com/en
- https://techcrunch.com/2016/09/21/talking-self-driving-cars-ipos-and-whats-next-with-true-ventures/

## Wire Framing
![wire framing](public/img/wireFraming.jpg)

## Technologies Used

- HTML
- CSS
- JavaScript
- ReactJS
- Node
- Express
- PostgresSQL
- Chart.js
- Heroku

## Backend Dependencies

- cors
- dotenv
- express
- pg

## gaoutcomes-backend
- table.sql: codes to initialize the database
```terminal
cat init.sql | heroku pg:psql postgresql-animate-01864 --app gaoutcomes-backend
```
- controllers: courses.js and students.js
- server.js

### students.js (4 Routes)
- GET: get all students left join courses and ordered by student's username
- POST: create a new student.  Modify interviews and dateoffer if empty string in order to satisfy data type specified in the database 


### Wishlist/Purchased: Find wishlist based on username and complete.  User can enforce additional sort and filter
- Pulls in entire wishlist from the database and display the appropriate ones on index
```html
<div class="card sticky-action" ng-repeat="item in ctrl.wishlist
| filter:{'complete':false}:true | filter:{'recipientCategory':ctrl.searchBox}:true | filter:{'username':ctrl.loggedInUser.username}:true
| orderBy: order" ng-class="(item.priority === 'high') ? 'high' : ''">
```
