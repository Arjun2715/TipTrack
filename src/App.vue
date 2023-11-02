<script> 
import Header from '@/components/HeaderMain.vue'
import Footer from '@/components/FooterMain.vue'
import { onMounted } from 'vue'
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
 
 
 
   onMounted(() => {
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
</script>
  }

<template>
  <!-- <Header /> -->
  <RouterView />
  <!-- <Footer /> -->
</template>