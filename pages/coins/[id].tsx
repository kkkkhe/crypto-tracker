import { useRouter } from "next/router"

const Coin = ({coin}:any) => {
	const router = useRouter()
	return (
		<div>
			{/* {coin.id} */}
		</div>
	)
}

export async function getStaticPaths(context:any){
	const res = await fetch(`https://api.coingecko.com/api/v3/coins`)
	const coins = await res.json()
	const paths = coins.map((coin:any) => ({
		params: {id: coin.id}
	}))
	return {
		paths, fallback:  'blocking',
	}
}

export async function getStaticProps({params}:any){
	const res = await fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`)
	const coin = await res.json()
	if(!coin){
		return {
			notFound: true,
			revalidate: 10
		}
	}
	return {
		props: {coin},revalidate: 10
	}
}



export default Coin