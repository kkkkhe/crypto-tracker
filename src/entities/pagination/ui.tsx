import ReactPaginate from "react-paginate";
import { useAction } from "src/shared/lib/redux-std";
import { paginationModel } from ".";
import { Roboto } from '@next/font/google'
import style from './style.module.scss'
import classnames from "classnames";
const roboto = Roboto({weight: ['400']})
export const PaginatedItems = ({items, itemsPerPage }:any) => {
	const setItemOffset = useAction(paginationModel.actions.setItemOffset)
	const setCurrentCoins = useAction(paginationModel.actions.setCurrentItems)
	const pageCount = Math.ceil(items.length / 10);
	const handlePageClick = (event:any) => {
	  	const newOffset = (event.selected * 10) % items.length;
		setItemOffset(newOffset);
		setCurrentCoins(items.slice(newOffset, newOffset + itemsPerPage))
		window.scrollTo({top: 0,behavior: "smooth"})
	};
  
	return (
	  <div className={classnames(roboto.className, style.box)}>
		<ReactPaginate
			className={style.pagination}
			breakLabel="..."
			nextLabel=">"
			disabledClassName={style.disabled}
			activeClassName={style.active}
			onPageChange={handlePageClick}
			pageRangeDisplayed={2}
			pageCount={pageCount}
			previousLabel="<"
		/>
	  </div>
	);
  }
  