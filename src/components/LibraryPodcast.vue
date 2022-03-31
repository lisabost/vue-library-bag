<template>
  <div>
    <img :src="item.image" class="card-img-top card-topper-image" :alt="item.title">
    <div class="song bg-dark text-white p-2">
      <h3 class="card-title">{{ item.title }}</h3>
      <p class="card-text">Publisher: {{ item.publisher }}</p>
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