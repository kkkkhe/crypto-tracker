import { useRouter } from "next/router"
import Image from 'next/image'
import { numberWithCommas } from "src/shared/lib/number-with-commas"
import { CoinChartInfo } from "src/entities/chart"
import parse from 'html-react-parser';
export const DetailedCoin = ({coin}:any) => {
	const router = useRouter()
	const query:{id?:string} = router.query
	return (
			<div className="flex h-screen text-white">
					<div className="h-full w-[30%] flex flex-col items-start px-[15px] py-[20px]">
						<div className="w-full flex flex-col items-center mb-[10px]">
							<Image src={coin.image.large} alt={'dsfdf'} width={150} height={150}/>
							<h1 className="mb-[20px] text-[40px]">{coin.id}</h1>
							<p className="text-[15px] leading-[1.8] font-medium w-full [&>a]:text-[#ffd700]">
								{parse(coin.description.en.split('. ')[0])}.
							</p>
						</div>
						<div className="flex flex-col gap-[10px]">
							<h3>Rank: <span className="font-normal text-[20px]">{coin.market_cap_rank}</span></h3>
							<h3>Current Price: <span className="font-normal text-[20px]">{numberWithCommas(coin?.market_data.current_price.usd)}$</span></h3>
							<h3>Market Cap: <span className="font-normal text-[20px]">{numberWithCommas(coin.market_data.market_cap.usd).toString().slice(0,-6)}M</span></h3>
						</div>
					</div>
					<div className="w-[80%] h-full pt-[20px]">
						<CoinChartInfo/>
					</div>
			</div>
	)
}