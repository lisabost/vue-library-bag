<template>
  <div class="song bg-dark text-white p-2">
    <h3 class="card-title">{{ item.title }}</h3>
    <div class="row">
      <div class="col">
        <p class="card-text">Artist: {{ item.artist }}</p>
      </div>
      <div class="col">
        <p class="card-text">Album name: {{item.album}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {Song} from "@/models/LibraryItems";
export default {
  name: "LibrarySong",
  props: {
    item: {
      type: Song
    }
  }
}
</script>

<style scoped>

</style>