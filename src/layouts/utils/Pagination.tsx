import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  const pageList: number[] = [];

  if (currentPage === 1) {
    pageList.push(currentPage);
    if (totalPages >= currentPage + 1) {
      pageList.push(currentPage + 1);
    }
    if (totalPages >= currentPage + 2) {
      pageList.push(currentPage + 2);
    }
  } else if (currentPage > 1) {
    if (currentPage >= 3) {
      pageList.push(currentPage - 2);
    }
    if (currentPage >= 2) {
      pageList.push(currentPage - 1);
    }
    pageList.push(currentPage);

    if (totalPages >= currentPage + 1) {
      pageList.push(currentPage + 1);
    }
    if (totalPages >= currentPage + 2) {
      pageList.push(currentPage + 2);
    }
  }

  return (
    <nav aria-label="Book pagination" className="mt-4">
      <ul className="pagination justify-content-center">
        {/* Nút về trang đầu */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link text-success"
            onClick={() => paginate(1)}
            aria-label="First"
            disabled={currentPage === 1}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        {/* Danh sách các số trang */}
        {pageList.map((pageNumber) => {
          const isActive = currentPage === pageNumber;
          return (
            <li
              className={`page-item ${isActive ? "active" : ""}`}
              key={pageNumber}
            >
              <button
                className={`page-link ${
                  isActive
                    ? "bg-success border-success text-white"
                    : "text-success"
                }`}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        {/* Nút tới trang cuối */}
        <li
          className={`page-item ${
            currentPage === totalPages || totalPages === 0 ? "disabled" : ""
          }`}
        >
          <button
            className="page-link text-success"
            onClick={() => paginate(totalPages)}
            aria-label="Last"
            disabled={currentPage === totalPages || totalPages === 0}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
