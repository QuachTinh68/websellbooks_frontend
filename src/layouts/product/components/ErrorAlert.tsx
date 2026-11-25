import React from "react";

interface ErrorAlertProps {
  error: string | null;
}

function ErrorAlert({ error }: ErrorAlertProps) {
  return (
    <div className="container my-4">
      <div
        className="alert alert-danger d-flex align-items-center"
        role="alert"
      >
        <i className="fa-solid fa-exclamation-triangle me-2 fs-5"></i>
        <div>
          <strong>Có lỗi xảy ra khi tải dữ liệu sách.</strong>
          <div className="small mt-1">{error}</div>
        </div>
      </div>
    </div>
  );
}

export default ErrorAlert;
