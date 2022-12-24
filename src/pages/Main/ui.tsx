
import { SlickSlider } from 'src/entities/slider'
import { useGetTrendingCoinsQuery } from 'src/shared/api'
import style from './styles.module.scss'

export const Main = () => {
	const {data} = useGetTrendingCoinsQuery('USD')
	return (
		<div className={style.main}>
			<div className={style.banner}>
				<div className={`${style.hero} container`}>
						<h2 className={style.title}>Crypto Hunter</h2>
						<p className={style.paragraph}>Get All The Info Regarding Your Favorite Crypto Currency</p>
						<SlickSlider data={data}/>
				</div>
			</div>
		</div>
	)
}