# <p align="center"> :tada: O'Shop :tada: </p>

Le README de ce projet contient une version [française](#french) et une version [anglaise](#english). Cliquez sur la version que vous souhaitez lire !

This project's README presentation contains a [french](#french) and [english](#english) version. Click on the version you would like to read !

## <a id="french"></a> :wave: Bienvenue sur ce projet-portfolio e-commerce !

L'objectif de ce projet était de pratiquer l'implémentation de fonctionnalités classiques d'un site d'e-commerce, telles que :

- Mettre en place la page principale :white_check_mark: 
- L'accès à une page produit :white_check_mark: 
- Filtrer les produits par catégories :white_check_mark: 
- Gérer l'authentification et l'inscription :white_check_mark: 
- Routes sécurisées à accès limités :white_check_mark: 
- Intéractions sécurisées avec la base de données :white_check_mark: 
- Un panier totalement fonctionnel (hormis l'étape de paiement/achat) :white_check_mark: 
- Rendu dynamique (Back-end au Front-end + DOM) :white_check_mark: 
- Responsive CSS (utilisation de CSS et SCSS) :white_check_mark: 
- Pratiquer Regex :white_check_mark:

Ce projet a été réalisé en utilisant NodeJS, Express, PostgresSQL et Sequelize côté Back-end, EJS (templating), HTML5, CSS, et SCSS côté Front-end. 

## :rocket: Si vous êtes intéressé.e.s, vous pouvez mettre en place ce projet localement sur votre machine en suivant ces étapes :

1) Après avoir cloné le répertoire, assurez-vous d'installer les dépendances avec la commande `npm install`.

2) Créez la base de donnée PostgreSQL :

&nbsp; &nbsp; &nbsp; &nbsp;  a) Connectez vous en tant que `postgres` en tapant la commande : `sudo -u -i postgres psql`.

&nbsp; &nbsp; &nbsp; &nbsp;  b) Créez le propriétaire de la base de donnée du projet : `CREATE ROLE "username" WITH LOGIN PASSWORD 'password';`

&nbsp; &nbsp; &nbsp; &nbsp;  c) Créez la base de donnée : `CREATE DATABASE "dbname" OWNER "username";`

&nbsp; &nbsp; &nbsp; &nbsp;  d) Tapez `exit` pour vous déconnecter du superutilisateur `postgres`.

&nbsp; &nbsp; &nbsp; &nbsp;  e) Importez la base de donnée : `psql -U "username" -d "dbname" -f ./data/create_db.sql`, puis tapez le MDP de l'étape B.

&nbsp; &nbsp; &nbsp; &nbsp;  f) Connectez-vous à la base de donnée : `psql -U "username" -d "dbname"`, retapez votre MDP.

&nbsp; &nbsp; &nbsp; &nbsp;  g) Voilà la base de donnée est créée et importée ! :tada: 

3) Remplissez votre fichier .env en vous appuyant sur le fichier `env_example` fourni. (Attention à bien mettre votre "username", "password" et "dbname" définis à l'étape **2)b) et 2)c)**.

4) Et voilà tout est prêt ! Vous pouvez désormais lancer ce projet localement en entrant la commande `nodemon index.js` ou `node-dev index.js` dans votre terminal.

----------------------------------

# :notebook: Extras

Cette section comporte la structure de la base de donnée et les identifiants de connexions.

### :computer: Base de donnée

Ci-dessous une représentation Mocodo de la base de donnée utilisée :

