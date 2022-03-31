<template>
  <div class="song bg-dark text-white p-2">
    <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">Artist: {{ item.artist }}</p>
  </div>
</template>

<script>
import {MusicVideo} from "@/models/LibraryItems";

export default {
  name: "LibraryMusicVideo",
  props: {
    item: {
      type: MusicVideo
    }
  }
}
</script>

<style scoped>

</style>