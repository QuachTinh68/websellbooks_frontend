import BookModel from "../models/BookModel";
import { my_request } from "./Request";

interface ResultInterface {
  result: BookModel[];
  totalElement: number;
  totalPage: number;
}

async function getBooks(path: string): Promise<ResultInterface> {
  const result: BookModel[] = [];

  // Call request function to fetch data from the API endpoint
  const response = await my_request(path);
  // Extract the books data from the response
  const responseData = response._embedded.books;

  const totalPages: number = response.page.totalPages;
  const totalElements: number = response.page.totalElements;

  for (const key in responseData) {
    result.push({
      bookId: responseData[key].bookId,
      bookTitle: responseData[key].bookTitle,
      bookDescription: responseData[key].bookDescription,
      originalPrice: responseData[key].originalPrice,
      price: responseData[key].price,
      stockQuantity: responseData[key].stockQuantity,
      authorName: responseData[key].authorName,
      averageRating: responseData[key].averageRating,
    });
  }

  return {
    result: result,
    totalElement: totalElements,
    totalPage: totalPages,
  };
}

export async function getAllBook(page: number): Promise<ResultInterface> {
  const path: string = `http://localhost:8080/books?page=${page}&size=8`;
  return getBooks(path);
}

export async function getTopThreeBooks(): Promise<ResultInterface> {
  const path: string =
    "http://localhost:8080/books?sort=average_rating,desc&page=0&size=3";
  return getBooks(path);
}