![image](https://user-images.githubusercontent.com/115977341/214824902-b2841cd4-4cff-47bb-abef-68872ecc063c.png)

Et voici le code Mocodo :

```
users: code_users, firstname, lastname, email, password, role_id, created_at, updated_at
write, 1N users, 11 review
review: code_review, code_users, code_figurine, note, title, message
have, 11 review, 1N figurine
figurine: code_figurine, name, description, size, category

belong, 11 users, 1N roles
roles: code_roles, name
```

### :lock: Connexion

Il existe deux types de comptes pour se connecter en fonction de leur rôle : `Admin` et `Client`.

Par défaut, les nouveaux comptes créés auront le rôle `Client`.

### :information_source: Identifiants de connexion

Si vous souhaitez vous connecter en tant que `Admin`, entrez ces informations : email : `admin@admin.com`, mot de passe : `admin`.

Si vous souhaitez vous connecter en tant que `Client`, entrez ces informations : email : `johndoe@client.com`, mot de passe : `client`.

Pour chaque compte stocké dans la base de donnée, vous pouvez également vous connecter en suivant ce pattern : email : `prénomnom@client.com`, mot de passe : `prénomnom`.

Ou alors, vous pouvez créer votre propre compte et essayer au passage la fonctionnalité d'inscription et de connexion en même temps !

:warning::warning: Bien que les emails ne sont pas sensibles à la casse, les mots de passe le sont pour des raisons de sécurité. Vérifiez que vous avez bien entré votre mot de passe.  :warning::warning:

Vous pouvez également réinitialiser votre base de donnée en important le fichier `create_db.sql` à nouveau.


---------------------------------

### <p align="center"> :wave: Merci pour l'intérêt que vous avez porté pour ce projet ! A bientôt ! :wave: </p> 

<br/>

<br/>

<br/>

<br/>

# <p align="center"> :tada: O'Shop :tada: </p>

## <a id="english"></a> :wave: Welcome to this E-Shop portfolio project !

The point of this project was to practice implementing common e-shop features such as :

- Setting up the main page :white_check_mark: 
- Open an article page :white_check_mark: 
- Sorting by categories :white_check_mark: 
- Managing authentications and user sign-ins :white_check_mark: 
- Secured routes and limited access :white_check_mark: 
- Secured interactions with the database :white_check_mark: 
- A fully functional cart (excluding the purchasing step) :white_check_mark: 
- Dynamic rendering (From Back-end to Front-end + DOM) :white_check_mark: 
- Responsive css (using CSS and SCSS) :white_check_mark: 
- Practice Regex :white_check_mark:

This project was made using NodeJS, Express, PostgresSQL and Sequelize on the Back-end side, EJS (for templating), HTML5, CSS, and SCSS for the Front-end. 

## :rocket: If you are interested, you can set this project up locally on your device by following the detailed guide below.

1) After cloning this repository, make sure to install the required dependencies with `npm install`.

2) Create the PostgreSQL database :

&nbsp; &nbsp; &nbsp; &nbsp;  a) Login as the superuser `postgres` by typing : `sudo -u -i postgres psql`.

&nbsp; &nbsp; &nbsp; &nbsp;  b) Create the owner of the soon to be created database : `CREATE ROLE "username" WITH LOGIN PASSWORD 'password';`

&nbsp; &nbsp; &nbsp; &nbsp;  c) Create the database : `CREATE DATABASE "dbname" OWNER "username";`

&nbsp; &nbsp; &nbsp; &nbsp;  d) Type `exit` to disconnect from the superuser `postgres`.

&nbsp; &nbsp; &nbsp; &nbsp;  e) Import the database : `psql -U "username" -d "dbname" -f ./data/create_db.sql`, then type the password defined in step B.

&nbsp; &nbsp; &nbsp; &nbsp;  f) Login to the project's database : `psql -U "username" -d "dbname"`, type your password once more.

&nbsp; &nbsp; &nbsp; &nbsp;  g) Congratulations the database has been created ! :tada: 

3) Fill in your `.env` file based on the `even_example` file provided. (Be careful to replace the "username", "password" and "dbname" by the ones defined in step **2)b) and 2)c)**.

4) And voilà everything is ready ! You can now launch this project locally by typing `nodemon index.js` or `node-dev index.js` in the terminal.

----------------------------------

# :notebook: Extras

This section will provide you with the database structure and the login credentials.

### :computer: Database

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

### :lock: Login informations

For logins, there are 2 types of accounts based on their roles : `Admin` and `Client`.

By default, all newly created accounts will be `Client` accounts.

### :information_source: Login credentials

If you would like to use the `Admin` account, enter in the form : email : `admin@admin.com`, passsword : `admin`.

If you would like to use the `Client` account, enter in the form : email : `johndoe@client.com`, password : `client`.

All other accounts stored in the database will follow this pattern : email : `firstnamelastname@client.com`, password : `firstnamelastname`

Or, you can create your own account and try out the sign-in and login form at the same time ! :thumbsup:

:warning::warning: While emails are not case-sensitive, passwords are for safety measures. Make sure to double-check that your password is typed correctly.  :warning::warning:

You can also reset your database by importing the `create_db.sql` file again.

---------------------------------

### <p align="center"> :wave: Thank you for showing interest to this project ! See you next time ! :wave: </p>
