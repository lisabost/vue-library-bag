<template>
    <div class="card-columns col-12 col-md-8">
      <library-item v-for="(item, i) in library" :key="i" :item="item" @add-to-basket="theItemEmitted => $emit('add-to-basket', theItemEmitted)"
                    :add-repair="item => {repairs.addItem(item); library.removeItem(item);}"></library-item>
    </div>
</template>

<script>
import LibraryCollection from "@/models/LibraryCollection";
import {Album, Book, Movie} from "@/models/LibraryItems";
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "UniversalLibrary",
  components: {LibraryItem},
  props: {},
  data() {
    return {
      library: new LibraryCollection()
          .addItem(new Book('Seductive Interaction Design', 234), 2)
          .addItem(new Book('Learn Vue', 234), 5)
          .addItem(new Movie('The Muppets', 107),3)
          .addItem(new Movie('Strange Brew', 97), 4)
          .addItem(new Album('Siren Song of the Counter Culture', 'Rise Against', 12), 5)
          .addItem(new Album('A Thousand Suns', 'Linkin Park', 15), 3),
      repairs: new LibraryCollection(),
    }
  },
}
</script>

<style scoped>

</style>