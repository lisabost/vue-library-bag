<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <form>
          <header class="modal-header" id="modalTitle">
            <slot name="header">
              <nav class="navbar bg-dark text-light bag-bar">
                <span class="navbar-brand">CHECK OUT!</span>
                <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
              </nav>
            </slot>
          </header>

          <section class="modal-body mt-3" id="modalDescription">
            <slot name="body">
                <div class="form-group">
                  <label for="name" class="required">Enter Name</label>
                  <input type="text" class="form-control" id="name" v-model="user" autofocus>
                </div>
            </slot>
          </section>

          <footer class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-success" @click="checkOut" aria-label="Check out">CHECK OUT</button>
            </slot>
          </footer>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'NameDialog',
  components: {},
  data() {
    return {
      user: ''
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    checkOut(){
      if (this.user !== '') {
        this.$emit('check-out-basket', this.user);
        this.user = '';
      }
    }
  },
};
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
  max-width: 400px;
  max-height: 290px;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
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