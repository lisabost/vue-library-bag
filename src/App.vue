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
      let checkOutList = new BasketCollection();
      checkOutList = [...basket];
      checkOutList.user = name;
      this.checkedOutItems.push(checkOutList);
      basket.checkOutItems();
      console.log(this.checkedOutItems);
      console.log('User who checked things out:' + checkOutList.user);
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
