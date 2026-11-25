import React from "react";

function Loading() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "300px" }}
    >
      <div
        className="spinner-border text-success mb-3"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-muted fw-medium mb-0">
        <i className="fa-solid fa-book-open text-success me-2"></i>
        Đang tải dữ liệu sách...
      </p>
    </div>
  );
}

export default Loading;
