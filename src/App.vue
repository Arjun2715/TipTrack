<template>
  <!-- <Header /> -->
  <RouterView />
  <!-- <Footer /> -->
</template>
<script>
import Header from '@/components/HeaderMain.vue'
import Footer from '@/components/FooterMain.vue'
import { onMounted, onBeforeMount } from 'vue'
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips
} from 'flowbite'

export default {
  setup() {
    onBeforeMount(() => {
      initAccordions()
      initCarousels()
      initCollapses()
      initDials()
      initDismisses()
      initDrawers()
      initDropdowns()
      initModals()
      initPopovers()
      initTabs()
      initTooltips()
    })
  }
}
</script>
  }
