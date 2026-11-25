import React, { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import ImageModel from "../../../models/ImageModel";
import { getAllImagesByBookId } from "../../../api/ImageAPI";
import Loading from "./Loading";
import ErrorAlert from "./ErrorAlert";
import defaultBookImage from "../../../images/public/default_image/image.png";

interface BookProps {
  book: BookModel;
}

const BookProps: React.FC<BookProps> = (props) => {
  const bookId: number = props.book.bookId;
  const [images, setImages] = useState<ImageModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // Fetch images for the book when the component mounts
  useEffect(() => {
    getAllImagesByBookId(bookId)
      .then((imageData) => {
        setImages(imageData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : String(err));
        setLoading(false);
      });
  }, [bookId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  const coverImage = images.find((img) => img.isIconImage) ?? images[0];
  const imageSrc = coverImage?.imageUrl || coverImage?.imageData || defaultBookImage;

  return (
    <div className="col-md-3 mt-3">
      <div className="card h-100 shadow-sm border-0">
        {/* Ảnh bìa sách */}
        <div
          className="d-flex align-items-center justify-content-center bg-light rounded-top p-2"
          style={{ height: "260px" }}
        >
          <img
            src={imageSrc}
            className="w-100 h-100"
            alt={props.book.bookTitle}
            style={{ objectFit: "contain" }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = defaultBookImage;
            }}
          />
        </div>
        {/* Thông tin sách */}
        <div className="card-body d-flex flex-column">
          <h5
            className="card-title fw-bold text-truncate"
            title={props.book.bookTitle}
          >
            {props.book.bookTitle}
          </h5>

          <p className="card-text text-muted small flex-grow-1">
            {props.book.bookDescription}
          </p>

          {/* Giá gốc và Giá bán */}
          <div className="price d-flex align-items-center gap-2 mb-3">
            {props.book.originalPrice !== undefined && (
              <span className="original-price text-muted text-decoration-line-through small">
                ${props.book.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="discounted-price fs-5 fw-bold text-success">
              ${(props.book.price ?? 0).toFixed(2)}
            </span>
          </div>

          {/* Nút yêu thích và Thêm vào giỏ hàng */}
          <div className="row g-2">
            <div className="col-4">
              <button
                className="btn btn-outline-danger btn-sm w-100"
                title="Add to Wishlist"
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
            <div className="col-8">
              <button className="btn btn-success btn-sm w-100">
                <i className="fa-solid fa-cart-shopping me-1"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookProps;
