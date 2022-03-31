function Book(title, author){
    //this.title = title || '';
    this.title = title ?? ''; // will allow anything except null/undefined
    // ?? is the coalesce operator
    this.author = author || '';
}

class Movie {
    title = '';
    director;

    constructor(title, director){
        if(title){
            this.title = title;
        }
        this.director = director || '';
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
    title = ''
    artist = ''
    album = ''

    constructor(title, artist, album) {
        if(title) {
            this.title = title;
        }
        this.artist = artist;
        this.album = album;
    }
}

class MusicVideo {
    title = ''
    artist = ''

    constructor(title, artist) {
        if(title) {
            this.title = title;
        }
        this.artist = artist;
    }
}

class Podcast {
    title = ''
    publisher = ''

    constructor(title, publisher) {
        if(title) {
            this.title = title;
        }
        this.publisher = publisher;
    }
}

class TvShow {
    episodeTitle = '';
    showTitle = ''

    constructor(episode, show) {
        if(episode) {
            this.episodeTitle = episode;
        }
        this.showTitle = show;
    }
}

class Software {
    appName = '';
    genre = '';

    constructor(name, genre) {
        if(name) {
            this.appName = name;
            this.genre = genre;
        }
    }

}

export {Book, Movie, Album, Song, MusicVideo, Podcast, TvShow, Software}