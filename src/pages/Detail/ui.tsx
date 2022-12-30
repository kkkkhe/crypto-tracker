import { useRouter } from "next/router"
import style from './styles.module.scss'
import Image from 'next/image'
import { numberWithCommas } from "src/shared/lib/number-with-commas"
import { CoinChartInfo } from "src/entities/chart"
import parse from 'html-react-parser';

export const DetailedCoin = ({coin}:any) => {
	const router = useRouter()
	const query:{id?:string} = router.query
	return (
			<div className={style.block}>
					<div className={style.left}>
						<div className={style.head}>
							<Image src={coin.image.large} alt={'dsfdf'} width={150} height={150}/>
							<h1 className={style.name}>{coin.id}</h1>
							<p className={style.description}>
								{parse(coin.description.en.split('. ')[0])}.
							</p>
						</div>
						<div className={style.info}>
							<h3>Rank: <span className={style.span}>{coin.market_cap_rank}</span></h3>
							<h3>Current Price: <span className={style.span}>{numberWithCommas(coin?.market_data.current_price.usd)}$</span></h3>
							<h3>Market Cap: <span className={style.span}>{numberWithCommas(coin.market_data.market_cap.usd).toString().slice(0,-6)}M</span></h3>
						</div>
					</div>
					<div className={style.right}>
						<CoinChartInfo/>
					</div>
			</div>
	)
}