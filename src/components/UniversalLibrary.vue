<template>
    <div class="card-columns col-12 col-md-8">
      <library-item v-for="(item, i) in library" :key="i" :item="item" @add-to-basket="theItemEmitted => $emit('add-to-basket', theItemEmitted)"></library-item>
    </div>
</template>

<script>

import LibraryItem from "@/components/LibraryItem";

export default {
  name: "UniversalLibrary",
  components: {LibraryItem},
  props: {library: Array},
  methods: {

  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>

</style>