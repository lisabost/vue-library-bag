<template>
<!-- Equivalent to Universal Library -->
  <div class="basket col-12 col-md-4">
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> LIBRARY BASKET!</span>
    </nav>
    <div class="row">
      <basket-item v-for="(item, i) in basket" :key="i" :item="item" @remove-me="theItemEmitted => $emit('remove-me', theItemEmitted)"></basket-item>
    </div>
    <div class="row">
        <button class="btn btn-success mt-3 ml-3" @click="basket.checkOutItems()">Check Out</button>
    </div>
  </div>
</template>

<script>
import BasketItem from "@/components/BasketItem";

export default {
  name: "LibraryBasket",
  components: {BasketItem},
  props: {basket: Array},
  methods: {
  }
}
</script>

<style scoped>

</style>