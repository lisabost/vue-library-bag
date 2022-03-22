<template>
  <div class="card m-3 checked-out-item">
    <div class="card-header bg-dark text-white">
      <p>Checked out by: {{items.user}} </p>
    </div>
    <div class="card-footer">
      <p v-for="(item, i) in items" :key="i">{{item.title}}</p>
      <button class="btn btn-danger" @click="checkInItems(items)">Check In</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "CheckedOutItem",
  props: {
    items: Array,
  },
  methods: {
    checkInItems(checkedOutBasket) {
      this.$emit('check-in-basket', checkedOutBasket);
    }
  },
  computed: {
    typeOfItem(){
      return 'Library' + this.item.constructor.name;
    }
  },
}
</script>

<style scoped>
.checked-out-item {
  max-width: 600px;
  background-color: lightblue;
}
</style>