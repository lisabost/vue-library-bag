<template>
  <div>
    <img :src="item.artworkUrl100" class="card-img-top card-topper-image" :alt="item.trackName">
    <div class="movie bg-dark text-white p-2">
      <h3 class="card-title">{{ item.trackName }}</h3>
      <p class="card-text">Director: {{ item.artistName }}</p>
    </div>
  </div>
</template>

<script>
import {Movie} from "@/models/LibraryItems";

export default {
  name: "LibraryMovie",
  props: {
    item: {
      type: Movie
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