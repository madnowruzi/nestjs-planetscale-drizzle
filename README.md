<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://avatars.githubusercontent.com/u/28507035?s=200&amp;v=4" height="64" alt="NestJS Logo">
  </a>
  <a href="https://planetscale.com/" target="blank">
    <img src="https://avatars.githubusercontent.com/u/35612527?s=200&amp;v=4" height="64" alt="PlanetScale Logo">
  </a>
  <a href="https://orm.drizzle.team/" target="blank">
    <img src="https://avatars.githubusercontent.com/u/108468352?s=200&amp;v=4" height="64" alt="Drizzle Logo">
  </a>
</p>

## Description

A sample project to help you use PlanetScale in a NestJS app.

## Setting up the database

<small>If you need help you can watch this [youtube video](https://www.youtube.com/watch?v=KS5PQDEjDx0)</small>

- Sign up at PlanetScale and create a database
- Promote your main branch to production
- Create a dev branch
- Duplicate `.env.local` and name it `.env`
- Copy the `DATABASE_URL` for both branches to the `.env` file

## Installation

```bash
$ npm install
$ npm run db:push
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
