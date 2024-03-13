import { PrismaClient } from '@prisma-mysql/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: any | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
