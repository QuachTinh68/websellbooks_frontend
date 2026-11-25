class BookModel {
  bookId: number;
  bookTitle?: string; //Allow null
  bookDescription?: string;
  originalPrice?: number;
  price?: number;
  stockQuantity?: number;
  authorName?: string;
  averageRating?: number;

  constructor(
    bookId: number,
    bookTitle?: string,
    bookDescription?: string,
    originalPrice?: number,
    price?: number,
    stockQuantity?: number,
    authorName?: string,
    averageRating?: number,
  ) {
    this.bookId = bookId;
    this.bookTitle = bookTitle;
    this.bookDescription = bookDescription;
    this.originalPrice = originalPrice;
    this.price = price;
    this.stockQuantity = stockQuantity;
    this.authorName = authorName;
    this.averageRating = averageRating;
  }
}
export default BookModel;
