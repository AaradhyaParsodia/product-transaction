import { useState } from 'react'
import { TableCard } from './components/TableCard';
import './App.css'

const dumyForTest = [
	{
		"id": 1,
		"title": "Fjallraven  Foldsack No 1 Backpack Fits 15 Laptops",
		"price": 329.85,
		"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop up to 15 inches in the padded sleeve your everyday",
		"category": "men's clothing",
		"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		"sold": false,
		"dateOfSale": "2021-11-27T20:29:54+05:30"
	},
	{
		"id": 2,
		"title": "Mens Casual Premium Slim Fit TShirts ",
		"price": 44.6,
		"description": "Slimfitting style contrast raglan long sleeve threebutton henley placket light weight  soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a threebutton placket.",
		"category": "men's clothing",
		"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
		"sold": false,
		"dateOfSale": "2021-10-27T20:29:54+05:30"
	},
	{
		"id": 3,
		"title": "Mens Cotton Jacket",
		"price": 615.89,
		"description": "great outerwear jackets for SpringAutumnWinter suitable for many occasions such as working hiking camping mountainrock climbing cycling traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father husband or son in this thanksgiving or Christmas Day.",
		"category": "men's clothing",
		"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
		"sold": true,
		"dateOfSale": "2022-07-27T20:29:54+05:30"
	},
	{
		"id": 4,
		"title": "Mens Casual Slim Fit",
		"price": 31.98,
		"description": "The color could be slightly different between on the screen and in practice.  Please note that body builds vary by person therefore detailed size information should be reviewed below on the product description.",
		"category": "men's clothing",
		"image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
		"sold": false,
		"dateOfSale": "2021-10-27T20:29:54+05:30"
	},
	{
		"id": 5,
		"title": "John Hardy Womens Legends Naga Gold  Silver Dragon Station Chain Bracelet",
		"price": 6950,
		"description": "From our Legends Collection the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance or outward for protection.",
		"category": "jewelery",
		"image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
		"sold": false,
		"dateOfSale": "2022-06-27T20:29:54+05:30"
	},
	{
		"id": 6,
		"title": "Solid Gold Petite Micropave ",
		"price": 168,
		"description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
		"category": "jewelery",
		"image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
		"sold": true,
		"dateOfSale": "2021-09-27T20:29:54+05:30"
	},
	{
		"id": 7,
		"title": "White Gold Plated Princess",
		"price": 99.9,
		"description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement Wedding Anniversary Valentines Day...",
		"category": "jewelery",
		"image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
		"sold": true,
		"dateOfSale": "2022-06-27T20:29:54+05:30"
	},
	{
		"id": 8,
		"title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
		"price": 32.97,
		"description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
		"category": "jewelery",
		"image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
		"sold": false,
		"dateOfSale": "2021-11-27T20:29:54+05:30"
	}
]

function App() {
	const [count, setCount] = useState(0);
	const [offset, setOffset] = useState(0);
	const [limit, setLimit] = useState(10);
	const [transaction, setTransaction] = useState({});
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {

	}

	return (
		<>
			<div className=" bg-[#738d5d] h-screen w-screen flex justify-center">
				<div className=' w-3/4 content-center shadow-2xl'>
					<TableCard transaction={dumyForTest}></TableCard>
				</div>
			</div>
		</>
	)
}

export default App
