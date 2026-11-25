import React from "react";

function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Xử lý đăng ký nhận bản tin
  };

  return (
    <footer className="bg-body-tertiary border-top mt-5">
      <div className="container py-5">
        {/* Phần trên: 3 cột thông tin sách + Form đăng ký nhận tin */}
        <div className="row">
          {/* Cột 1: Khám phá */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="fw-bold mb-3">
              <i className="fa-solid fa-compass text-success me-2"></i>Explore
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  New Releases
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Bestsellers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  E-books
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Authors
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 2: Danh mục */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="fw-bold mb-3">
              <i className="fa-solid fa-book text-success me-2"></i>Categories
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Fiction
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Business
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Self-Help
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Science &amp; Tech
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Children&apos;s Books
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ khách hàng */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="fw-bold mb-3">
              <i className="fa-solid fa-headset text-success me-2"></i>Support
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Shipping Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Return &amp; Refund
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Order Tracking
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Đăng ký nhận tin */}
          <div className="col-md-5 offset-md-1 mb-3">
            <form onSubmit={handleSubscribe}>
              <h6 className="fw-bold mb-2">
                <i className="fa-solid fa-envelope-open-text text-success me-2"></i>
                Subscribe to our newsletter
              </h6>
              <p className="text-body-secondary small">
                Get monthly updates on new arrivals, exclusive deals, and
                reading recommendations.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email..."
                  required
                />
                <button className="btn btn-success text-nowrap" type="submit">
                  <i className="fa-solid fa-paper-plane me-1"></i> Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Phần dưới: Bản quyền & Mạng xã hội */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 mt-4 border-top">
          <p className="mb-2 mb-sm-0 text-body-secondary small">
            <i className="fa-solid fa-book-open text-success me-2"></i>© 2026
            Bookstore, Inc. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex mb-0 gap-3">
            <li>
              <a
                className="link-body-emphasis fs-5"
                href="#"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="link-body-emphasis fs-5"
                href="#"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                className="link-body-emphasis fs-5"
                href="#"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </li>
            <li>
              <a
                className="link-body-emphasis fs-5"
                href="#"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
