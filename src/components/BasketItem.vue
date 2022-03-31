<!-- Equivalent to Library Item -->
<template>
  <div class="row">
    <div class="card m-3 basket-item">
      <div class="card-header"></div>
      <component :is="typeOfItem" :item="item"></component>
      <div class="card-footer">
        <button class="btn btn-danger" @click="removeMe(item)">REMOVE</button>
      </div>
    </div>
  </div>
</template>

<script>
import LibraryBook from "@/components/LibraryBook";
import LibraryMovie from "@/components/LibraryMovie";
import LibraryAlbum from "@/components/LibraryAlbum";
import LibrarySong from "@/components/LibrarySong";
export default {
  name: "BasketItem",
  components: {LibraryBook, LibraryMovie, LibraryAlbum, LibrarySong},
  props: {
    item: Object
  },
  methods: {
    removeMe(item){
      this.$emit('remove-me', item);
    }
  },
  computed: {
    typeOfItem(){
      return 'Library' + this.item.constructor.name;
    }
  },
}
</script>

<style scoped>
.basket-item {
  width: 100%;
  background-color: lightblue;
}
</style>