import { PrismaClient } from '@prisma/client';
import {PrismaClient as PrismaClient2}  from '@prisma-mysql/client';
import { hash } from 'bcryptjs';
import {test1} from './../cron/test' 

const prisma = new PrismaClient();
const prisma2 = new PrismaClient2();

async function main() {
  console.log("salam", test1())

   
  //     const active_borrowers_accounts  = await prisma.$queryRaw`
  //   SELECT *, CAST(id AS int) as id
  //     FROM active_borrowers_accounts 
  //     ORDER BY year_month desc LIMIT 1;
  // `;

  // console.log("active_borrowers_accounts", active_borrowers_accounts)

  const users  = await prisma2.$queryRaw`
  SELECT * FROM users ;
`;

console.log("active_borrowers_accounts", users)

}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
