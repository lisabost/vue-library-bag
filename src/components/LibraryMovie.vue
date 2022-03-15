<template>
  <div class="movie bg-primary">
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Runtime: {{ item.runtime }}</p>
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

</style>