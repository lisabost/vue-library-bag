<template>
  <div>
    <img :src="item.image" class="card-img-top card-topper-image" :alt="item.title">
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