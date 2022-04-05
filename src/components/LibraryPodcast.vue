<template>
  <div>
    <img :src="item.artworkUrl100" class="card-img-top card-topper-image" :alt="item.trackName">
    <div class="song bg-dark text-white p-2">
      <h3 class="card-title">{{ item.trackName }}</h3>
      <p class="card-text">Publisher: {{ item.artistName }}</p>
    </div>
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
.card-topper-image {
  max-width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>