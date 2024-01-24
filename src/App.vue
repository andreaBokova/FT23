<template>
  <div>
    <section id="header">
      <Navigation />
    </section>

    <section class="container">
      <router-view></router-view>
    </section>

    <section id="footer">
      <TheFooter />
    </section>
  </div>
</template>

<script>
import Navigation from '@/components/TheNavigation.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    Navigation,
    TheFooter
  }
}
</script>

<style scoped>
.container {
  flex: 1;
  padding: 20px;
  height: 100%;
}
</style>
