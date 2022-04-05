function Media() {
    this.artistId = 0;
    this.artistName = '';
    this.artworkUrl30 = '';
    this.artworkUrl60 = '';
    this.artworkUrl100 = '';
    this.trackCensoredName = '';
    this.trackViewUrl = '';
    this.kind = '';
    this.trackId = 0;
    this.trackName = '';
    this.currency = ''
    this.releaseDate;
    this.wrapperType = '';
    this.country = '';

}

class Book extends Media{
    fileSizeBytes;
    formattedPrice;
    artistIds;
    genreIds;
    genres;
    price;
    description;
    averageUserRating;
    userRatingCount;
    collectionId;
    collectionName;
    collectionCensoredName;
    artistViewUrl;
    collectionViewUrl;
    collectionPrice;
    collectionExplicitness;
    trackCount;
    copyright;
    primaryGenreName;
    previewUrl;

    constructor() {
        super();
    }

}

class Movie extends Media{
    previewUrl;
    collectionPrice;
    trackPrice;
    trackRentalPrice;
    collectionHdPrice;
    trackHdPrice;
    trackHdRentalPrice;
    collectionExplicitness;
    trackExplicitness;
    trackTimeMillis;
    primaryGenreName;
    contentAdvisoryRating;
    longDescription;

    constructor() {
        super();
    }
}

class Song extends Media {
    artistViewUrl;
    collectionCensoredName;
    collectionExplicitness;
    collectionId;
    collectionName ;
    collectionPrice;
    collectionViewUrl;
    discCount;
    discNumber;
    isStreamable;
    previewUrl;
    primaryGenreName;
    trackCount;
    trackExplicitness;
    trackNumber;
    trackPrice;
    trackTimeMillis;

    constructor() {
        super();
    }
}

class MusicVideo extends Media{
    artistViewUrl;
    trackViewUrl;
    previewUrl;
    collectionPrice;
    trackPrice;
    releaseDate;
    collectionExplicitness;
    trackExplicitness;
    trackTimeMillis;
    primaryGenreName;

    constructor() {
        super();
    }

}

class Podcast extends Media {
    collectionId;
    collectionName;
    collectionCensoredName;
    artistViewUrl;
    collectionViewUrl;
    feedUrl;
    collectionPrice;
    trackPrice;
    trackRentalPrice;
    collectionHdPrice;
    trackHdPrice;
    trackHdRentalPrice;
    collectionExplicitness;
    trackExplicitness;
    trackCount;
    primaryGenreName;
    artworkUrl600;
    genreIds;
    genres;

    constructor() {
        super();
    }
}

class TvShow extends Media{
    collectionId;
    trackId;
    collectionName;
    collectionCensoredName;
    trackCensoredName;
    artistViewUrl;
    collectionViewUrl;
    previewUrl;
    collectionPrice;
    trackPrice;
    collectionExplicitness;
    trackExplicitness;
    discCount;
    discNumber;
    trackCount;
    trackNumber;
    trackTimeMillis;
    primaryGenreName;
    contentAdvisoryRating;
    shortDescription;
    longDescription;

    constructor() {
        super();
    }
}

class Software extends Media {
    screenshotUrls;
    ipadScreenshotUrls;
    appletvScreenshotUrls;
    artworkUrl512;
    artistViewUrl;
    features;
    advisories;
    supportedDevices;
    isGameCenterEnabled;
    averageUserRating;
    minimumOsVersion;
    languageCodesISO2A;
    fileSizeBytes;
    sellerUrl;
    formattedPrice;
    contentAdvisoryRating;
    averageUserRatingForCurrentVersion;
    userRatingCountForCurrentVersion;
    trackContentRating;
    isVppDeviceBasedLicensingEnabled;
    bundleId;
    primaryGenreName;
    genreIds;
    sellerName;
    currentVersionReleaseDate;
    releaseNotes;
    primaryGenreId;
    version;
    description;
    genres;
    price;
    userRatingCount;

    constructor() {
        super();
    }
}

export {Book, Movie, Song, MusicVideo, Podcast, TvShow, Software}