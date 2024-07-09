export function TableCard({ transaction }) {
    return <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        image
                    </th>
                    <th scope="col" className="px-6 py-3">
                        sold
                    </th>
                    <th scope="col" className="px-6 py-3">
                        dateOfSale
                    </th>
                </tr>
            </thead>
            <tbody>
                {transaction.map((item)=>{
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.title}
                        </th>
                        <td className="px-6 py-4">
                            {item.price}
                        </td>
                        <td className="px-6 py-4">
                            {item.description}
                        </td>
                        <td className="px-6 py-4">
                            {item.category}
                        </td>
                        <td className="px-6 py-4">
                            {item.image}
                        </td>
                        <td className="px-6 py-4">
                            {item.sold}
                        </td>
                        <td className="px-6 py-4">
                            {item.dateOfSale}
                        </td>
                    </tr>

                })}
                
            </tbody>
        </table>
    </div>

}