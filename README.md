# <p align="center"> :tada: O'Shop :tada: </p>

[test](#english)



Welcome to this E-Shop portfolio project !

The point of this project was to practice implementing common e-shop features such as :

- Setting up the main page :white_check_mark: 
- Open an article page :white_check_mark: 
- Sorting by categories :white_check_mark: 
- Managing authentications and user sign-ins :white_check_mark: 
- Secured routes :white_check_mark: 
- Secured interactions with the database :white_check_mark: 
- A fully functional cart (excluding purchase) :white_check_mark: 
- Dynamic rendering (From Back-end to Front-end + DOM) :white_check_mark: 
- Responsive css (using CSS and SCSS) :white_check_mark: 

This project was made using NodeJS, Express, PostgresSQL and Sequelize on the Back-end side, EJS (for templating), HTML5, CSS, and SCSS for the Front-end. 

##  - If you are interested, you can view my work by following the detailed guide below.

1) After cloning this repository, make sure to install the required dependencies with `npm install`.
2) Setup the database locally and fetch in the `data` folder the file named `create_db.sql` which contains all the required data for this project.
3) Fill in your .env file based on the `env_example` file provided.
4) And voilà everything is ready ! You can now launch this project locally by typing `nodemon index.js` or `node-dev index.js`.

----------------------------------

# - Extras and guide

This section will provide you with the database structure and the login credentials.

### - Database

Here is Mocodo representation of the database we are using :

![image](https://user-images.githubusercontent.com/115977341/214824902-b2841cd4-4cff-47bb-abef-68872ecc063c.png)

And the Mocodo code itself : 

```
users: code_users, firstname, lastname, email, password, role_id, created_at, updated_at
write, 1N users, 11 review
review: code_review, code_users, code_figurine, note, title, message
have, 11 review, 1N figurine
figurine: code_figurine, name, description, size, category

belong, 11 users, 1N roles
roles: code_roles, name
```
<a name="english"> English </a>

### - Login informations

For logins, there are 2 types of accounts based on their roles : `Admin` and `Client`.

By default, all newly created accounts will be `Client` accounts.

### - Login credentials

If you would like to use the `Admin` account, enter in the form : email : `admin@admin.com`, passsword : `admin`.

If you would like to use the `Client` account, enter in the form : email : `johndoe@client.com`, password : `client`.

All other accounts stored in the database will follow this pattern : email : `firstnamelastname@client.com`, password : `firstnamelastname`

Or, you can create your own account and try out the sign-in and login form at the same time ! :thumbsup:

:warning::warning: While emails are not case-sensitive, passwords are for safety measures. Make sure to double-check that your password is typed correctly.  :warning::warning:

---------------------------------

### Thank you for showing interest to this project ! See you next time :wave: 
