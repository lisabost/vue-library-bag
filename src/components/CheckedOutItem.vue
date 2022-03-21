<template>
  <div class="card col-12 mt-2">
<!--    <component :is="typeOfItem" :item="item"></component>-->
    <div class="card-footer">
      <p>Checked out by: {{items.user}} </p>
      <p v-for="(item, i) in items" :key="i">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
// import LibraryBook from "@/components/LibraryBook";
// import LibraryMovie from "@/components/LibraryMovie";
// import LibraryAlbum from "@/components/LibraryAlbum";

export default {
  name: "CheckedOutItem",
  // components: {LibraryBook, LibraryMovie, LibraryAlbum},
  props: {
    items: Array,
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