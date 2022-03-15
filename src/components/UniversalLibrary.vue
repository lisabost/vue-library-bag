<template>
  <div class="row">
    <div class="card-columns col-12 col-md-8">
      <library-item v-for="(item, i) in library" :key="i" :item="item" :add-basket="item => {basket.addItem(item)}"
                    :add-repair="item => {repairs.addItem(item); library.removeItem(item);}"></library-item>
    </div>
    <div class="col-12 col-md-4">
      <library-basket :basket="basket"></library-basket>
    </div>
  </div>
</template>

<script>
import LibraryCollection from "@/models/LibraryCollection";
import {Album, Book, Movie} from "@/models/LibraryItems";
import LibraryItem from "@/components/LibraryItem";
import BasketCollection from "@/models/BasketCollection";
import LibraryBasket from "@/components/LibraryBasket";

export default {
  name: "UniversalLibrary",
  components: {LibraryBasket, LibraryItem},
  props: {},
  data() {
    return {
      library: new LibraryCollection()
          .addItem(new Book('Seductive Interaction Design', 234))
          .addItem(new Book('Learn Vue', 234))
          .addItem(new Movie('The Muppets', 107))
          .addItem(new Movie('Strange Brew', 97))
          .addItem(new Album('Siren Song of the Counter Culture', 'Rise Against', 12))
          .addItem(new Album('A Thousand Suns', 'Linkin Park', 15)),
      repairs: new LibraryCollection(),
      basket: new BasketCollection()
          .addItem(new Book('Seductive Interaction Design', 234)),
    }
  },
}
</script>

<style scoped>

</style>