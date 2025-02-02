import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,
         CategoryScale,
         LinearScale,
         PointElement,
         LineElement,
         Title,
         Tooltip,
         Legend
        } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph() {

  const language = "Cantonese"

  const tones = [1,2,3,4,5,6]

  const colorMap = ["", "rgb(0, 153, 255)", "rgb(170, 0, 0)", "rgb(150, 0, 170)", "rgb(170, 153, 0)", "rgb(0, 170, 77)", "rgb(3, 0, 170)"] // Maps each tone to a different line colour

  const datasets = []

  tones.forEach((tone) => datasets.push({
    label: tone,
    data: [tone*1000, 2000, tone*780, 4000, 2500],
    borderColor: colorMap[tone]
  },))

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: language}
    },
    layout: {
      padding: {right: 20}
    }
  };

  const data = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    datasets: datasets
  };

  return (
    <Line 
        options={options} 
        data={data} 
        style={{ height: '100%', width: '100%' }} // Make sure the chart fills the container
      />
  )
}
