import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const newUser = await db.user.create({
    data: {
      email: "spiderman@gmail.com",
      name: "Tony Parker",
      password: "aixakuki01",
      posts: {
        create: {
          title: "Hello, World!",
          content: "This is my fourth post.",
        },
      },
    },
  });

  // * Creamos el posteo por separado con una nueva consulta
  /*
  const newPost = await db.post.create({
    data: {
      title: "Hello, World!",
      content: "This is my first post.",
      author: {
        connect: {
          id: newUser.id,
        },
      },
    },
  });
*/
  console.log(newUser);
}

//TODO main();

async function listed() {
  const allUsers = await db.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log(allUsers);
  allUsers.map((user) => {
    //console.log(user.posts);
    const post = user.posts;
    post.map((p) => {
      console.log(p.content);
    });
  });
}

listed();

async function findFirst() {
  const user = await db.user.findFirst({
    where: {
      OR: [{ id: 2 }, { name: "MadHatter" }],
    },
  });
  console.log(user.email); // sino existe el usuario, devuelve null
}

//TODO findFirst();

async function borrar() {
  try {
    const user = await db.post.delete({
      where: {
        id: 1,
      },
    });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

//TODO borrar();

async function update() {
  //updateMany para actualizar varias filas.
  const user = await db.user.update({
    where: {
      id: 2,
    },
    data: {
      name: "SombrereroLoco",
    },
  });
}

//TODO update();

async function upsert() {
  const user = await db.user.upsert({
    where: {
      //? condición de búsqueda
      id: 22,
    },
    create: {
      //? si no existe, se crea
      name: "John Doe",
      password: "aixakuki01?",
      email: "johndoe@gmail.com",
    },
    update: {
      //? si existe, se actualiza
      name: "Average Joe",
    },
  });
  console.log(user);
}

//TODO upsert();

db.$disconnect();
////////////////////////// * FIN DE OPERACIONES CRUD ///////////////////////////////////
