import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getBooks = async () => {
  const books = await prisma.book.findMany();
  return books;
};

async function getAuthors() {
  const authors = await prisma.author.findMany();
  return authors;
}

async function createBook() {
  const newBook = await prisma.book.create({
    data: {
      name: 'El principito',
      year: 1943,
    },
  });
  return newBook;
}

async function main() {
  console.log(await getBooks());
  console.log(await getAuthors());
  console.log(await createBook());
}

main().then(async () => {
  await prisma.$disconnect();
});
