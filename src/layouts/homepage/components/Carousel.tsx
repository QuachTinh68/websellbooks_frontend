import React, { useEffect, useState } from "react";
import { getTopThreeBooks } from "../../../api/BookAPI";
import BookModel from "../../../models/BookModel";
import Loading from "../../product/components/Loading";
import ErrorAlert from "../../product/components/ErrorAlert";
import CarouselItem from "./CarouselItem";

const Carousel: React.FC = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTopThreeBooks()
      .then((r) => {
        setBooks(r.result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : String(err));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  if (books.length === 0) {
    return null;
  }

  return (
    <div className="bg-body-tertiary py-5">
      <div className="container">
        <div
          id="bookstoreCarousel"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
          data-bs-interval="3500"
        >
          {/* Các chấm chỉ báo (Indicators) */}
          <div className="carousel-indicators">
            {books.map((book, index) => (
              <button
                key={book.bookId}
                type="button"
                data-bs-target="#bookstoreCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Nội dung các slide */}
          <div className="carousel-inner px-4 px-md-5 pb-5">
            {books.map((book, index) => (
              <div
                key={book.bookId}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <CarouselItem book={book} />
              </div>
            ))}
          </div>

          {/* Nút chuyển slide Trước / Sau */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#bookstoreCarousel"
            data-bs-slide="prev"
            style={{ width: "4%" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#bookstoreCarousel"
            data-bs-slide="next"
            style={{ width: "4%" }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
