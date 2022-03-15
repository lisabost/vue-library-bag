<template>
  <div id="app" class="container-fluid mt-3">
    <div class="row">
      <universal-library></universal-library>
    </div>
  </div>
</template>

<script>
import './styles/app.css'
import UniversalLibrary from "@/components/UniversalLibrary";

export default {
  name: 'App',
  components: {
    UniversalLibrary,
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {

}
</style>
