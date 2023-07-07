const getTheTitles = function(books) {
    const bookNames = books.map((book) => {
        return book.title;
    })
    return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
