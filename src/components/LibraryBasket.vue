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
      <button type="button" class="btn btn-success mt-3 ml-3" @click="showModal">Check Out</button>
      <name-dialog  v-show="isModalVisible" @close="closeModal" @check-out-basket="checkOutBasket"></name-dialog>
    </div>
  </div>
</template>

<script>
import BasketItem from "@/components/BasketItem";
import NameDialog from "@/components/NameDialog";

export default {
  name: "LibraryBasket",
  components: {NameDialog, BasketItem},
  props: {basket: Array},
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    createMap(name) {
      let checkedOut = [...this.basket]
      this.basketMap.set(name, checkedOut)
      return this.basketMap;
    },
    checkOutBasket(name) {
      this.isModalVisible = false;
      this.createMap(name)
      this.$emit('check-out-basket', this.basket)
    }
  },
  data() {
    return {
      isModalVisible: false,
      basketMap: new Map()
    }
  }
}
</script>

<style scoped>

</style>