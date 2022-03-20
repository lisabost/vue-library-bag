<template>
  <div class="card col-12 mt-2">
<!--    <component :is="typeOfItem" :item="item"></component>-->
    <div class="card-footer">
      <p>Checked out by: {{user}}</p>
      <p>{{item.title}}</p>
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
    item: Object,
    user: String,
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