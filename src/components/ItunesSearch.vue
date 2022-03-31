<template>
    <form @submit.prevent="search" class="form-inline search-form">
        <input type="text" class="form-control mr-sm-2" v-model="searchTerm" id="search-term" placeholder="Search iTunes">
      <button type="submit" class="btn btn-outline-success my-2 my-sm-0" id="search-button">Search</button>
    </form>
</template>

<script>
import axios from 'axios';
export default {
  name: "ItunesSearch",
  data() {
    return {
      searchTerm: '',
      searchResults: [],
      limit: 20,
      page: 0
    }
  },
  methods: {
    search() {
      if(this.searchTerm) {
        this.$emit('searching');
        // build request arguments
        let url = 'https://itunes.apple.com/search?'
        let config = {
          params: {
            term: this.searchTerm,
            limit: this.limit,
            // media: ''
            // offset: this.limit * this.page
          }
        }
        // execute ajax request using promises
        axios.get(url, config)
          .then(response => {
            console.log('api response is', response);
            console.log('response length is ' + response.data.results.length);
            if(response.data.results.length > 0) {
              this.searchResults = response.data.results;
              console.log('the first search result is ' + this.searchResults[0].artistName);
            } else {
              this.searchResults = [];
            }
          })
          .catch(error => {
            console.log('AJAX SEARCH ERROR', error);
            //TODO: LET USER KNOW ERROR
          })
          .finally(() => {
            this.$emit('search-finished', this.searchResults);
            this.searching = false;
            this.searchTerm = '';
          })
      }
    }
  },
}
</script>

<style scoped>

</style>