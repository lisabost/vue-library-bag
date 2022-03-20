<template>
  <div id="app" class="container-fluid mt-3">
    <div class="row">
      <universal-library @add-to-basket="addToBasket"></universal-library>
      <library-basket :basket="basket" @remove-me="removeItemFromBasket" @check-out-basket="checkOutBasket"></library-basket>
    </div>
  </div>
</template>

<script>
import './styles/app.css'
import UniversalLibrary from "@/components/UniversalLibrary";
import BasketCollection from "@/models/BasketCollection";
import LibraryBasket from "@/components/LibraryBasket";

export default {
  name: 'App',
  components: {
    UniversalLibrary,
    LibraryBasket
  },
  data() {
    return {
      basket: new BasketCollection()
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
    checkOutBasket: function (basket) {
      console.log(basket);
      basket.checkOutItems();
    }
  },
}
</script>

<style>
#app {

}
</style>
