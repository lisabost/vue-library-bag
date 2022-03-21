//
// function LibraryItem(media, removeMethod, quantity){
//
//     const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'}
//
//     media.qty = quantity;
//
//     media._status = STATUSES.CHECKED_IN;
//
//     media.checkIn = function (){
//         this._status = STATUSES.CHECKED_IN;
//     }
//
//     media.checkOut = function (){
//         this._status = STATUSES.CHECKED_OUT;
//
//     }
//
//     media.isAvailable = function(){
//         return this._status === STATUSES.CHECKED_IN;
//     }
//
//     media.remove = removeMethod;
//
//     return media;
// }

function Book(title, pages){
    //this.title = title || '';
    this.title = title ?? ''; // will allow anything except null/undefined
    // ?? is the coalesce operator
    this.pages = parseInt(pages) || 0;
}


// or ES6 syntactic sugar (these are not really classes in the traditional sense)
class Movie {
    title = '';
    runtime;

    constructor(title, runtime){
        if(title){
            this.title = title;
        }
        this.runtime = runtime || 0;
    }
}

class Album {
    title = '';
    artist = '';
    trackCount;

    constructor(title, artist, trackCount) {
        if(title) {
            this.title = title;
        }
        this.artist = artist;
        this.trackCount = trackCount|| 0;
    }
}

export {Book, Movie, Album}