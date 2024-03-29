const getStoredReadBook = () => {
  const storedReadBook = localStorage.getItem("read-books");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};

const saveReadBook = (book_id) => {
  const storedReadBooks = getStoredReadBook();
  const exists = storedReadBooks.find((bookId) => bookId === book_id);
  if (!exists) {
    storedReadBooks.push(book_id);
    localStorage.setItem("read-books", JSON.stringify(storedReadBooks));
  }
};

export { getStoredReadBook, saveReadBook };
