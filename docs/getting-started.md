# ATTENTION:
I used Ubuntu 24.04.3 LTS, data package manager may be different, all depends on your linux distibution. 

Make sure, that Git installed on your machine.
* 'sudo apt update'
* 'sudo apt install git -y'
* 'git --version'
  
Copy that project
* cd ~/needed_directory
* git clone https://github.com/axenoy/NoDocker_SecuredProject.git
* cd NoDocker_SecuredProject
  
Download nginx
* sudo apt install nginx -y
* sudo systemctl status nginx

Download node.js and npm
* sudo apt install nodejs npm
* node -v && npm -v

Download postgre
* "sudo apt install postgresql -y' - PostgreSQL 16 will be installed. 
* sudo -i -u postgres - Enter to postgre
* psql - enter to database
* psql --version - check current version

Download dependencies
* cd NoDocker_SecuredProject/backend && npm install

Sudo ufw allow 3000
Exec setup-env.sh 
