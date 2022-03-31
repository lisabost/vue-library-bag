<template>
  <div class="card library-item" :class="{'border-success' : item.isAvailable()}">
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
import LibrarySong from "@/components/LibrarySong";
import LibraryMusicVideo from "@/components/LibraryMusicVideo";
import LibraryPodcast from "@/components/LibraryPodcast";
import LibraryTvShow from "@/components/LibraryTvShow";
import LibrarySoftware from "@/components/LibrarySoftware";
export default {
  name: "LibraryItem",
  components: {LibraryBook, LibraryMovie, LibraryAlbum, LibrarySong, LibraryMusicVideo, LibraryPodcast, LibraryTvShow, LibrarySoftware},
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