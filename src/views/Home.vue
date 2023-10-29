<template>
  <div>
    <DashboardNav />
    <Sidenav />
    <div class="p-4 space-y-4 sm:ml-64">
      <div class="flex flex-row flex-wrap gap-4 mb-4 mt-16">
        <DataInputDashboard />
        <LastMonthsData />
        <CurrentMonthsData />
      </div>
      <EntryDataGraph />
      <EntryLog />
    </div>
  </div>
</template>

<script>
import Sidenav from '@/components/SideNav.vue'
import DashboardNav from '@/components/DashboardNav.vue'
import DataInputDashboard from '@/components/DataInputDashboard.vue'
import LastMonthsData from '@/components/LastMonthsData.vue'
import CurrentMonthsData from '@/components/CurrentMonthsData.vue'
import EntryLog from '@/components/EntryLog.vue'
import EntryDataGraph from '@/components/EntryDataGraph.vue'
export default {
  components: {
    Sidenav,
    DashboardNav,
    DataInputDashboard,
    LastMonthsData,
    CurrentMonthsData,
    EntryLog,
    EntryDataGraph
  }
}
</script>

<style>
</style>