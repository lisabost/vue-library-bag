<template>
  <div id="app" class="container-fluid mt-3">
    <div class="row">
      <universal-library @add-to-basket="addToBasket"></universal-library>
      <library-basket :basket="basket"></library-basket>
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
    LibraryBasket,
    UniversalLibrary,
  },
  data() {
    return {
      basket: new BasketCollection()
    }
  },
  methods: {
    addToBasket: function(item){
      this.basket.addItem(item);
      // console.log(this.basket);
      // console.log(this.basket[0]);
    }
  },
}
</script>

<style>
#app {

}
</style>
