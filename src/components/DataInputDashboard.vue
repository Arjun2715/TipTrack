<template>
  <div class="md:flex-1 w-full rounded-xl bg-gray-50 dark:bg-gray-800 p-4">
          <p class="text-lg font-medium py-5 text-gray-900 dark:text-white">Enter Today's Data</p>
         
            <div class="mb-3">
              <label
                for="base-input"
                class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
              <label
                for="base-input"
                class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
                @click="entryAdded(), saveEntryToDB()" 
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save Entry
              </button>
            </div>
        </div>
</template>

<script>
import db from '@/firebase/init.js';
 import { collection, addDoc } from 'firebase/firestore';
export default {
 data() {
  return {
    TotalTip: null,
    TotalExpence: null,
  }
 },
  methods:{
    async saveEntryToDB(){
       const d = new Date();
      const colRef = collection(db, 'TipEntry');
      const dataObj = {  
        DayTip: this.TotalTip,
        DayExpence: this.TotalExpence,
        created: new Date(),
        lastUpdated: new Date(),
      }
      const docRef = await addDoc(colRef, dataObj);
         console.log("Entry Created with id: " + docRef.id );
    },

    entryAdded(){
      const d = new Date();
      console.log(this.TotalTip);
      console.log(this.TotalExpence);
      console.log(d.getDay());
    }

  }
}
</script>

<style>

</style>