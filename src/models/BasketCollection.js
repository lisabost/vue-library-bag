// Equivalent to Library Collection
import Collection from "@/models/Collection";

export default function BasketCollection() {
    let bag = new Collection(BagItem);
    bag.user = '';

    bag.checkOutItems = function (){
        this.forEach((item) => {
            item.qty--;
        });
        bag.emptyBasket();
        return bag;
    }

    bag.emptyBasket = function(){
        while(bag.length > 0) {
            bag.pop();
        }
    }
    return bag;
}

function BagItem(){

}


