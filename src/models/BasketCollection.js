// Equivalent to Library Collection

//import {LibraryItem} from "@/models/LibraryItems";

export default function BasketCollection() {
    this.__proto__= [];

    this.addItemToBasket = function(item){
        //this.push(new LibraryItem(item, (item) => this.removeItem(item)));
        this.push(item);
        // return "this" to utilize chaining
        // return this;
    }

    //TODO: add checkout method
    this.checkOutItems = function (){
        this.forEach((item) => {
            item.checkOut();
        });
        //empty the basket
    }

}