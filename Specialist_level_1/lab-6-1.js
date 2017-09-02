function Book(title, pubYear, price) {
    this.title = title;
    this.pubYear = pubYear;
    this.price = price;
}
var b1 = new Book("Hil", "1932", 1000);

Book.prototype.show = function () {
     return "Title: " + this.title + ", " + "Price: " + this.price;
};

console.log(b1.show());