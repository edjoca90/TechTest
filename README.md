# TechTest

 Prueba Tecnica NodeJs

Local Instalation:

    Clone repository from github.com/edjoca90/TechTest.
    Install dependencies (npm install).
    npm install mysql2
    npm install --save sequelize-cli
    npm install --save sequelize
    npm install bcrypt
    npm install jsonwebtoken
    npm install swagger-ui-express swagger-autogen


    Configurate .env ( BD, JWT_SECRET, etc.).
    Execute migrations (npx sequelize-cli db:migrate).
    Start server (npm start).

Watch server whenever you make changes:
     npm install -g nodemon
     nodemon server.js

Test:

    Unitary test execution (npm test).

Docker Deployment:

    docker-compose up.
