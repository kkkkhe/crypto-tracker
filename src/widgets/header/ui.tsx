import Link from 'next/link'
import style from './styles.module.scss'

export const Header = () => {
	return (
		<header className={style.header}>
			<div className='container'>
				<div className={style.block}>
					<Link href={'/'}>
						<h1 className={style.logo}>Crypto Hunter</h1>
					</Link>
					<div className={style.box}>
						<button className={style.selector}>USD</button>
						<button className={style.login}>LOGIN</button>
					</div>
				</div>
			</div>
		</header>
	)
}