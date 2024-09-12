import { PrismaClient } from "@prisma/client";

const prismaClientSinglerton = () => {
    return new PrismaClient;
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSinglerton>

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSinglerton()

export default prisma

if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma