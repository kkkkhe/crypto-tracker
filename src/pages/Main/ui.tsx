
import { CoinCard } from 'src/entities/coinCard'
import { SlickSlider } from 'src/entities/slider'
import { Search } from 'src/features/search'
// import { useGetTrendingCoinsQuery } from 'src/shared/api'
import style from './styles.module.scss'

export const Main = ({trendCoins, coins}:any) => {
	return (
		<div className={style.main}>
			<div className={style.banner}>
				<div className={`${style.hero} container`}>
						<h2 className={style.title}>Crypto Hunter</h2>
						<p className={style.paragraph}>Get All The Info Regarding Your Favorite Crypto Currency</p>
						<SlickSlider data={trendCoins}/>
				</div>
			</div>
			<div className='container'>
				<h3 className={style.title}>Cryptocurrency Prices by Market Cap</h3>
				<Search/>
				<div className={style.grid}>
					<span>Coin</span>
					<div className={style.box}>
						<span>Price</span>
						<span>24h Change</span>
						<span>Market Cap</span>
					</div>
				</div>
				{coins.map((coin:any) => {
					return (
						<div key={coin.id}>
							<CoinCard coin={coin}/>
						</div>
					)
				})}
			</div>
		</div>
	)
}
//image, id, price_change_percentage_24h, symbol, market_cap, current_price