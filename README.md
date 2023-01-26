# <p align="center"> :tada: O'Shop :tada: </p>

Le README de ce projet contient une version [française](#french) et une version [anglaise](#english). Cliquez sur la version que vous souhaitez lire !

This project's README presentation contains a [french](#french) and [english](#english) version. Click on the version you would like to read !

## <a id="french"></a> Bienvenue sur ce projet-portfolio e-commerce

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

Ce projet a été réalisé en utilisant NodeJS, Express, PostgresSQL et Sequelize côté Back-end, EJS (templating), HTML5, CSS, et SCSS côté Front-end. 

##  - Si vous êtes intéressé.e.s, vous pouvez mettre en place ce projet localement sur votre machine en suivant ces étapes :

1) Après avoir cloné de répertoire, assurez-vous d'installer les dépendances avec la commande `npm install`.
2) Mettez en place la base de données localement et récupérer les données nécessaires pour ce projet depuis le dossier `data` dans le fichier `create_db.sql`.
3) Remplissez votre fichier .env en vous appuyant sur le fichier `env_example` fourni.
4) Et voilà tout est prêt ! Vous pouvez désormais lancer ce projet localement en entrant la commande `nodemon index.js` ou `node-dev index.js` dans votre terminal.

----------------------------------

# - Extras

Cette section comporte la structure de la base de donnée et les identifiants de connexions.

### - Base de donnée

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

### - Connexion

Il existe deux types de comptes pour se connecter en fonction de leur rôle : `Admin` et `Client`.

Par défaut, les nouveaux comptes créés auront le rôle `Client`.

### - Identifiants de connexion

Si vous souhaitez vous connecter en tant que `Admin`, entrez ces informations : email : `admin@admin.com`, mot de passe : `admin`.

Si vous souhaitez vous connecter en tant que `Client`, entrez ces informations : email : `johndoe@client.com`, mot de passe : `client`.

Pour chaque compte stocké dans la base de donnée, vous pouvez également vous connecter en suivant ce pattern : email : `prénomnom@client.com`, mot de passe : `prénomnom`.

Ou alors, vous pouvez créer votre propre compte et essayer au passage la fonctionnalité d'inscription et de connexion en même temps !

:warning::warning: Bien que les emails ne sont pas sensibles à la casse, les mots de passe le sont pour des raisons de sécurité. Vérifiez que vous avez bien entré votre mot de passe.  :warning::warning:

Vous pouvez également réinitialiser votre base de donnée en important le fichier `create_db.sql` à nouveau.


---------------------------------

### Merci pour l'intérêt que vous avez porté pour ce projet ! A bientôt !

---------------------------------

## <a id="english"></a> Welcome to this E-Shop portfolio project !

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

This project was made using NodeJS, Express, PostgresSQL and Sequelize on the Back-end side, EJS (for templating), HTML5, CSS, and SCSS for the Front-end. 

##  - If you are interested, you can set this project up locally on your device by following the detailed guide below.

1) After cloning this repository, make sure to install the required dependencies with `npm install`.
2) Setup the database locally and fetch in the `data` folder the file named `create_db.sql` which contains all the required data for this project.
3) Fill in your .env file based on the `env_example` file provided.
4) And voilà everything is ready ! You can now launch this project locally by typing `nodemon index.js` or `node-dev index.js` in the terminal.

----------------------------------

# - Extras

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

### - Login informations

For logins, there are 2 types of accounts based on their roles : `Admin` and `Client`.

By default, all newly created accounts will be `Client` accounts.

### - Login credentials

If you would like to use the `Admin` account, enter in the form : email : `admin@admin.com`, passsword : `admin`.

If you would like to use the `Client` account, enter in the form : email : `johndoe@client.com`, password : `client`.

All other accounts stored in the database will follow this pattern : email : `firstnamelastname@client.com`, password : `firstnamelastname`

Or, you can create your own account and try out the sign-in and login form at the same time ! :thumbsup:

:warning::warning: While emails are not case-sensitive, passwords are for safety measures. Make sure to double-check that your password is typed correctly.  :warning::warning:

You can also reset your database by importing the `create_db.sql` file again.

---------------------------------

### Thank you for showing interest to this project ! See you next time ! :wave:
