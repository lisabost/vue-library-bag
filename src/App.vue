<template>
  <div id="app" class="container-fluid mt-3">
    <div class="row">
      <universal-library :library="library" @add-to-basket="addToBasket"></universal-library>
      <library-basket :basket="basket" @remove-me="removeItemFromBasket" @check-out-basket="checkOutBasket"></library-basket>
      <button type="button" class="btn btn-success btn-lg ml-3" @click="showModal">SHOW CHECKED OUT ITEMS</button>
      <checked-out-items v-show="isModalVisible" @close="closeModal" :listOfCheckedOutItems="checkedOutItems" @check-in-basket="checkInBasket" ></checked-out-items>
    </div>
  </div>
</template>

<script>
import './styles/app.css'
import UniversalLibrary from "@/components/UniversalLibrary";
import BasketCollection from "@/models/BasketCollection";
import LibraryBasket from "@/components/LibraryBasket";
import CheckedOutItems from "@/components/CheckedOutItems";
import LibraryCollection from "@/models/LibraryCollection";
import {Album, Book, Movie} from "@/models/LibraryItems";

export default {
  name: 'App',
  components: {
    CheckedOutItems,
    UniversalLibrary,
    LibraryBasket
  },
  data() {
    return {
      library: new LibraryCollection()
          .addItem(new Book('Seductive Interaction Design', 234), 5)
          .addItem(new Book('Learn Vue', 234), 4)
          .addItem(new Movie('The Muppets', 107), 6)
          .addItem(new Movie('Strange Brew', 97), 9)
          .addItem(new Album('Siren Song of the Counter Culture', 'Rise Against', 12), 4)
          .addItem(new Album('A Thousand Suns', 'Linkin Park', 15), 2)
          .addItem(new Movie('The Fellowship of the Rings', 178), 3),
      basket: new BasketCollection(),
      checkedOutItems: [],
      isModalVisible: false,
    }
  },
  methods: {
    addToBasket: function(item){
      if (item.qty !== 0){
        let present = this.basket.indexOf(item);
        if (present < 0) {
          this.basket.addItem(item);
        }
      }
    },
    removeItemFromBasket: function(item){
      this.basket.removeItem(item);
    },
    checkOutBasket: function (basket, name) {
      let checkOutList;
      checkOutList = [...basket];
      checkOutList.user = name;
      this.checkedOutItems.push(checkOutList);
      basket.checkOutItems();
    },
    checkInBasket: function (basket) {
        for (let j = 0; j < basket.length; j++) {
          basket[j].checkIn();
        }
        this.checkedOutItems.splice(this.checkedOutItems.indexOf(basket), 1);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
}
</script>

<style>
#app {

}
</style>
