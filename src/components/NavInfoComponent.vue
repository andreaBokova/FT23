<template>
  <section id="nav_info" class="center_o pt-2 pb-2">
    <div class="container-xl">
      <div class="row center_o1">
        <div class="col-md-5">
          <div class="center_o1l">
            <h2 class="mb-0">{{ title }}</h2>
          </div>
        </div>
        <div class="col-md-7">
          <div class="center_o1r text-end">
            <h6 class="mb-0 col_red">
              <router-link :to="homeLink.to">{{ homeLink.text }}</router-link>
              <span class="me-2 ms-2 text-light">
                <i class="fa fa-caret-right align-middle"></i>
              </span>
              {{ title }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    homeLink: {
      type: Object,
      default: () => ({ to: '/', text: 'Home' })
    }
  }
}
</script>

<style scoped></style>
