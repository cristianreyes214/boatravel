# BoatravelApp

This project is about a platform for the purchase of boat tickets, hotel reservations and the purchase of tourist plans, scheduled in Angular


## Requirements

Install Node js, Angular CLI 9, and xampp.


## Setup

1. Create "boatravel-app" folder inside xampp htdocs folder.
2. git init inside the boatravel-app folder
3. git remote add origin https://github.com/cristianreyes214/boatravel.git
4. git fetch --all (This will take a while until all objects are downloaded)
5. git reset --hard origin/master (This will discard all your local changes and just overwrite everything with a copy from the remote branch)
6. Install dependencies npm i --save-dev @angular-devkit/build-angular
7. Install dependencies npm i bootstrap jquery @popperjs/core
8. Run the project npm start 


## Database setup

1. Download sql file "boatravel (2).sql"
2. Open xampp control panel and activate Apache and MySQL
3. Open in browser http://localhost/phpmyadmin/
4. Create new database in New
5. Name: boatravel utf8mb4_spanish_ci
6. Enter the created database and select the import option
7. Load the sql file "boatravel (2).sql"


## Git commands

* git status  // Verify changes
* git remote -v  // Verify pointers to repositories
* git add <file>  // Add the file to the change
* git add .  // Add all files (Use cautiously)
* git rm <file>  // Mark as deleted on change
* rm <file>  // Delete the file from the file system
* git commit -m "message"  // Create the commit with a message
* git push prompter branch example, git push origin master  // Send the changes to the targeted repository and branch
* git pull prompter branch example, git pull origin master // Bring the repository and branch changes pointed
* git remote add prompter  // Create a new pointer for the given repository
* git remote remove prompter  // Delete the repository pointer

If is your firstime using git then configure your basic information using this commands.

git config --global user.email "you@example.com"
git config --global user.name "Your Name"
