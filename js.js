function book(
    title,
    auther,
    isbn) {
    this.title = title
    this.auther = auther
    this.isbn = isbn
}

function UI() {}




document.getElementById("book-from").addEventListener(
    'submit',
    function(e) {
        console.log('test');
        e.preventDefault();
    }
);