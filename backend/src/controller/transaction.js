import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllTransactions(req, res){
    const { search } = req.query || " ";
    const {offset} = req.query;
    const {limit} = req.query;
    const { selectedMonth } = req.query || "March";
    // console.log(offset+ " "+ limit);
    try {
        let filteredData;
        if(search){
            filteredData = await prisma.product_transactions.findMany({
                where: {
                    
                    OR: [
                        {
                            title: {
                                contains: search,
                                mode: "insensitive"
                            },
                        },
                        {
                            description: {
                                contains: search,
                                mode: "insensitive"
                            }
                        },
                        ...(isNaN(Number(search)) ? [] : [{ price: parseInt(search) }]),
                    ],
                    AND: {
                        month: selectedMonth,
                    },
                },
                skip: parseInt(offset*limit) || 0,
                take: parseInt(limit) || 10
            });
        }
        else{
            filteredData = await prisma.product_transactions.findMany({
                skip: parseInt(offset*limit) || 0,
                take: parseInt(limit) || 10
            });
        }

        res.status(200).json({
            length: filteredData.length,
            searchedData: filteredData
        })
    } catch (error) {
        console.error(`error in getAll transactions controller ${error}`);
        res.status(404).send({ message: error });
    }
}