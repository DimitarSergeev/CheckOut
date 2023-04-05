import { useState } from "react";
import styles from "./CheckOut.module.css";

const CheckOut = () => {
  const [reciverData, setReciverData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };
  const [details, setDetails] = useState({
    date: "Pick Up * Mon, 03, 09:30",
    street: "910 7th Ave New York, NY 10019",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [showContent, setShowContent] = useState({
    promo: false,
    pickUp: false,
    instructions: false,
  });

  const handleDetailsChange = (e) => {
    setDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleReciverChange = (e) => {
    setReciverData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const validate = (e) => {
    switch (e.target.name) {
      case "email":
        setErrors((state) => ({
          ...state,
          [e.target.name]: !reciverData.email.match(
            /^[a-zA-Z0-9]{4,}@[a-zA-Z]+.[a-zA-Z]{2,}/
          ),
        }));
        break;
      case "firstName":
        setErrors((state) => ({
          ...state,
          [e.target.name]: reciverData.firstName.length < 4,
        }));
        break;
      case "lastName":
        setErrors((state) => ({
          ...state,
          [e.target.name]: reciverData.lastName.length < 4,
        }));
        break;
      case "phone":
        setErrors((state) => ({
          ...state,
          [e.target.name]: reciverData.phone.length < 9,
        }));
        break;
      default:
        break;
    }
  };
  console.log(details);
  return (
    <section className={styles["container"]}>
      <div className={styles["order-cont"]}>
        <div className={styles["title-cont"]}>
          <span className={styles["sub-title"]}>CHECKOUT</span>
          <h1 className={styles["restaurant-title"]}>
            ELLA MOZZARELLA PIZZERIA
          </h1>
        </div>
        <div className={styles["ship-method"]}>
          <h2 className={styles["title"]}>DETAILS</h2>
          <div className={styles["ship-items"]}>
            <div className={styles["ship-item"]}>
              <i className="fa-solid fa-shop"></i>
              <div className={styles["desc-cont"]}>
                <input
                  type="text"
                  value={details.date}
                  disabled={!showContent.pickUp}
                  name="date"
                  onChange={handleDetailsChange}
                />
                <input
                  type="text"
                  value={details.street}
                  name="street"
                  onChange={handleDetailsChange}
                  disabled={!showContent.pickUp}
                />
              </div>
              {showContent.pickUp ? (
                <button
                  className={styles["save-btn"]}
                  onClick={() =>
                    setShowContent((state) => ({
                      ...state,
                      pickUp: !showContent.pickUp,
                    }))
                  }
                >
                  Save
                </button>
              ) : (
                <button
                  className={styles["edit-btn"]}
                  onClick={() =>
                    setShowContent((state) => ({
                      ...state,
                      pickUp: !showContent.pickUp,
                    }))
                  }
                >
                  Edit
                </button>
              )}
            </div>
            <div className={styles["ship-item"]}>
              <i className="fa-solid fa-shop"></i>
              <div className={styles["desc-cont"]}>
                <input
                  type="text"
                  value="I'll come inside"
                  disabled={!showContent.instructions}
                />
                <input
                  type="text"
                  value="+ Pickup instructions"
                  disabled={!showContent.instructions}
                />
              </div>
              {showContent.instructions ? (
                <button
                  className={styles["save-btn"]}
                  onClick={() =>
                    setShowContent((state) => ({
                      ...state,
                      instructions: !showContent.instructions,
                    }))
                  }
                >
                  Save
                </button>
              ) : (
                <button
                  className={styles["edit-btn"]}
                  onClick={() =>
                    setShowContent((state) => ({
                      ...state,
                      instructions: !showContent.instructions,
                    }))
                  }
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>

        <div className={styles["receiver-info"]}>
          <h2 className={styles["title"]}>CONTACT</h2>
          <div className={styles["reciver-cont"]}>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                onChange={handleReciverChange}
                onBlur={(e) => validate(e)}
                style={{ border: errors.firstName ? "1px solid red" : "" }}
              />
            </div>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">Last name</label>
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                onChange={handleReciverChange}
                onBlur={(e) => validate(e)}
                style={{ border: errors.lastName ? "1px solid red" : "" }}
              />
            </div>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">Email address</label>
              <input
                type="text"
                name="email"
                placeholder="Email address"
                onChange={handleReciverChange}
                onBlur={(e) => validate(e)}
                style={{ border: errors.email ? "1px solid red" : "" }}
              />
            </div>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">Mobile phone number</label>
              <input
                type="number"
                name="phone"
                placeholder="Mobile phone number"
                onChange={handleReciverChange}
                onBlur={(e) => validate(e)}
                style={{ border: errors.phone ? "1px solid red" : "" }}
              />
            </div>
          </div>
        </div>

        <div className={styles["payment-cont"]}>
          <h2 className={styles["title"]}>PAYMENT</h2>
          <div className={styles["paymet-methods"]}>
            <span className={styles["secure-icon"]}>
              Secure <i className="fa-solid fa-lock"></i>
            </span>

            <label htmlFor="credit-debit" className={styles["payment-item"]}>
              <input
                type="radio"
                id="credit-debit"
                name="payment-method"
                value="credit-debit"
                className={styles["radio-input"]}
                checked={paymentMethod === "credit-debit"}
                onChange={handlePaymentMethod}
              />
              <i className="fa-solid fa-credit-card"></i>
              <span className={styles["payment-title"]}>Credit/Debit Card</span>
            </label>

            <label htmlFor="cash" className={styles["payment-item"]}>
              <input
                type="radio"
                id="cash"
                name="payment-method"
                value="cash"
                className={styles["radio-input"]}
                checked={paymentMethod === "cash"}
                onChange={handlePaymentMethod}
              />
              <i className="fa-solid fa-money-bill-1-wave"></i>
              <span className={styles["payment-title"]}>Cash</span>
            </label>
            <div className={styles["promo-code-cont"]}>
              <button
                className={styles["promo-code-btn"]}
                onClick={() =>
                  setShowContent((state) => ({
                    ...state,
                    promo: !showContent.promo,
                  }))
                }
              >
                <i className="fa-solid fa-money-bill"></i> Add promo code
              </button>
              {showContent.promo && <input type="text" name="promoCode" />}
            </div>
          </div>
        </div>

        <div className={styles["order-info"]}>
          <h2 className={styles["title"]}>YOUR ITEMS</h2>
          <ul className={styles["items-cont"]}>
            <li className={styles["order-item"]}>
              <div className={styles["qty-count"]}>1x</div>
              <div className={styles["item-desc"]}>
                <span className={styles["product-name"]}>
                  Chicken & Mushrooms Pizza
                </span>
                <span className={styles["type"]}>12"</span>
                <div className={styles["action-btns"]}>
                  <button className={styles["edit-btnn"]}>Edit</button>
                  <button className={styles["remove-btn"]}>Remove</button>
                </div>
              </div>
              <span className={styles["price"]}>$15.50</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["finish-order"]}>
        <div className={styles["content"]}>
          <button className={styles["finish-btn"]}>Карта</button>
          <ul className={styles["order-summary"]}>
            <li className={styles["info-item"]}>
              <span>Subtotal</span>
              <span>$24.00</span>
            </li>
            <li className={styles["info-item"]}>
              <span>Estimated Tax</span>
              <span>$2.13</span>
            </li>
            <li className={styles["info-item"]}>
              <span>Tip Amount{"(None)"}</span>
              <span>$0.00</span>
            </li>
            <li className={styles["info-item"]}>
              <span>Tip 100% goes to the restaurant's workers</span>
              <span>$0.00</span>
            </li>
            <li className={styles["discount-cont"]}>
              <button className={styles["tip-btn"]} name="None">
                None
              </button>
              <button className={styles["tip-btn"]} name="5">
                5%
              </button>
              <button className={styles["tip-btn"]} name="10">
                10%
              </button>
              <button className={styles["tip-btn"]} name="15">
                15
              </button>
              <input
                className={styles["tip-btn"]}
                type="number"
                name="other"
                placeholder="Other"
              />
            </li>
            <li className={styles["info-item"]}>
              <span className={styles["total-sum"]}>Total</span>
              <span className={styles["total-sum"]}>$26.13</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
