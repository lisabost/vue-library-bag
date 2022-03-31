<template>
  <div class="song bg-dark text-white p-2">
    <h3 class="card-title">{{ item.appName }}</h3>
    <p class="card-text">Genre: {{ item.genre }}</p>
  </div>
</template>

<script>
import {Software} from "@/models/LibraryItems";

export default {
  name: "LibrarySoftware",
  props: {
    item: {
      type: Software
    }
  }
}
</script>

<style scoped>

</style>