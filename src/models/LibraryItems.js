function Book(title, author, image){
    //this.title = title || '';
    this.title = title ?? ''; // will allow anything except null/undefined
    // ?? is the nullish coalescing operator
    this.author = author || '';
    this.image = image || '';
}

class Movie {
    title = '';
    director;
    image;

    constructor(title, director, image){
        if(title){
            this.title = title;
        }
        this.director = director || '';
        this.image = image || '';
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

class Song {
    title = '';
    artist;
    album ;

    constructor(title, artist, album, image) {
        if(title) {
            this.title = title;
        }
        this.artist = artist;
        this.album = album || '';
        this.image = image || '';
    }
}

class MusicVideo {
    title = '';
    artist;
    image;

    constructor(title, artist, image) {
        if(title) {
            this.title = title;
        }
        this.artist = artist || '';
        this.image = image || '';
    }
}

class Podcast {
    title = ''
    publisher;
    image;

    constructor(title, publisher, image) {
        if(title) {
            this.title = title;
        }
        this.publisher = publisher || '';
        this.image = image || '';
    }
}

class TvShow {
    episodeTitle = '';
    showTitle;
    image;

    constructor(episode, show, image) {
        if(episode) {
            this.episodeTitle = episode;
        }
        this.showTitle = show || '';
        this.image = image || '';
    }
}

class Software {
    appName = '';
    genre = '';
    image = '';

    constructor(name, genre, image) {
        if(name) {
            this.appName = name;
            this.genre = genre;
            this.image = image;
        }
    }

}

export {Book, Movie, Album, Song, MusicVideo, Podcast, TvShow, Software}