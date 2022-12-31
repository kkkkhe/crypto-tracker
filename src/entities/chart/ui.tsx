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
  const days = [
	{chartDay: 1, label: '24 Hours'},
	{chartDay: 30, label: '30 Days'},
	{chartDay: 91, label: '3 Months'},
	{chartDay: 365, label: '1 Year'}
  ]
export const CoinChartInfo = () => {
	const [day, setDay] = useState(1);
	const router = useRouter()
	const {id} = router.query
	const {data} = useGetHistoricalChartQuery({id, day})
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	  );
	return <div className='border-l-[1px] border-[#808080] px-[20px]'>
			<div className='mb-5'>
				<Line data={{
				labels: data?.prices.map((coin:any) => {
					let date = new Date(coin[0]);
					let time = date.getHours() > 12
						? `${date.getHours() - 12}:${date.getMinutes()} PM`
						: `${date.getHours()}:${date.getMinutes()} AM`;
					return day === 1 ? time : date.toLocaleDateString();
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
			<div className='flex justify-between gap-5'>
				{days.map(({chartDay, label}:{chartDay:number, label: string}) => {
					return (
						<button key={label} onClick={() => setDay(chartDay)} className={`font-bold ${day === chartDay && 'bg-[#EEBC1D] text-black'} w-full last:flex items-center justify-center border-solid border-2 border-[#EEBC1D] p-[6px] rounded-[5px] hover:bg-[#EEBC1D] hover:text-black transition-colors duration-200`}>
							{label}
						</button>
					)
				})}
			</div>
		</div>
}