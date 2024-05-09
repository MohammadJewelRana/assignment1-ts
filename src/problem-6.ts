{
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const isRecentBook = (bookDetails: Book): boolean => {
    const currentYear = new Date().getFullYear();
    const { publishedYear } = bookDetails;
    const yearDifference = currentYear - publishedYear;
    if (yearDifference <= 5) {
      return true;
    } else {
      return false;
    }
  };

  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022,
  };
  const book2: Book = {
    title: " Book",
    author: "Shahida Akter",
    publishedYear: 2016,
  };

  const isRecent = isRecentBook(book1);
  const isRecent2 = isRecentBook(book2);
  console.log(isRecent, isRecent2);
}
