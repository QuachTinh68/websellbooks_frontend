import React from "react";

function Banner() {
  return (
    <section
      className="text-light py-5 position-relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(18, 22, 25, 0.78), rgba(18, 22, 25, 0.85)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-lg-5">
        <div className="row align-items-center g-4">
          {/* Cột trái: Nội dung chính & Nút kêu gọi hành động */}
          <div className="col-lg-7">


            <h1 className="display-4 fw-bold mb-3">
              Welcome to Our <span className="text-success">Bookstore</span>
            </h1>

            <p className="lead text-light text-opacity-75 mb-4">
              Discover your next favorite book today. Explore thousands of
              handpicked titles from timeless classics to modern bestsellers,
              delivered straight to your door.
            </p>

            {/* Cụm nút hành động */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="/shop" className="btn btn-success btn-lg px-4">
                <i className="fa-solid fa-bag-shopping me-2"></i> Shop Now
              </a>
              <a
                href="/categories"
                className="btn btn-outline-light btn-lg px-4"
              >
                <i className="fa-solid fa-layer-group me-2"></i> Browse
                Categories
              </a>
            </div>

            {/* Thông tin nổi bật nhanh */}
            <div className="d-flex flex-wrap gap-4 pt-3 border-top border-secondary border-opacity-50 small text-light text-opacity-75">
              <div>
                <i className="fa-solid fa-book text-success me-2"></i>
                <strong className="text-light">10,000+</strong> Titles
              </div>
              <div>
                <i className="fa-solid fa-truck-fast text-success me-2"></i>
                <strong className="text-light">Free</strong> Shipping
              </div>
              <div>
                <i className="fa-solid fa-shield-halved text-success me-2"></i>
                <strong className="text-light">100%</strong> Authentic Books
              </div>
            </div>
          </div>

          {/* Cột phải: Thẻ sách nổi bật (ẩn trên màn hình quá nhỏ để gọn giao diện) */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="card bg-dark bg-opacity-75 border-secondary text-light shadow-lg p-3">
              <div className="row g-3 align-items-center">
                <div className="col-5">
                  <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80"
                    alt="Featured Book"
                    className="img-fluid rounded shadow-sm"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-7">
                  <span className="badge bg-warning text-dark mb-2">
                    <i className="fa-solid fa-star me-1"></i> Book of the Month
                  </span>
                  <h5 className="fw-bold mb-1">Milk and Honey</h5>
                  <p className="small text-light text-opacity-75 mb-2">
                    A bestselling collection of poetry and prose about survival
                    and healing.
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fs-5 fw-bold text-success">$14.99</span>
                    <a href="/shop" className="btn btn-sm btn-outline-success">
                      View <i className="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
