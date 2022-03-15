// import {run} from "@babel/core/lib/transformation";

function LibraryItem(media, removeMethod){

    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'}

    media._status = STATUSES.CHECKED_IN;

    // methods
    media.checkIn = function (){
        this._status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function (){
        this._status = STATUSES.CHECKED_OUT;

    }

    media.isAvailable = function(){
        return this._status === STATUSES.CHECKED_IN;
    }

    // media.remove = function(){
    //     return removeMethod(this);
    // }

    media.remove = removeMethod;

    // return the decorated object
    return media;
}

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

export {LibraryItem, Book, Movie, Album}