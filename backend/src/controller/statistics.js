import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let isFinalResponseJsonActive = false;

const Month = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12"
};

export async function statisticsByMonth(req, res) {
    const { selectedMonth } = req.params;
    const valueOfMonth = Month[selectedMonth];
    // console.log(valueOfMonth);

    try {
        const totalSaleAmount = await prisma.product_transactions.aggregate({
            where: {
                month: selectedMonth,
                sold: true
            },
            _sum: {
                price: true
            }
        })

        const totalSoldItems = await prisma.product_transactions.aggregate({
            where: {
                month: selectedMonth,
                sold: true
            },
            _count: true
        })
        const totalUnSoldItems = await prisma.product_transactions.aggregate({
            where: {
                month: selectedMonth,
                sold: false
            },
            _count: true
        })

        if(isFinalResponseJsonActive){
            return {
                totalSaleAmount: totalSaleAmount,
                totalSoldItems: totalSoldItems,
                totalUnSoldItems: totalUnSoldItems
            };
        }
        res.status(200).json({
            totalSaleAmount: totalSaleAmount,
            totalSoldItems: totalSoldItems,
            totalUnSoldItems: totalUnSoldItems
        });
    } catch (error) {
        console.error(`error in statistics by Month controller ${error}`);
        res.status(404).send({ message: error });
    }
}

export async function getBarChartDetailsByMonth(req, res) {
    const { selectedMonth } = req.params;

    try {
        const data = await prisma.product_transactions.findMany({
            where: {
                month: selectedMonth,
            },
            select: {
                price: true
            }
        });

        const barchart = {
            "0 - 100"  : 0,
            "101 - 200": 0,
            "201 - 300": 0,
            "301 - 400": 0,
            "401 - 500": 0,
            "501 - 600": 0,
            "601 - 700": 0,
            "701 - 800": 0,
            "801 - 900": 0,
            "901 - above": 0,
        }

        data.map((item)=>{
            if(item.price<=100) barchart["0 - 100"]++;
            else if(item.price<=200) barchart["101 - 200"]++;
            else if(item.price<=300) barchart["201 - 300"]++;
            else if(item.price<=400) barchart["301 - 400"]++;
            else if(item.price<=500) barchart["401 - 500"]++;
            else if(item.price<=600) barchart["501 - 600"]++;
            else if(item.price<=700) barchart["601 - 700"]++;
            else if(item.price<=800) barchart["701 - 800"]++;
            else if(item.price<=900) barchart["801 - 900"]++;
            else barchart["901 - above"]++;
        })

        if(isFinalResponseJsonActive){
            return {barchart: barchart};
        }

        res.status(200).json({barchart: barchart});
    } catch (error) {
        console.error(`error in statistics get barchart details by Month controller ${error}`);
        res.status(404).send({ message: error });
    }
}

export async function getPiechartByMonth(req, res){
    const { selectedMonth } = req.params;

    try {
        const data = await prisma.product_transactions.findMany({
            where: {},
            distinct: 'category',
            select: {
                category: true,
                // month: true
            }
        });

        const categories = data.map(item => item.category)

        const noOfItemsPerCategory = await Promise.all(categories.map(async category => {
            const count = await prisma.product_transactions.count({
                where: {
                    month: selectedMonth,
                    category,
                },
            });
            return { category, count };
        }));

        if(isFinalResponseJsonActive){
            return {noOfItemsPerCategory: noOfItemsPerCategory};
        }

        res.status(200).json({noOfItemsPerCategory: noOfItemsPerCategory});
    } catch (error) {
        console.error(`error in statistics get piechart details by Month controller ${error}`);
        res.status(404).send({ message: error });
    }
}

export async function getFinalResponseJson(req, res){
    const { selectedMonth } = req.params;

    try {
        isFinalResponseJsonActive = true;
        const statistics = await statisticsByMonth(req, res);
        const barChart = await getBarChartDetailsByMonth(req, res);
        const piechart = await getPiechartByMonth(req, res);
        isFinalResponseJsonActive = false;
        res.status(200).json({
            statistics: statistics,
            barChart: barChart,
            piechart: piechart
        })
    } catch (error) {
        console.error(`error in statistics get Final Response json details by Month controller ${error}`);
        res.status(404).send({ message: error });
    }
}