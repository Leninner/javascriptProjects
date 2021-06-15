function Book(title, author, pages, state) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.state = state;
    this.info = () => {
        if (state) {
            return (
                title +
                " es un libro escrito por " +
                author +
                " que tiene " +
                pages +
                " páginas " +
                "y ya se ha leído."
            );
        } else {
            return (
                title +
                " es un libro escrito por " +
                author +
                " que tiene " +
                pages +
                " páginas " +
                "y no se ha leído."
            );
        }
    };
}

const firstBook = new Book("De Cero a Uno", "Peter Thiel", 159, false);
const secondBook = new Book("La Gallina Degollada", "Lenin El Pepe", 45, true);

console.log(firstBook.info());
console.log(secondBook.info());
