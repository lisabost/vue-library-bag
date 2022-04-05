<template>
  <div>
    <img :src="item.artworkUrl100" class="card-img-top card-topper-image" :alt="item.trackName">
    <div class="song bg-dark text-white p-2">
      <h3 class="card-title">{{ item.trackName }}</h3>
      <div class="row">
        <div class="col">
          <p class="card-text">Artist: {{ item.artistName }}</p>
        </div>
        <div class="col">
          <p class="card-text">Album name: {{item.collectionName}}</p>
        </div>
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
.card-topper-image {
  max-width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>