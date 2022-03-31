import Collection from "@/models/Collection";

export default function LibraryCollection() {
    let library = Collection(LibraryItem);

    library.clearLibrary = function () {
        while (library.length > 0) {
            library.pop();
        }
    }

    return library;
}

/**
 * Item with check-in and check-out ability
 * @constructor
 */
function LibraryItem (quantity) {

    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'}

    this.qty = quantity || 5;
    this.originalQty = quantity || 5;

    this._status = this._status ||STATUSES.CHECKED_IN;

    this.checkIn = function () {
        this.qty++;
    };
    this.checkOut = function () {
        this._status = STATUSES.CHECKED_OUT;
    };
    this.isAvailable = function () {
        return this.qty > 0;
    };
}
