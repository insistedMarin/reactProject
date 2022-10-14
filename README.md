# reactProject
# Projet name

# Guess Word #

# Court Description sur le projet.

Le projet en cours de Micro-sevice à pour but de recréer le jeu en ligne SUTOM. 
Le but du jeu est de deviner le mot du jour. Le mot change tous les jours, nous avons au totalité 7 tentatives.
Pour chaque tentative, nous écrire des mots pour le deviner.
Lorsque nous réussisons à trouver la bonne lettre et qu'elle est placée à sa bonne place, la case devient vert.
Si la lettre est contenu dans le mot mais qu'elle n'est pas à sa bonne place, la case devient orange.

A vous de jouer, pour deviner le mot, avec le moins de tentative possible.

# Comment faire fonctionner le projet


# Installation

- React 
- Npm 
- Node 16.18 
- docker PostGreSQL


# lancement du projet 

- Move to the project directory: start 5 servers

cd auth 
    npm start 

cd client 
    npm install
    npm start

cd server 
    npm start

cd auth_client
    npm install
    npm start 

cd database 
    npm start

host: localhost:3000

# Déroulé du projet

Nous avons voulu utiliser pour la première fois la bibiothèque React, afin de découvrir de nouvelle bibliothèque pour le projet, une bibliothèque que nous avons eu très peu d'occasion de l'exercer, cela nous a rajouter une difficulté en plus, mais qui nous a permit.

# Les prochaines étapes

-Lancement du projet avec Docker, nous avons réussi à mettre en place un DockerFile pour chaque microservice et un docker-compose pour lancer les applications mais nous avons rencontré plusieurs problème liée à notre machine(notameent un problème de stockage).

-Reverse proxy, nous avons pu s'exerser sur la mise en place d'un reverse proxy, mais étant sur windows, nous n'avons pas pu mettre en place le reverse proxy

-Nous avons essayé d'utiliser jwt pour l'authentification de connexion, mais malheureusement cela n'a pas fonctionné à la fin et nous avons mis le code qui a essayé d'introduire jwt sur une autre branche 'luo'.

# Conclusion

Nous avons pu expériementer en groupe, cette nouvelle technique de développement, ce qui nous a permis de travailler avec un nouveau style d'architecture.

Nous remercions encore Monsieur Simon Gomez pour votre encadrement durant ces plusieurs séances de cours.




