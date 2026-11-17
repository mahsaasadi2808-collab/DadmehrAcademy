
const levelData = {
  hill: {
    name: "HILL",
    collection: "Big English",
    description: "Explore the Big English learning collection.",
    books: [
      {
        id: "big-english-1",
        title: "Big English 1",
        cover: "image/books/big english/big-english-1.png",
        description: "Big English 1 English course book.",
        level: "Hill",
        pdf: "books/big english/Big English 1.pdf"
      },
      {
        id: "big-english-2",
        title: "Big English 2",
        cover: "image/books/big english/big-english-2.png",
        description: "Big English 2 English course book.",
        level: "Hill",
        pdf: "books/big english/Big English 2.pdf"
      },
      {
        id: "big-english-3",
        title: "Big English 3",
        cover: "image/books/big english/big-english-3.png",
        description: "Big English 3 English course book.",
        level: "Hill",
        pdf: "books/big english/Big English 3.pdf"
      }
    ]
  },

  cliff: {
    name: "CLIFF",
    collection: "Teen2Teen",
    description: "Explore the Teen2Teen learning collection.",
    books: [
      {
        id: "teen2teen-1",
        title: "Teen2Teen 1",
        cover: "image/books/teen2teen/Teen2Teen 1.png",
        description: "Teen2Teen 1 English course book.",
        level: "Cliff",
        pdf: "books/teen2teen/Teen2Teen 1.pdf"
      },
      {
        id: "teen2teen-2",
        title: "Teen2Teen 2",
        cover: "image/books/teen2teen/Teen2Teen 2.png",
        description: "Teen2Teen 2 English course book.",
        level: "Cliff",
        pdf: "books/teen2teen/Teen2Teen 2.pdf"
      },
      {
        id: "teen2teen-3",
        title: "Teen2Teen 3",
        cover: "image/books/teen2teen/Teen2Teen 3.jpg",
        description: "Teen2Teen 3 English course book.",
        level: "Cliff",
        pdf: "books/teen2teen/Teen2Teen 3.pdf"
      }
    ]
  },

  peak: {
    name: "PEAK",
    collection: "American English File",
    description: "Explore the American English File collection.",
    books: [
      {
        id: "aef-1",
        title: "American English File 1",
        cover: "image/books/amarican english file/amarican english file 1.png",
        description: "American English File 1 course book.",
        level: "Peak",
        pdf: "books/american english file/AEF 1.pdf"
      },
      {
        id: "aef-2",
        title: "American English File 2",
        cover: "image/books/amarican english file/amarican english file 2 .png",
        description: "American English File 2 course book.",
        level: "Peak",
        pdf: "books/american english file/AEF 2.pdf"
      },
      {
        id: "aef-3",
        title: "American English File 3",
        cover: "image/books/amarican english file/amarican english file 3 .png",
        description: "American English File 3 course book.",
        level: "Peak",
        pdf: "books/american english file/AEF 3.pdf"
      },
      {
        id: "aef-4",
        title: "American English File 4",
        cover: "image/books/amarican english file/amarican english file 4 .png",
        description: "American English File 4 course book.",
        level: "Peak",
        pdf: "books/american english file/AEF 4.pdf"
      },
      {
        id: "aef-5",
        title: "American English File 5",
        cover: "image/books/amarican english file/amarican english file 5 .png",
        description: "American English File 5 course book.",
        level: "Peak",
        pdf: "books/american english file/AEF 5.pdf"
      }
    ]
  }
};

function getBookById(id) {
  for (const level of Object.values(levelData)) {
    const found = level.books.find(book => book.id === id);
    if (found) return found;
  }
  return null;
}
 