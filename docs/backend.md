Big part of backend logic based on [this Habr article](https://habr.com/ru/companies/otus/articles/828684/).

# .env
You will see the file .env int that project, BUT THIS IS A GUIDE REPOSITORY and this file should not be in the git remote repo, because of security standards(put it to .gitignore).

### src/db/postres.js
This config file sets up the PostgreSQL connection using env variables.

### ./server.js
This config file is app's entry point.

### routes/health.js
This config file is the database health check.

### routes/dbroutes.js
This config file sends HTTP-requets to controller, then controller file works with DB.

### controllers/userController.js
Operation logic with DB, using /db/postgres.js file.

### middleware/validateUser.js
The middleware file that check the correctness of user input data.

### middleware/errorHandler.js


### middleware/logger.js


### src/models/userModel.js
The description of tables and structure

