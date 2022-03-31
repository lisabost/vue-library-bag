<template>
  <div v-if="currentlyWorking" class="justify-content-sm-center">
    <div class="alert alert-info" role="alert">
      Working...
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    currentlyWorking: Boolean,
  }
}
</script>

<style scoped>

</style>