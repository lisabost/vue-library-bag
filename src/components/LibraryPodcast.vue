<template>
  <div class="song bg-dark text-white p-2">
    <h3 class="card-title">{{ item.title }}</h3>
      <p class="card-text">Publisher: {{ item.publisher }}</p>
  </div>
</template>

<script>
import {Podcast} from "@/models/LibraryItems";

export default {
  name: "LibraryPodcast",
  props: {
    item: {
      type: Podcast
    }
  }
}
</script>

<style scoped>

</style>