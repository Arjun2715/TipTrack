<template>
  <div class="md:flex-1 w-full rounded-xl bg-gray-50 dark:bg-gray-800 p-4">
    <p class="text-lg font-medium py-5 text-gray-900 dark:text-white">Enter Today's Data</p>

    <div class="mb-3">
      <label for="base-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >Enter Tip: (€)</label
      >
      <input
        type="number"
        id="base-input"
        v-model="TotalTip"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <div class="mb-3">
      <label for="base-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >Enter Expense: (€)</label
      >
      <input
        type="number"
        id="base-input"
        v-model="TotalExpence"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <div class="flex justify-end">
      <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        @click="saveEntryToDB()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Save Entry
      </button>
      <div
        id="popup-modal"
        tabindex="-1"
        class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Message</span>
            </button>
            <div class="p-6 text-center">
              <svg
                class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Todays entry already Exist, You can modify it in the entry log section.
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Close
              </button>
              <!-- <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init.js'
import { collection, addDoc, query, getDocs, where } from 'firebase/firestore' 
export default {
  component: { 
  },
  data() {
    return {
      TotalTip: 0,
      TotalExpence: 0,
      popupVisibility: false
    }
  },
  methods: {
    formatDate(date) {
      const month = (date.getMonth() + 1).toString().padStart(2, '0') // Month is 0-indexed
      const day = date.getDate().toString().padStart(2, '0')
      const year = date.getFullYear()
      const formattedDate = `${day}/${month}/${year}`
      return formattedDate
    },
    async saveEntryToDB() {
      const currentDate = new Date()
      const formattedDate = this.formatDate(currentDate)
      const colRef = collection(db, 'TipEntry')

      // Check if an entry with today's date already exists
      const querySnapshot = await getDocs(query(colRef, where('Date', '==', formattedDate)))
      if (querySnapshot.size === 0) {
        const dataObj = {
          DayTip: this.TotalTip,
          DayExpence: this.TotalExpence,
          Date: this.formatDate(new Date()),
          WeekDay: new Date().getDay(),
          created: new Date(),
          lastUpdated: new Date()
        }
        const docRef = await addDoc(colRef, dataObj)
        console.log('Entry Created with id: ' + docRef.id)
      } else {
        this.popupVisibility = true
        console.log("Today's entry already exists in the database.")
      }
    }

    // entryAdded() {
    //   const d = new Date()
    //   console.log(this.TotalTip)
    //   console.log(this.TotalExpence)
    //   console.log(d.getDay())
    // }
  }
}
</script>

<style>
</style>