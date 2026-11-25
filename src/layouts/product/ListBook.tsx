import React, { useEffect, useState } from "react";
import BookProps from "./components/BookProps";
import BookModel from "../../models/BookModel";
import { getAllBook } from "../../api/BookAPI";
import Loading from "./components/Loading";
import ErrorAlert from "./components/ErrorAlert";
import { Pagination } from "../utils/Pagination";

const ListBook: React.FC = () => {
  const [books, setBooks] = useState<BookModel[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);

  useEffect(
    () => {
      getAllBook(currentPage - 1)
        .then((r) => {
          setBooks(r.result);
          setTotalPages(r.totalPage);
          setTotalElements(r.totalElement);
          setLoading(false);
        })
        .catch((err) => {
          setError(err instanceof Error ? err.message : String(err));
          setLoading(false);
        });
    },
    [currentPage], //Just run once when the component is mounted
  );

  const paginate = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <div className="container">
      <div className="row mt-4">
        {books.map((book) => (
          <BookProps key={book.bookId} book={book} />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    </div>
  );
};
export default ListBook;
