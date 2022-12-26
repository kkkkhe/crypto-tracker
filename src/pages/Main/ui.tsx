import { CoinCard } from 'src/entities/coinCard'
import { paginationModel } from 'src/entities/pagination'
import { PaginatedItems } from 'src/entities/pagination/ui'
import { SlickSlider } from 'src/entities/slider'
import { Search } from 'src/features/search'
import { useAppSelector } from 'src/shared/lib/redux-std/use-app-selector'
import style from './styles.module.scss'
import Image from 'next/image'
import image from '/public/banner2.jpg'
export const Main = ({trendCoins, coins}:any) => {
	const itemOffset = useAppSelector(paginationModel.selectors.itemOffset)
	const currentItems = coins.slice(itemOffset, itemOffset + 10)
	return (
		<div className={style.main}>
			<div className={style.banner}>
				<Image src={image} alt={'sda'} fill className={style.test}/>
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
				
				{currentItems?.map((coin:any) => {
					return (	
						<div key={coin.id}>
							<CoinCard coin={coin}/>
						</div>
					)
				})}
				<PaginatedItems items={coins} itemsPerPage={10}/>
			</div>
		</div>
	)
}