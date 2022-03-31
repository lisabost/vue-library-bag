<template>
  <div>
    <img :src="item.image" class="card-img-top card-topper-image" :alt="item.showTitle">
    <div class="song bg-dark text-white p-2">
      <h3 class="card-title">{{ item.episodeTitle }}</h3>
      <p class="card-text">Show: {{ item.showTitle }}</p>
    </div>
  </div>
</template>

<script>
import {TvShow} from "@/models/LibraryItems";

export default {
  name: "LibraryTvShow",
  props: {
    item: {
      type: TvShow
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