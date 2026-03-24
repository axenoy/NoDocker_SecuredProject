# ATTENTION:
I used Ubuntu 24.04.3 LTS, data package manager may be different, all depends on your linux distibution. 

### Make sure, that Git installed on your machine:
* 'sudo apt update'
* 'sudo apt install git -y'
* 'git --version'
  
### Copy that project:
* cd ~/needed_directory
* git clone https://github.com/axenoy/NoDocker_SecuredProject.git
* cd NoDocker_SecuredProject
  
### Download nginx:
* sudo apt install nginx -y
* sudo systemctl status nginx

### Download node.js and npm:
* sudo apt install nodejs npm
* node -v && npm -v

### Download postgre:
* "sudo apt install postgresql -y' - PostgreSQL 16 will be installed. 
* sudo -i -u postgres - Enter to postgre
* psql - enter to database
* psql --version - check current version
* 
# Attention 
.env file should not be in remote repository, carefully read README.MD
That this config variables must be in .env file(NoDocker_SecuredProject/backend/.env)

### Set up the postgres. 
* sudo -i -u postgres
* psql
* CREATE USER nodocker WITH PASSWORD 'testpswd';
* CREATE DATABASE testdb OWNER nodocker;
* sudo nano /etc/postgresql/*/main/pg_hba.conf - change every 'peer' method on 'md5'.
* sudo systemctl daemon-reload
* cd ~/NoDocker_SecuredProject/sql && psql -U nodocker -d testdb -f schema.sql
* Write down testpswd password

### Download dependencies:
* cd NoDocker_SecuredProject/backend && npm install

### Firewall:
* sudo ufw enable
* sudo ufw allow 3000
* sudo ufw staus verbose

### Script:
* chmod +x env-setup.sh
* sudo ./env-setup.sh
