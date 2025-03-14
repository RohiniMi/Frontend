class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `Title: ${this.title}, Author: ${this.author}, Year of Publication: ${this.year} `;
    }
    static compareAge(book1, book2) {
        if (book1.year < book2.year) {
            return `${book1.title} is older than ${book2.title}`;
        } else if (book1.year > book2.year) {
            return `${book2.title} is older than ${book1.title}`;
        } else {
            return `${book1.title} and ${book2.title} were published in the same year`;
        }
    }
}
const book1 = new Book("JavaScript from beginner to professional", "Rob Percival", 2021);
const book2 = new Book("Eloquent JavaScript","Marijn Haverbeke",2024);
console.log(Book.compareAge(book1,book2)); //always call on class not an instance of that class

console.log(book1.getSummary());
console.log(book2.getSummary());

