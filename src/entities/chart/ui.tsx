import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useGetHistoricalChartQuery } from 'src/shared/api';

export const options = {
	responsive: true,
	plugins: {
	  legend: {
		position: 'top' as const,
	  },
	  title: {
		display: true,
		text: 'Chart.js Line Chart',
	  },
	},
  };
  interface A {
    x: string
}
const s = 'asdfsdfasdfas'
export const CoinChartInfo = () => {
	const [days, setDays] = useState(1);
	const router = useRouter()
	const {id} = router.query
	const {data} = useGetHistoricalChartQuery(id)
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	  );
	return <div className='border-l-[1px] border-white'>
		<div className='pl-[20px] py-[15px]'>
			<Line data={{
			labels: data?.prices.map((coin:any) => {
				let date = new Date(coin[0]);
				let time = date.getHours() > 12
					? `${date.getHours() - 12}:${date.getMinutes()} PM`
					: `${date.getHours()}:${date.getMinutes()} AM`;
				return days === 1 ? time : date.toLocaleDateString();
			}),
			datasets: [
			{
				data: data?.prices.map((coin:any) => coin[1]),
				label: `Price ( Past ${days} Days ) in USD`,
				borderColor: "#EEBC1D",
			},
			],
		}}
		options={{
			elements: {
			point: {
				radius: 1,
			},
			},
		}}/>
		</div>
		</div>
}