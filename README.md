## Lancer le projet en local

### Prérequis
- Node.js 18 ou supérieur
- Le backend students-api doit être lancé et en cours d'exécution sur http://localhost:8080

### Étapes

**1. Cloner le repository**

```bash
git clone https://github.com/ntchikpo/students-frontend.git
cd students-frontend
```

**2. Installer les dépendances**

```bash
npm install
```

**3. Lancer le frontend**

```bash
npm run dev
```

L'application est accessible sur `http://localhost:5173`. Ouvrez cette adresse dans votre navigateur pour accéder à l'interface de gestion des étudiants.

### Fonctionnalités disponibles

- Ajouter, modifier et supprimer des étudiants
- Rechercher un étudiant par nom
- Afficher la liste complète des étudiants

### Remarque

Si le backend n'est pas lancé, l'interface ne pourra pas charger les données. Assurez-vous que students-api tourne correctement avant d'ouvrir l'application :

👉 https://github.com/ntchikpo/students-api

# Students App - Fullstack Java Spring Boot + React TypeScript

Application fullstack de gestion d'étudiants.

## Technologies
### Backend
- Java 17
- Spring Boot 4.1
- Spring Data JPA / Hibernate
- PostgreSQL
- Maven

### Frontend
- React 19
- TypeScript
- Vite
- Axios

## Fonctionnalités
- Afficher la liste des étudiants
- Ajouter un étudiant
- Modifier un étudiant
- Supprimer un étudiant
- Recherche par nom
- Validation des données
- Gestion des erreurs HTTP (400, 404, 204)

## Architecture Backend
| Couche | Fichier | Rôle |
|--------|---------|------|
| Controller | StudentController.java | Routes HTTP REST |
| Service | StudentService.java | Logique métier |
| Repository | StudentRepository.java | Accès base de données |
| Entity | Student.java | Modèle de données |

## Endpoints API
| Méthode | Route | Description |
|---------|-------|-------------|
| GET | /api/students | Tous les étudiants |
| GET | /api/students/{id} | Étudiant par id |
| GET | /api/students/search?nom= | Recherche par nom |
| POST | /api/students | Ajouter un étudiant |
| PUT | /api/students/{id} | Modifier un étudiant |
| DELETE | /api/students/{id} | Supprimer un étudiant |

## Auteur
Noé Thierry Tchikpo - Étudiant ingénieur ESEO Angers
