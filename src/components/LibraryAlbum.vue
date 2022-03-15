<template>
  <div class="album bg-primary">
    <h3 class="card-title">{{ item.title }}</h3>
    <div class="row">
      <div class="col">
        <p class="card-text">Artist: {{ item.artist }}</p>
      </div>
      <div class="col">
        <p class="card-text">Number of tracks: {{item.trackCount}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {Album} from "@/models/LibraryItems";
export default {
  name: "LibraryAlbum",
  props: {
    item: {
      type: Album
    }
  }
}
</script>

<style scoped>

</style>