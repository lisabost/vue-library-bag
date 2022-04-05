<template>
  <div>
    <img :src="item.artworkUrl100" class="card-img-top card-topper-image" :alt="item.trackName">
    <div class="book bg-dark text-white p-2">
      <h3 class="card-title" v-if="item.kind === 'ebook'">{{ item.trackName }}</h3>
      <h3 class="card-title" v-if="item.wrapperType === 'audiobook'">{{ item.collectionName }}</h3>
      <p class="card-text">Author: {{ item.artistName }}</p>
    </div>
  </div>
</template>

<script>
import {Book} from "@/models/LibraryItems";
export default {
  name: "LibraryBook",
  props: {
    item: {
      type: Book
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