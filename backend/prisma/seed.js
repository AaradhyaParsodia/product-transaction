#!/usr/bin/env node
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
    try {
        await prisma.product_transactions.deleteMany({});
        const response = await fetch(`https://s3.amazonaws.com/roxiler.com/product_transaction.json`);
        const data = await response.json();
        
        data.forEach((item) => {
            const dateOfSale = new Date(item.dateOfSale);
            const month = dateOfSale.toLocaleString('default', { month: 'long' });
            item.month = month;
        });
        // console.log(data);

        await prisma.product_transactions.createMany({ data: data });
    } catch (error) {
        console.error(error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();