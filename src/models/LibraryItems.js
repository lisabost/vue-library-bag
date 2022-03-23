function Book(title, pages){
    //this.title = title || '';
    this.title = title ?? ''; // will allow anything except null/undefined
    // ?? is the coalesce operator
    this.pages = parseInt(pages) || 0;
}

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