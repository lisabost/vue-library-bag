<template>
  <div>
    <img :src="item.image" class="card-img-top card-topper-image" :alt="item.appName">
    <div class="song bg-dark text-white p-2 card-body">
      <h3 class="card-title">{{ item.appName }}</h3>
      <p class="card-text">Genre: {{ item.genre }}</p>
    </div>
  </div>
</template>

<script>
import {Software} from "@/models/LibraryItems";

export default {
  name: "LibrarySoftware",
  props: {
    item: {
      type: Software
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