<template>
  <div class="flex justify-center h-64 rounded-xl lg:p-6  w-full bg-gray-50 dark:bg-gray-800">
    <canvas class="p-1" id="myChart" width="auto" height="auto"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import db from '@/firebase/init.js'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
export default {
  // props: {
  //   data: Object
  // },
  data() {
    return {
      tableData: [],
      daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  },
  async created() {
    // Call the getData method here
    await this.getData()
    this.createChart()
  },
  methods: {
    async getData() {
      const q = query(collection(db, 'TipEntry'), orderBy('Date', 'desc'), limit(7))
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        this.tableData.push(data)
      })
      console.log(this.tableData)
    },
    createChart() {
      console.log('component Mounted')
      const ctx = document.getElementById('myChart')
      const labels = []
      const tipData = []

      this.tableData.forEach((item) => {
        labels.push(item.Date)
        tipData.push(item.DayTip)
      })

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Tip €',
            data: tipData,
            fill: false,
            // borderColor: '#FFA500',
            tension: 0.1,
            borderJoinStyle: 'round',
            // beginAtZero: false,
            // backgroundColor: 'rgba(255, 255, 255)',
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
                // color: 'white',
                // This more specific font property overrides the global property
                font: {
                  fontColor: '#FFFFFF'
                }
              }
            }
          }
        }
      })
      myChart.update()
    }
  },
  mounted() {}
}
</script>

<style>
</style>