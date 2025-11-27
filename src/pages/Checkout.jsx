import { useState, useRef, useEffect } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [state, setState] = useState({
    subtotal: 600,
    discountValue: 0,
    couponApplied: null,
    paymentMethod: "card",
  });

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

  const courses = [
    {
      id: 1,
      title: "React Hooks - From Zero to Pro",
      description: "10 lessons · Videos + source files · Certificate",
      level: "Intermediate",
      duration: "3h",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Python for Beginners",
      description: "12 lessons · Hands-on projects · Exercises",
      level: "Beginner",
      duration: "4h",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=111",
    },
  ];

  const formatEGP = (n) => {
    return "EGP " + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
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
  };

  useEffect(() => {
    if (showSuccess && modalCardRef.current) {
      setTimeout(() => {
        if (modalCardRef.current) {
          modalCardRef.current.classList.add("show");
          if (successIconRef.current) {
            successIconRef.current.classList.add("float");
          }
        }
      }, 50);
    }
  }, [showSuccess]);

  const total = Math.max(0, Math.round(state.subtotal - state.discountValue));

  return (
    <div className="bg-page">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {/* Cart Section */}
          <div className="col-12 col-lg-7">
            <div className="card glass-card p-3 p-md-4 shadow-sm">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="mb-0">Cart Contents</h3>
                <small className="text-muted">Review before payment</small>
              </div>

              <div id="coursesList" className="mb-3">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="course-item d-flex gap-3 align-items-center p-3 rounded-3 mb-3 hover-float"
                  >
                    <div className="thumb rounded-3 flex-shrink-0">
                      <img src={course.image} alt={course.title} />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 course-title">{course.title}</h5>
                      <p className="mb-1 text-muted small course-desc">
                        {course.description}
                      </p>
                      <div className="d-flex align-items-center gap-2 small">
                        <span className="badge level-badge">
                          Level: {course.level}
                        </span>
                        <span className="text-muted">
                          Duration: {course.duration}
                        </span>
                      </div>
                    </div>
                    <div className="text-end">
                      <div
                        className="price h5 mb-0 course-price"
                        data-price={course.price}
                      >
                        EGP {course.price}
                      </div>
                      <small className="text-muted d-block">x1</small>
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <small className="text-muted">Subtotal</small>
                  <div className="h5 mb-0">{formatEGP(state.subtotal)}</div>
                </div>
                <div className="text-end">
                  <small className="text-muted">Discount</small>
                  <div className="h5 mb-0 text-success">
                    {state.discountValue > 0
                      ? `- ${formatEGP(state.discountValue)}`
                      : formatEGP(0)}
                  </div>
                </div>
                <div className="text-end">
                  <small className="text-muted">Total</small>
                  <div className="h4 mb-0">{formatEGP(total)}</div>
                </div>
              </div>

              <div className="input-group mt-3 mb-2">
                <input
                  type="text"
                  className={`form-control form-control-lg ${
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
                  className="btn btn-primary btn-lg"
                  onClick={applyCoupon}
                  disabled={state.couponApplied !== null}
                >
                  {state.couponApplied ? "Applied ✓" : "Apply"}
                </button>
              </div>
              <div className="small text-muted mb-1">
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
                      className={`btn payment-btn ${
                        state.paymentMethod === method ? "active" : ""
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
                        className="form-control form-control-lg"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="row">
                      <div className="col-6 mb-3">
                        <label className="form-label">Expiry Date</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="col-6 mb-3">
                        <label className="form-label">CVV</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Cardholder Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
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
                        className="form-control form-control-lg"
                        placeholder="01xxxxxxxxx"
                      />
                    </div>
                    <div className="alert alert-info small" role="alert">
                      <i className="bi bi-info-circle"></i> A confirmation code
                      will be sent to your phone.
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
                        className="form-control form-control-lg"
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
                        className="form-control form-control-lg"
                        placeholder="your@paypal.com"
                      />
                    </div>
                    <div className="alert alert-info small" role="alert">
                      <i className="bi bi-info-circle"></i> You'll be redirected
                      to PayPal to complete your payment.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Checkout Form Section */}
          <div className="col-12 col-lg-5">
            <div className="card p-3 p-md-4 shadow-sm sticky-card glass-card">
              <h4 className="mb-3">Buyer Information</h4>

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label">Full name</label>
                  <input
                    id="name"
                    type="text"
                    className={`form-control form-control-lg ${
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
                    className={`form-control form-control-lg ${
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
                    className={`form-control form-control-lg ${
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
                    className="btn btn-lg btn-primary btn-gradient"
                    disabled={payBtnLoading}
                  >
                    {payBtnLoading ? "Processing..." : "Pay Now"}
                  </button>
                </div>
              </form>

              <div className="mt-3 small text-muted">
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
          className="modal-overlay"
          ref={successOverlayRef}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-card show" ref={modalCardRef} role="document">
            <div className="modal-body p-4 text-center">
              <div className="icon-wrap">
                <i
                  className="bi bi-check2 success-icon float"
                  ref={successIconRef}
                  aria-hidden="true"
                ></i>
              </div>
              <h2 className="mt-2 mb-1">{successMessage.title}</h2>
              <p className="mb-3">{successMessage.message}</p>
              <div className="d-flex justify-content-center gap-2">
                <button
                  className="btn btn-outline-primary btn-lg"
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
  );
};

export default Checkout;
