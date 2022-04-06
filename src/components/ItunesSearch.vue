<template>
    <form @submit.prevent="search" class="form-inline search-form">
      <input type="text" class="form-control mr-sm-2" v-model="searchTerm" id="search-term" placeholder="Search iTunes">
      <div>
        <select id="media-type-selector" class="form-control mr-sm-2" v-model="mediaTypeSelected">
          <option v-for="option in mediaOptions" :value="option.value" :key="option.value">{{option.name}}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-outline-success my-2 my-sm-0" id="search-button">Search</button>
      <button type="button" class="btn btn-outline-success my-2 my-sm-0 ml-2" id="load-more-button" @click="loadMoreResults">Load More</button>
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
      limit: 25,
      mediaTypeSelected: 'all',
      mediaOptions: [
        {value: 'all', name: 'All'},
        {value:'audiobook', name: 'Audiobook'},
        {value:'ebook', name: 'E-book'},
        {value:'movie', name: 'Movie'},
        {value:'music', name: 'Music'},
        {value:'musicVideo', name: 'Music Video'},
        {value:'podcast', name: 'Podcast'},
        {value:'shortFilm', name: 'Short Film'},
        {value:'software', name: 'Software'},
        {value:'tvShow', name: 'TV Show'},
      ],
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
            media: this.mediaTypeSelected,
            offset: this.limit * this.page,
          }
        }
        // execute ajax request using promises
        axios.get(url, config)
          .then(response => {
            if(response.data.results.length > 0) {
              this.searchResults = response.data.results;
            } else {
              this.searchResults = [];
              this.$emit('no-results-found');
            }
          })
          .catch(error => {
            console.log('AJAX SEARCH ERROR', error);
            //TODO: LET USER KNOW ERROR
          })
          .finally(() => {
            this.$emit('search-finished', this.searchResults);
            this.searching = false;
          })
      }
    },
    loadMoreResults() {
      this.page++;
      this.search();
    }
  },
}
</script>

<style scoped>

</style>