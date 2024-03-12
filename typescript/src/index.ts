import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

const insert = async () => {
  const newProduct = await db.product.create({
    data: {
      name: "Dell XPS 13",
      price: 1000.00,
      description: "A Dell laptop",
    }
  })
  console.log(newProduct);
}

insert()