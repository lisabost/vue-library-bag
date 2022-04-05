<template>
  <div id="app">
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-solid fa-book mx-2"></i> CHECK IT OUT!</span>
      <itunes-search @search-finished="displayResults" @searching="currentlySearching" @no-results-found="noResultsFound"></itunes-search>
    </nav>
    <div  class="container-fluid mt-3">
      <progress-bar :currently-working="working" :no-results="noResults"></progress-bar>
      <div class="row">
        <universal-library :library="library" @add-to-basket="addToBasket"></universal-library>
        <library-basket :basket="basket" @remove-me="removeItemFromBasket" @check-out-basket="checkOutBasket"></library-basket>
        <button type="button" class="btn btn-success btn-lg ml-3" @click="showModal">SHOW CHECKED OUT ITEMS</button>
        <checked-out-items v-show="isModalVisible" @close="closeModal" :listOfCheckedOutItems="checkedOutItems" @check-in-basket="checkInBasket" ></checked-out-items>
      </div>
    </div>
  </div>

</template>

<script>
import './styles/app.css'
import UniversalLibrary from "@/components/UniversalLibrary";
import BasketCollection from "@/models/BasketCollection";
import LibraryBasket from "@/components/LibraryBasket";
import CheckedOutItems from "@/components/CheckedOutItems";
import LibraryCollection from "@/models/LibraryCollection";
import {Song, Book, Movie, MusicVideo, Podcast, TvShow, Software} from "@/models/LibraryItems";
import ItunesSearch from "@/components/ItunesSearch";
import ProgressBar from "@/components/ProgressBar";

export default {
  name: 'App',
  components: {
    ProgressBar,
    ItunesSearch,
    CheckedOutItems,
    UniversalLibrary,
    LibraryBasket
  },
  data() {
    return {
      library: new LibraryCollection(),
      basket: new BasketCollection(),
      checkedOutItems: [],
      isModalVisible: false,
      working: false,
      noResults: false
    }
  },
  methods: {
    addToBasket: function(item){
      if (item.qty !== 0){
        let present = this.basket.indexOf(item);
        if (present < 0) {
          this.basket.addItem(item);
        }
      }
    },
    removeItemFromBasket: function(item){
      this.basket.removeItem(item);
    },
    checkOutBasket: function (basket, name) {
      let checkOutList;
      checkOutList = [...basket];
      checkOutList.user = name;
      this.checkedOutItems.push(checkOutList);
      basket.checkOutItems();
    },
    checkInBasket: function (basket) {
        for (let j = 0; j < basket.length; j++) {
          basket[j].checkIn();
        }
        this.checkedOutItems.splice(this.checkedOutItems.indexOf(basket), 1);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    currentlySearching() {
      this.noResults = false;
      this.working = true;
    },
    noResultsFound() {
      this.working = false;
      this.noResults = true;
    },
    displayResults: function (searchResults) {
      this.working = false;
      if (this.library.length > 0) {
        this.library.clearLibrary();
      }
      for (const i in searchResults) {
        this.library.addItem(this.createLibraryObject(searchResults[i]));
      }
    },
    createLibraryObject: function (item) {
      if(item.kind === 'song') {
        return Object.assign(new Song, item);
      } else if (item.kind === 'ebook') {
        return Object.assign(new Book, item);
      } else if (item.wrapperType === 'audiobook') {
        return Object.assign(new Book, item);
      } else if (item.kind === 'feature-movie') {
        return Object.assign(new Movie, item);
      } else if (item.kind === 'music-video') {
        return Object.assign(new MusicVideo, item);
      } else if (item.kind === 'podcast') {
        return Object.assign(new Podcast, item);
      } else if (item.kind === 'tv-episode') {
        return Object.assign(new TvShow, item);
      } else if (item.kind === 'software') {
        return Object.assign(new Software, item);
      }
    }
  },
}
</script>

<style>
#app {


}

</style>
