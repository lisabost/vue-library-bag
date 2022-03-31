<template>
  <div>
    <img :src="item.image" class="card-img-top card-topper-image" :alt="item.title">
    <div class="movie bg-dark text-white p-2">
      <h3 class="card-title">{{ item.title }}</h3>
      <p class="card-text">Director: {{ item.director }}</p>
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