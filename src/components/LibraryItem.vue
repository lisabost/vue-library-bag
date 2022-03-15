<template>
  <div class="card" :class="{'border-success' : item.isAvailable()}">
    <div class="card-header">
      {{item.title}}
    </div>
    <component :is="typeOfItem" :item="item"></component>
    <div class="card-footer">
      <button class="btn btn-success m-2" v-if="item.isAvailable()" @click="item.checkOut()">Check Out</button>
      <button class="btn btn-caution m-2" v-else @click="item.checkIn()">Check In</button>
      <button class="btn btn-danger m-2" @click="item.remove()">Remove</button>
      <button class="btn btn-secondary m-2" @click="addRepair(item)">Repair</button>
      <button class="btn btn-caution m-2" @click="addBasket(item)">Add to Basket</button>
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
    addBasket: Function,
  },
  computed: {
    typeOfItem(){
      return 'Library' + this.item.constructor.name;
    }
  },

}
</script>

<style scoped>

</style>