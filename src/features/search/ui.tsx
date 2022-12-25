import { useForm } from "react-hook-form";
import style from './style.module.scss'
export const Search = () => {
	const {handleSubmit, register} = useForm({
		defaultValues: {
			search: '',
		}
	})
	const handleOnSubmit = (data:any) => {
		console.log(data)
	}
	return (
			<form action="" className={style.form} onSubmit={handleSubmit(handleOnSubmit)}>
				<input placeholder="Search for crypto currency..." className={style.inp} {...register('search')} type="text" />
			</form>
	)
}