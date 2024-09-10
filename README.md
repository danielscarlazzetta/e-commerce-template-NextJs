# Descripcion

## Correr proyecto dev

1. clonar repo
2. Crear copia de ~.env~ y renombrarlo a ~.env.template~ y cambiar variables de entorno
3. instalar dependencias ``` npm install / npm i```
4. Levantar base de datos ```Docker compose up -d```
5.  correr proyecto ``` npm run dev ```

## Correr proyecto en pro




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Desarrollo
 se estan utilizando iconos de ionic
 se instala de esta forma

 ```bash
 npm i react-icons --save
```
 
 Agregado de Zustand

 ```bash
 npm install zustand
```


 Agregar clsx, este permite agregar clases condicionales de tailwind

 ```bash
 npm i clsx
```

 Agregar swiper libreria de slide para img

```bash
 npm install swiper
```

## Instalacion de prisma

```
npm install prisma --save-dev
```
npx prisma init --datasource-provider PostgreSQL

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started

## fin prisma