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
Noé Thierry Tchikpo — Étudiant ingénieur ESEO Angers
