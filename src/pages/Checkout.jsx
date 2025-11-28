import { useState, useRef, useEffect } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const USD_TO_EGP = 50;

const Checkout = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    subtotal: 600,
    discountValue: 0,
    couponApplied: null,
    paymentMethod: "card",
  });

  const [cartCourses, setCartCourses] = useState([]);
  const [couponInput, setCouponInput] = useState("");
  const [couponValid, setCouponValid] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [payBtnLoading, setPayBtnLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState({
    title: "Payment Successful!",
    message: "Thanks — your order is confirmed.",
  });

  const successOverlayRef = useRef(null);
  const modalCardRef = useRef(null);
  const successIconRef = useRef(null);

  const coupons = {
    bakir10: 0.5,
    omar10: 0.5,
    yassmen10: 0.5,
    el34ry10: 0.5,
  };

  useEffect(() => {
    const savedRaw = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Checkout: raw cart from localStorage:", savedRaw);

    const converted = savedRaw.map((course) => {
      const possibleUsd =
        course.usdPrice ??
        course.priceUSD ??
        course.price ??
        course.amount ??
        course.cost ??
        course.value ??
        0;

      const cleaned =
        typeof possibleUsd === "string"
          ? possibleUsd.replace(/[^0-9.-]+/g, "")
          : possibleUsd;

      const usdNumber = Number(cleaned);
      const safeUsd = Number.isFinite(usdNumber) ? usdNumber : 0;

      const egp = Math.round(safeUsd * USD_TO_EGP);

      return {
        ...course,
        usdPrice: safeUsd,
        price: egp,
      };
    });

    setCartCourses(converted);

    const subtotalEGP = converted.reduce((sum, c) => {
      const p = Number(c.price);
      return sum + (Number.isFinite(p) ? p : 0);
    }, 0);

    setState((prev) => ({
      ...prev,
      subtotal: subtotalEGP,
    }));
  }, []);

  const formatEGP = (n) => {
    const num = Number(n);
    if (!Number.isFinite(num) || num <= 0) return "EGP 0";
    return "EGP " + num.toLocaleString("en-US", { maximumFractionDigits: 0 });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    const p = phone.replace(/\s+/g, "");
    return /^01[0-9]{9,9}$/.test(p);
  };

  const applyCoupon = () => {
    const code = couponInput.trim().toLowerCase();
    if (!code) {
      setCouponValid(false);
      setTimeout(() => setCouponValid(null), 1200);
      return;
    }

    if (Object.prototype.hasOwnProperty.call(coupons, code)) {
      const ratio = coupons[code];
      const discount = Math.round(state.subtotal * ratio);
      setState((prev) => ({
        ...prev,
        discountValue: discount,
        couponApplied: code,
      }));
      setCouponValid(true);
    } else {
      setCouponValid(false);
      setTimeout(() => setCouponValid(null), 1200);
    }
  };

  const handlePaymentMethodChange = (method) => {
    setState((prev) => ({
      ...prev,
      paymentMethod: method,
    }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    if (formErrors[id]) {
      setFormErrors((prev) => ({
        ...prev,
        [id]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = true;
    }
    if (!validateEmail(formData.email)) {
      errors.email = true;
    }
    if (!validatePhone(formData.phone)) {
      errors.phone = true;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setTimeout(() => setFormErrors({}), 1700);
      return;
    }

    setPayBtnLoading(true);
    setTimeout(() => {
      const total = Math.max(
        0,
        Math.round(state.subtotal - state.discountValue)
      );

      const myCourses = JSON.parse(localStorage.getItem("myCourses")) || [];
      const updatedMyCourses = [...myCourses, ...cartCourses];
      localStorage.setItem("myCourses", JSON.stringify(updatedMyCourses));

      localStorage.removeItem("cart");

      setSuccessMessage({
        title: "Payment Successful!",
        message: `Thanks ${
          formData.name
        } — your order is confirmed. Amount: ${formatEGP(total)}.`,
      });
      setShowSuccess(true);
      document.body.style.overflow = "hidden";
    }, 900);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    document.body.style.overflow = "";
    setPayBtnLoading(false);
    navigate("/my-courses");
  };

  useEffect(() => {
    if (showSuccess && modalCardRef.current) {
      setTimeout(() => {
        if (modalCardRef.current) {
          modalCardRef.current.classList.add("checkout-show");
          if (successIconRef.current) {
            successIconRef.current.classList.add("checkout-float");
          }
        }
      }, 50);
    }
  }, [showSuccess]);

  const total = Math.max(0, Math.round(state.subtotal - state.discountValue));

  return (
    <div className="checkout-page">
      <div className="checkout-bg-page">
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            {/* Cart Section */}
            <div className="col-12 col-lg-7">
              <div className="card checkout-glass-card p-3 p-md-4 shadow-sm">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="mb-0">Cart Contents</h3>
                  <small className="checkout-text-muted">
                    Review before payment
                  </small>
                </div>

                <div id="coursesList" className="mb-3">
                  {cartCourses.length > 0 ? (
                    cartCourses.map((course) => (
                      <div
                        key={course.id}
                        className="checkout-course-item d-flex gap-3 align-items-center p-3 rounded-3 mb-3 checkout-hover-float"
                      >
                        <div className="checkout-thumb rounded-3 flex-shrink-0">
                          <img
                            src={course.image || course.thumbnail}
                            alt={course.title}
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-1 checkout-course-title">
                            {course.title}
                          </h5>
                          <div className="d-flex align-items-center gap-2 small">
                            <span className="badge checkout-level-badge">
                              Level: {course.level || "Beginner"}
                            </span>
                            <span className="checkout-text-muted">
                              Duration: {course.duration || "0 h"}
                            </span>
                          </div>
                        </div>
                        <div className="text-end">
                          <div
                            className="price h5 mb-0 checkout-course-price"
                            data-price={course.price}
                          >
                            {formatEGP(course.price)}
                          </div>
                          <small className="checkout-text-muted d-block">
                            x1
                          </small>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center checkout-text-muted">
                      No courses in cart
                    </p>
                  )}
                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <small className="checkout-text-muted">Subtotal</small>
                    <div className="h5 mb-0">{formatEGP(state.subtotal)}</div>
                  </div>
                  <div className="text-end">
                    <small className="checkout-text-muted">Discount</small>
                    <div className="h5 mb-0 text-success">
                      {state.discountValue > 0
                        ? `- ${formatEGP(state.discountValue)}`
                        : formatEGP(0)}
                    </div>
                  </div>
                  <div className="text-end">
                    <small className="checkout-text-muted">Total</small>
                    <div className="h4 mb-0">{formatEGP(total)}</div>
                  </div>
                </div>

                <div className="input-group mt-3 mb-2">
                  <input
                    type="text"
                    className={`form-control checkout-form-control-lg ${
                      couponValid === false
                        ? "is-invalid"
                        : couponValid === true
                        ? "is-valid"
                        : ""
                    }`}
                    placeholder="Coupon code (e.g. bakir10)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                  />
                  <button
                    className="btn checkout-btn-primary btn-lg"
                    onClick={applyCoupon}
                    disabled={state.couponApplied !== null}
                  >
                    {state.couponApplied ? "Applied ✓" : "Apply"}
                  </button>
                </div>
                <div className="small checkout-text-muted mb-1">
                  Available codes:{" "}
                  <span className="fw-semibold">
                    bakir10, omar10, yassmen10, el34ry10
                  </span>{" "}
                  — each gives an additional{" "}
                  <span className="fw-bold text-danger">50%</span> off.
                </div>

                <div className="mt-3">
                  <h6 className="mb-2">Payment methods</h6>
                  <div className="d-flex gap-2 flex-wrap">
                    {["card", "vodafone", "fawry", "paypal"].map((method) => (
                      <button
                        key={method}
                        className={`btn checkout-payment-btn ${
                          state.paymentMethod === method
                            ? "checkout-active"
                            : ""
                        }`}
                        onClick={() => handlePaymentMethodChange(method)}
                      >
                        <i
                          className={`bi bi-${
                            method === "card"
                              ? "credit-card"
                              : method === "vodafone"
                              ? "phone"
                              : method === "fawry"
                              ? "wallet2"
                              : "paypal"
                          }`}
                        ></i>{" "}
                        {method.charAt(0).toUpperCase() + method.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div id="paymentFormsContainer" className="mt-4">
                  {state.paymentMethod === "card" && (
                    <div>
                      <h6 className="mb-3">Card Details</h6>
                      <div className="mb-3">
                        <label className="form-label">Card Number</label>
                        <input
                          type="text"
                          className="form-control checkout-form-control-lg"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="row">
                        <div className="col-6 mb-3">
                          <label className="form-label">Expiry Date</label>
                          <input
                            type="text"
                            className="form-control checkout-form-control-lg"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="col-6 mb-3">
                          <label className="form-label">CVV</label>
                          <input
                            type="text"
                            className="form-control checkout-form-control-lg"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Cardholder Name</label>
                        <input
                          type="text"
                          className="form-control checkout-form-control-lg"
                          placeholder="Name on card"
                        />
                      </div>
                    </div>
                  )}

                  {state.paymentMethod === "vodafone" && (
                    <div>
                      <h6 className="mb-3">Vodafone Cash Details</h6>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control checkout-form-control-lg"
                          placeholder="01xxxxxxxxx"
                        />
                      </div>
                      <div className="alert alert-info small" role="alert">
                        <i className="bi bi-info-circle"></i> A confirmation
                        code will be sent to your phone.
                      </div>
                    </div>
                  )}

                  {state.paymentMethod === "fawry" && (
                    <div>
                      <h6 className="mb-3">Fawry Details</h6>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control checkout-form-control-lg"
                          placeholder="01xxxxxxxxx"
                        />
                      </div>
                      <div className="alert alert-info small" role="alert">
                        <i className="bi bi-info-circle"></i> You'll receive a
                        payment reference code to complete payment.
                      </div>
                    </div>
                  )}

                  {state.paymentMethod === "paypal" && (
                    <div>
                      <h6 className="mb-3">PayPal Account</h6>
                      <div className="mb-3">
                        <label className="form-label">PayPal Email</label>
                        <input
                          type="email"
                          className="form-control checkout-form-control-lg"
                          placeholder="your@paypal.com"
                        />
                      </div>
                      <div className="alert alert-info small" role="alert">
                        <i className="bi bi-info-circle"></i> You'll be
                        redirected to PayPal to complete your payment.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Checkout Form Section */}
            <div className="col-12 col-lg-5">
              <div className="card p-3 p-md-4 shadow-sm checkout-sticky-card checkout-glass-card">
                <h4 className="mb-3">Buyer Information</h4>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label">Full name</label>
                    <input
                      id="name"
                      type="text"
                      className={`form-control checkout-form-control-lg ${
                        formErrors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      id="email"
                      type="email"
                      className={`form-control checkout-form-control-lg ${
                        formErrors.email ? "is-invalid" : ""
                      }`}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">Enter a valid email.</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      className={`form-control checkout-form-control-lg ${
                        formErrors.phone ? "is-invalid" : ""
                      }`}
                      placeholder="01xxxxxxxxx"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Enter a valid phone number.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Notes (optional)</label>
                    <textarea
                      id="notes"
                      className="form-control"
                      rows="3"
                      placeholder="Any notes about your order"
                      value={formData.notes}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-lg checkout-btn-primary"
                      disabled={payBtnLoading}
                    >
                      {payBtnLoading ? "Processing..." : "Pay Now"}
                    </button>
                  </div>
                </form>

                <div className="mt-3 small checkout-text-muted">
                  Clicking "Pay Now" will simulate payment and show a success
                  modal — press Close to continue on the site.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div
            className="checkout-modal-overlay"
            ref={successOverlayRef}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="checkout-modal-card checkout-show"
              ref={modalCardRef}
              role="document"
            >
              <div className="checkout-modal-body p-4 text-center">
                <div className="checkout-icon-wrap">
                  <i
                    className="bi bi-check2 checkout-success-icon checkout-float"
                    ref={successIconRef}
                    aria-hidden="true"
                  ></i>
                </div>
                <h2 className="mt-2 mb-1">{successMessage.title}</h2>
                <p className="mb-3">{successMessage.message}</p>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn checkout-btn-outline-primary btn-lg"
                    onClick={closeSuccess}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
