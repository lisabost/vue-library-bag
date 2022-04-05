<template>
  <div class="justify-content-sm-center">
    <div class="alert alert-info" role="alert" v-if="currentlyWorking">
      Working...
    </div>
    <div class="alert alert-info" role="alert" v-if="noResults">
      No Results Found
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    currentlyWorking: Boolean,
    noResults: Boolean
  }
}
</script>

<style scoped>

</style>