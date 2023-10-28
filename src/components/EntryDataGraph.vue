<template>
  <div class="flex justify-center h-48 rounded-xl p-6 bg-gray-50 dark:bg-gray-800">
    <canvas id="myChart" width="auto" height="auto"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import db from '@/firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'
export default {
  props: {
    data: Object
  },
  data() {
    return {}
  },
  methods: {

    


    // formatTimeFromDate(dateString) {
    //   // Parse the date string into a Date object
    //   const date = new Date(dateString);
    //   // Extract the hours and minutes
    //   const hours = date.getHours().toString().padStart(2, "0");
    //   const minutes = date.getMinutes().toString().padStart(2, "0");
    //   // Construct the time string in the HH:MM format
    //   const timeString = `${hours}:${minutes}`;
    //   return timeString;
    // },
  },
  mounted() {
    console.log('component Mounted')
    const ctx = document.getElementById('myChart')
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    // const tempData = [1,2,1,2,3,4,2,4,2,1,3,4,2,4];
    // this.data.forecast.forecastday[0].hour.forEach((item) => {
    //   labels.push(this.formatTimeFromDate(item.time));
    //   tempData.push(item.temp_c);
    // });

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Tip €',
          data: [3, 4.5, 0, 6.2, 5, 7, 2],
          fill: false,
          borderColor: '#FFA500',
          tension: 0.1,
          borderJoinStyle: 'round',
          beginAtZero: false,
          backgroundColor: 'rgba(255, 255, 255)',
          pointHoverRadius: 5
        }
      ]
    }
    const myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        plugins: {
          legend: {
            labels: {
              color: 'white',
              // This more specific font property overrides the global property
              font: {
                fontColor: '#FFFFFF'
              }
            }
          }
        }
      }
    })
    myChart
  }
}
</script>

<style>
</style>