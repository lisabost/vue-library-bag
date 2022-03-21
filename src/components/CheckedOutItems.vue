<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <nav class="navbar bg-dark text-light bag-bar">
              <span class="navbar-brand">CHECKED OUT ITEMS</span>
              <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
            </nav>
          </slot>
        </header>

        <section class="modal-body" id="modalDescription">
          <checked-out-item v-for="(item, i) in listOfCheckedOutItems" :key="i" :items="item"></checked-out-item>
        </section>

        <footer class="modal-footer">
          <slot name="footer"></slot>
          <button type="button" class="btn-green" @click="close" aria-label="Close modal">
            CLOSE
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

import CheckedOutItem from "@/components/CheckedOutItem";
export default {
  name: "CheckedOutItems",
  components: {CheckedOutItem},
  props: {listOfCheckedOutItems: Array},
  methods: {
    close() {
      this.$emit('close');
    },
  },
  computed: {}
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}

.bag-bar {
  width: 100%;
}
</style>