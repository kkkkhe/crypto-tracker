import style from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import Image from 'next/image'
import { numberWithCommas } from 'src/shared/lib/number-with-commas';
export const SlickSlider = ({data}:any) => {
	return (
		<div className={style.slider}>
            <Swiper
				spaceBetween={50}
				slidesPerView={4}
				autoplay={{
				delay: 2500,
				disableOnInteraction: true
				}}
				modules={[Autoplay]}
				>
				{data.map(({image, id, symbol, price_change_percentage_24h, current_price}:any) => {
					const profit = price_change_percentage_24h > 0
					return (
						<SwiperSlide key={id} className={style.test}>
							<div className={style.coin}>
								<Image className={style.image} src={image} alt={id} width={80} height={80} />
								<div className={style.box}>
									<span className={style.symbol}>{symbol.toUpperCase()}</span>
									<span style={{color: profit? "rgb(14, 203, 129)" : "red", fontWeight: 500,}}>
										{price_change_percentage_24h.toFixed(2)}%
									</span>
								</div>
								<span>$ {numberWithCommas(current_price.toFixed(2))}</span>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
    </div>
	)
}
