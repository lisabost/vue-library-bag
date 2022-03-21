import Collection from "@/models/Collection";

export default function LibraryCollection() {
    return new Collection(LibraryItem);
}

/**
 * Item with check-in and check-out ability
 * @constructor
 */
function LibraryItem (quantity) {

    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'}

    this.qty = quantity || 0;

    this._status = this._status ||STATUSES.CHECKED_IN;

    this.checkIn = function () {
        this._status = STATUSES.CHECKED_IN;
    };
    this.checkOut = function () {
        this._status = STATUSES.CHECKED_OUT;
    };
    this.isAvailable = function () {
        return this._status === STATUSES.CHECKED_IN;
    };
}
