<template>
  <div class="card library-item" :class="{'border-success' : item.isAvailable()}">
    <div class="card-header"></div>
    <component :is="typeOfItem" :item="item"></component>
    <div class="card-footer">
        <button class="btn btn-outline-dark bg-white m-2 disabled">{{item.qty}} Available</button>
        <button class="btn btn-warning m-2" @click="addBasket(item)" v-if="item.isAvailable()">ADD TO BASKET</button>
    </div>
  </div>
</template>

<script>
import LibraryBook from "@/components/LibraryBook";
import LibraryMovie from "@/components/LibraryMovie";
import LibraryAlbum from "@/components/LibraryAlbum";
export default {
  name: "LibraryItem",
  components: {LibraryBook, LibraryMovie, LibraryAlbum},
  props: {
    item: Object,
    addRepair: Function,
  },
  methods: {
    addBasket(item){
      this.$emit('add-to-basket', item);
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
.library-item {
  background-color: lightblue;
}
</style>