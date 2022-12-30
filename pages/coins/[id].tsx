import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { DetailedCoin } from "src/pages/Detail"
import { getCoin } from "src/shared/api"
import dynamic from 'next/dynamic'

const Coin = ({coin}:any) => {
	return <DetailedCoin coin={coin}/>
	
}

export const getServerSideProps:GetServerSideProps = async (context) => {
	const {id} = context.query
	const coin = await getCoin(id)
return {
	props: {coin}
}
}

export default Coin