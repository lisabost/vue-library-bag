<template>
  <div class="card col-12 mt-2">
    <div class="card-header">
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

</style>