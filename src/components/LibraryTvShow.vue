<template>
  <div class="song bg-dark text-white p-2">
    <h3 class="card-title">{{ item.episodeTitle }}</h3>
    <p class="card-text">Show: {{ item.showTitle }}</p>
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

</style>