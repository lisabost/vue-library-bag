<template>
<!-- Equivalent to Universal Library -->
  <div class="basket">
    <div class="row">
      <h2>Basket</h2>
    </div>
    <div class="row">
      <basket-item v-for="(item, i) in basket" :key="i" :item="item"></basket-item>
    </div>
    <div claass="row">
        <button class="btn btn-success mt-3">Check Out</button>
    </div>
  </div>
</template>

<script>
import BasketItem from "@/components/BasketItem";

export default {
  name: "LibraryBasket",
  components: {BasketItem},
  props: {basket: Object},
}
</script>

<style scoped>

</style>