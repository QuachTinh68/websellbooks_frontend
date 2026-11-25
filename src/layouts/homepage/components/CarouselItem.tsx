import React, { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import ImageModel from "../../../models/ImageModel";
import { getAllImagesByBookId } from "../../../api/ImageAPI";
import defaultBookImage from "../../../images/public/default_image/image.png";

interface CarouselItemProps {
  book: BookModel;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ book }) => {
  const [images, setImages] = useState<ImageModel[]>([]);

  useEffect(() => {
    getAllImagesByBookId(book.bookId)
      .then((imageData) => {
        setImages(imageData);
      })
      .catch(() => {
        setImages([]);
      });
  }, [book.bookId]);

  const coverImage = images.find((img) => img.isIconImage) ?? images[0];
  const imageSrc = coverImage?.imageUrl || coverImage?.imageData || defaultBookImage;

  return (
    <div className="row align-items-center g-4">
      {/* Cột trái: Ảnh sách */}
      <div className="col-md-5 text-center">
        <div
          className="d-flex align-items-center justify-content-center bg-white rounded shadow-sm p-3"
          style={{ height: "350px" }}
        >
          <img
            src={imageSrc}
            className="w-100 h-100"
            alt={book.bookTitle}
            style={{ objectFit: "contain" }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = defaultBookImage;
            }}
          />
        </div>
      </div>

      {/* Cột phải: Nội dung chữ */}
      <div className="col-md-7">
        <h2 className="fw-bold mb-2">{book.bookTitle}</h2>
        {book.authorName && (
          <p className="text-muted mb-3">
            <i className="fa-solid fa-pen-nib me-1"></i> Tác giả: {book.authorName}
          </p>
        )}
        <p className="lead fs-6 mb-4">{book.bookDescription}</p>
        <div className="d-flex align-items-center gap-3">
          {book.originalPrice !== undefined && (
            <span className="text-muted text-decoration-line-through fs-6">
              ${book.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="fs-4 fw-bold text-success">
            ${(book.price ?? 0).toFixed(2)}
          </span>
          <a href={`#book-${book.bookId}`} className="btn btn-success px-4">
            <i className="fa-solid fa-cart-plus me-2"></i> Mua ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
