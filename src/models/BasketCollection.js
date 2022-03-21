// Equivalent to Library Collection
export default function BasketCollection() {
    let arr = [];

    this.user = '';

    arr.addItemToBasket = function(item){
        this.push(item);
        return arr;
    }

    //TODO: add checkout method
    arr.checkOutItems = function (){
        this.forEach((item) => {
            item.qty--;
        });
        arr.emptyBasket();
        return arr;
    }

    arr.removeItem = function (item){
        arr.splice(arr.indexOf(item), 1);
    }

    arr.emptyBasket = function(){
        while(arr.length > 0) {
            arr.pop();
        }
    }

    return arr;
}
