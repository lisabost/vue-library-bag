<template>
  <div id="app" class="container-fluid mt-3">
    <div class="row">
      <universal-library @add-to-basket="addToBasket"></universal-library>
      <library-basket :basket="basket" @remove-me="removeItemFromBasket" @check-out-basket="checkOutBasket"></library-basket>
      <button type="button" class="btn btn-primary" @click="showModal">Show Checked Out Items</button>
      <checked-out-items v-show="isModalVisible" @close="closeModal" :listOfCheckedOutItems="checkedOutItems" ></checked-out-items>
    </div>
  </div>
</template>

<script>
import './styles/app.css'
import UniversalLibrary from "@/components/UniversalLibrary";
import BasketCollection from "@/models/BasketCollection";
import LibraryBasket from "@/components/LibraryBasket";
import CheckedOutItems from "@/components/CheckedOutItems";

export default {
  name: 'App',
  components: {
    CheckedOutItems,
    UniversalLibrary,
    LibraryBasket
  },
  data() {
    return {
      basket: new BasketCollection(),
      checkedOutItems: new Map(),
      isModalVisible: false,
    }
  },
  methods: {
    addToBasket: function(item){
      if (item.qty !== 0){
        let present = this.basket.indexOf(item);
        if (present < 0) {
          this.basket.addItemToBasket(item);
        }
      }
    },
    removeItemFromBasket: function(item){
      this.basket.removeItem(item);
    },
    checkOutBasket: function (basket, name) {
      this.checkedOutItems.set(name, [...basket])
      basket.checkOutItems();
    },
    showModal() {
      this.isModalVisible = true;
      //console.log('keyset is' + this.checkedOutItems.keys());

      // const iterator1 = this.checkedOutItems[Symbol.iterator]();
      //
      // for (const item of iterator1) {
      //   //console.log('the map item is' + item);
      //   let key = item[0];
      //   let values = this.checkedOutItems.get(key);
      //   //console.log(values);
      //   //TODO: populate checkOutItems popup with key and values
      // }

      // for (const [key, value] of this.checkedOutItems.keys()) {
      //   console.log(`${key}: ${value}`);
      // }
      // for (let key in this.checkedOutItems.keys()){
      //   console.log('key is' + key);
      //   console.log('values are' + this.checkedOutItems.get(key));
      // }
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
