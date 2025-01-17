# IPL-social

**Nom :** SMEKENS  
**Prénom :** CHRIS  
**Email Vinci :** chris.smekens@student.vinci.be  

**URL GitHub :** https://github.com/chris-smekens-vinci/IPL-social.git

## Description du projet
Ce projet implémente un environnement DevOps configuré avec GitHub Actions. L'objectif est de valider automatiquement une fonction JavaScript permettant de vérifier la validité des mots de passe. 

La validation utilise une approche **Test-Driven Development (TDD)**, avec des tests définis dans un fichier séparé. Les pipelines CI s’exécutent automatiquement pour garantir la qualité du code lors de chaque Pull Request (PR) vers la branche principale (`main`).

## Fonctionnalités principales
- **Pipeline CI/CD** : Configuré via GitHub Actions pour exécuter les tests de manière automatique.
- **Tests TDD** : Vérification des règles spécifiques de validation des mots de passe.
- **Automatisation** : Les tests s’exécutent lors de chaque PR pour garantir une intégration continue.

## Commande pour exécuter les tests
Pour lancer les tests en local, exécutez la commande suivante :
```bash
npm test