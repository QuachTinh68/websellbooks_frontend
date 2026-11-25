import React from "react";

function Navbar() {
  // Hàm xử lý khi người dùng submit form tìm kiếm
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn trình duyệt tự động reload trang
    // TODO: Thêm logic xử lý tìm kiếm sách tại đây
  };

  return (
    // Thanh điều hướng nền tối, có đổ bóng nhẹ (shadow-sm) và padding trên dưới (py-2)
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2">
      <div className="container">
        {/* 1. Logo và tên thương hiệu (bên trái) */}
        <a
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          href="#"
        >
          <i className="fa-solid fa-book-open text-success"></i>
          <span>Bookstore</span>
        </a>

        {/* 2. Cụm Icon tiện ích + Nút Menu mobile */}
        {/* order-lg-last: đẩy cụm này ra ngoài cùng bên phải khi ở màn hình lớn (desktop) */}
        <div className="d-flex align-items-center gap-3 order-lg-last">
          {/* Nút Giỏ hàng kèm huy hiệu (badge) hiển thị số lượng sản phẩm */}
          <a
            href="#"
            className="text-light position-relative text-decoration-none"
            title="Cart"
          >
            <i className="fa-solid fa-cart-shopping fs-5"></i>
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
              style={{ fontSize: "0.65rem" }}
            >
              0
            </span>
          </a>

          {/* Nút Tài khoản người dùng */}
          <a
            href="#"
            className="text-light text-decoration-none"
            title="Account"
          >
            <i className="fa-solid fa-user fs-5"></i>
          </a>

          {/* Nút 3 gạch (Hamburger menu) - chỉ hiển thị trên màn hình nhỏ (mobile/tablet) */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* 3. Khu vực nội dung có thể thu gọn trên mobile (Menu chính + Thanh tìm kiếm) */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Danh sách các liên kết điều hướng chính */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-3">
            {/* Trang chủ */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            {/* Menu thả xuống: Danh mục sách */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              {/* dropdown-menu-dark: đồng bộ nền tối với Navbar */}
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#">
                    Category 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Category 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Category 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Category 4
                  </a>
                </li>
              </ul>
            </li>

            {/* Menu thả xuống: Quy định bán hàng */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sale Policies
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#">
                    Policy 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Policy 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Policy 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Policy 4
                  </a>
                </li>
              </ul>
            </li>

            {/* Liên hệ */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          {/* 4. Form tìm kiếm (gộp ô nhập và nút kính lúp bằng input-group) */}
          <form
            className="d-flex me-lg-4 my-2 my-lg-0"
            role="search"
            onSubmit={handleSearch}
          >
            <div className="input-group input-group-sm">
              <input
                className="form-control bg-light border-0"
                type="search"
                placeholder="Search books..."
                aria-label="Search"
              />
              <button
                className="btn btn-success"
                type="submit"
                aria-label="Search"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
