## Support Project API

This project is an personal project focused in learning. My objective is practice the basics principles of build a simple REST API using Node.js.

I called this project as "Support" because my idea is develop a system where users are enabled to support and sponsor any social project.

## Business Rules

- ### PUBLIC

1. All open projects can be public, it means that any public request can get a list of public projects.
   1. GET (/projects).

- ### PROJECTS

1. A project must be created by a registered user. Once a user has been registered, they can create a project. They can specify what category the project belongs to, if the project has a recurrency billing, and set a goal of amount or subscribers.
   1. POST (/new-project) - login required.
2. Before releasing the project, the user edits or changes any information.
   1. PUT (/edit-project) - login required.
3. Before releasing, the user can delete the project.
   1. DELETE (/delete-project) - login required.
4. After creation, the user can release the project.
   1. PUT (/release-project) - login required.
5. After a project has been created, the user can’t delete the project. Only can archive.
   1. PUT (/archive-project) - login required.

- ### USERS

1. To do any kind of action, the user must be registered.
   1. POST (/register).
2. After registration, the user must login.
   1. POST (/login).
3. There are two ways to support a project: donation or subscription. To make a simple donation, the user has to use PIX or Credit Card to pay. To make a subscription, the user has to use a Credit Card.
   1. POST (/payment) - login required.

### Architecture

The following diagram show how i thought an architecture to apply 3 core concepts, they are: TDD, Cloud Storage and Migrations.

![](assets/system_design.png 'API Design')

### Technologies

##### TDD

> Jest
> Supertest

##### API

> Node.js
> Express
> Typescript

##### BUCKET

> Amazon S3

##### Database

> PostgreSQL (Docker Container)
