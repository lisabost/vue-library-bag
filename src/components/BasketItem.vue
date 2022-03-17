<!-- Equivalent to Library Item -->
<template>
      <div class="card col-12 mt-2">
        <component :is="typeOfItem" :item="item"></component>
        <div class="card-footer">
          <button class="btn btn-danger" @click="removeMe(item)">Remove</button>
        </div>
      </div>
</template>

<script>
import LibraryBook from "@/components/LibraryBook";
import LibraryMovie from "@/components/LibraryMovie";
import LibraryAlbum from "@/components/LibraryAlbum";
export default {
  name: "BasketItem",
  components: {LibraryBook, LibraryMovie, LibraryAlbum},
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

</style>