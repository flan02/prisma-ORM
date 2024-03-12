# prisma-ORM

https://www.prisma.io/docs/getting-started

All about Prisma.We will use javascript at start but then we will use typescript

ORM ->  Object Relational Mapping

Las partes principales de Prisma son tres:

@prisma/client

npx prisma migrate

npx prisma studio

Usaremos para el curso la bbdd SQLite que no tendremos que instalar nada extra.

Prisma lo utilizamos en desarrollo. @npm install prisma -D

npx prisma init -> Inicializa prisma en el proyecto (Pero con POSTGRESSQL)

Para SQLite -> npx prisma init --datasource-provider sqlite

Para crear las tablas con las relaciones -> npx prisma migrate dev --name "somename"

Abrimos prismastudio -> npx prisma studio. Por defecto en el puerto 5555