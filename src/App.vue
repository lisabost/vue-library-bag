<template>
  <div id="app">
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-solid fa-book mx-2"></i> CHECK IT OUT!</span>
      <itunes-search @search-finished="displayResults" @searching="currentlySearching"></itunes-search>
    </nav>
    <div  class="container-fluid mt-3">
      <progress-bar :currently-working="working" ></progress-bar>
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
      working: false
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
      this.working = true;
    },
    displayResults: function (searchResults) {
      this.working = false;
      if (this.library.length > 0) {
        this.library.clearLibrary();
      }
      for(const i in searchResults){
        // iTunes has movie(done), podcast(done), music(song - done), musicVideo(done), audiobook(done), shortFilm(included with movie?), tvShow(done), software(done), ebook(done)
        if(searchResults[i].kind === 'song') {
          this.library.addItem(new Song(searchResults[i].trackName, searchResults[i].artistName, searchResults[i].collectionName, searchResults[i].artworkUrl100));
        } else if (searchResults[i].kind === 'ebook') {
          this.library.addItem(new Book(searchResults[i].trackName, searchResults[i].artistName, searchResults[i].artworkUrl100));
        } else if (searchResults[i].wrapperType === 'audiobook') {
          this.library.addItem(new Book(searchResults[i].collectionName, searchResults[i].artistName, searchResults[i].artworkUrl100));
        } else if (searchResults[i].kind === 'feature-movie') {
          this.library.addItem(new Movie(searchResults[i].trackName, searchResults[i].artistName, searchResults[i].artworkUrl100));
        } else if (searchResults[i].kind === 'music-video') {
          this.library.addItem(new MusicVideo(searchResults[i].trackName, searchResults[i].artistName, searchResults[i].artworkUrl100));
        } else if (searchResults[i].kind === 'podcast') {
          this.library.addItem(new Podcast(searchResults[i].collectionName, searchResults[i].artistName, searchResults[i].artworkUrl100));
        } else if (searchResults[i].kind === 'tv-episode') {
          this.library.addItem(new TvShow(searchResults[i].trackName, searchResults[i].collectionName, searchResults[i].artworkUrl100));
        } else if (searchResults[i].kind === 'software') {
          this.library.addItem(new Software(searchResults[i].trackName, searchResults[i].primaryGenreName, searchResults[i].artworkUrl100));
        }
      }
    },
  },
}
</script>

<style>
#app {


}

</style>
