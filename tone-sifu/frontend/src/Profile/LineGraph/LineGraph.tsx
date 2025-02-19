import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,
         CategoryScale,
         LinearScale,
         PointElement,
         LineElement,
         Title,
         Tooltip,
         Legend,
         TimeScale
        } from 'chart.js';

import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

export default function LineGraph({ language, logData }) {

  const toneMap = {
    'cmn': [1,2,3,4],
    'yue': [1,2,3,4,5,6]
  }

  const tones = toneMap[language] // Map the language to its corresponding list of tones

  const colorMap = ["", "rgb(0, 153, 255)", "rgb(170, 0, 0)", "rgb(150, 0, 170)", "rgb(170, 153, 0)", "rgb(0, 170, 77)", "rgb(3, 0, 170)"] // Maps each tone to a different line colour

  const datasets = [] // Initialise datatsets array

  tones.forEach((tone) => { // Loop through each tone
    const toneData = []
    logData.forEach((log) => toneData.push(log.total_correct[tone]/log.total_answered[tone]*100)) // For each tone, go through every log entry and calculate the percentage accuracy for that tone
    datasets.push({
      label: tone,
      data: toneData,
      borderColor: colorMap[tone]
    },)
  })
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: language}
    },
    layout: {
      padding: {right: 20}
    },
    scales: {
      x: {
          type: 'time', // Set the x-axis to time scale
          time: {
              unit: 'day', // Specify the unit (e.g., day, month, etc.)
              tooltipFormat: 'll', // Optional: Format for the tooltip
          },
          title: {
              display: true,
              text: 'Date'
          }
      }
  }
  };

  const labels = []

  logData.forEach((log) => {
    labels.push(log.date)
  })

  labels.reverse(); // Put date labels in correct order

  const data = {
    labels: labels,
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
