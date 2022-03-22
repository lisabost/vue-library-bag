<template>
  <div class="book bg-dark text-white p-2">
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Pages: {{ item.pages }}</p>
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

</style>