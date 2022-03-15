// Equivalent to Library Collection

import {LibraryItem} from "@/models/LibraryItems";

export default function BasketCollection() {
    this.__proto__= [];

    this.addItem = function(item){
        //this.push(new LibraryItem(item, (item) => this.removeItem(item)));
        this.push(new LibraryItem(item, (function(collection) {
                return function () {

                    collection.removeItem(this);
                }
            })(this)
        ));
        // return "this" to utilize chaining
        return this;
    }

    //TODO: add checkout method

}