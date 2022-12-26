import Image from 'next/image'
import { numberWithCommas } from 'src/shared/lib/number-with-commas'
import style from './style.module.scss'
import Link from 'next/link'
export const CoinCard = ({coin: {image, id, price_change_percentage_24h, symbol, market_cap, current_price}}:any) => {
	return (
		<Link href={`/coins/${id}`} className={style.card}>
			<div className={style.grid}>
				<div className={style.leftCol}>
					<Image src={image} alt={symbol} width={50} height={50}/>
					<div>
						<div>{symbol.toUpperCase()}</div>
						<div className={style.id}>{id}</div>
					</div>
				</div>
				<div className={style.box}>
					<span className={style.price}>$ {current_price}</span>
					<span style={{color: price_change_percentage_24h > 0? "rgb(14, 203, 129)" : "red", fontWeight: 500}}>
						{price_change_percentage_24h.toFixed(2)}%
					</span>
					<span>$ {numberWithCommas(market_cap.toString().slice(0, -6))}</span>
				</div>
			</div>
		</Link>
	)
}