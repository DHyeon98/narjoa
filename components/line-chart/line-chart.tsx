import { Line } from 'react-chartjs-2';
import {
  CategoryScale,
  Chart as ChartJS,
  layouts,
  Legend,
  LinearScale,
  LineElement,
  plugins,
  PointElement,
  scales,
  Ticks,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '온도',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: '#000',
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Line data={data} options={options} />;
}
