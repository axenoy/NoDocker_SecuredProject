Big part of backend logic based on [this Habr article](https://habr.com/ru/companies/otus/articles/828684/).

# .env
You will see the file .env int that project, BUT this file should not be in the git repository, because of security standards(put to .gitignore).

### src/db/postres.js
This config file sets up the PostgreSQL connection using env variables.

### src/server.js
This config file makes testing request to make sure, that connection with database is established. 
