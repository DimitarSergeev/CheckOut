import styles from "./CheckOut.module.css";

import { useState } from "react";

import chip from "./chip.png";
import payPass from "./PayPassicon.png";
import masterCard from "./Mastercard.png";

const CheckOut = () => {
  const [reciverData, setReciverData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
    cardHolder: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addres: ''
  });
  const [showContent, setShowContent] = useState({
    promo: false,
    delivery: false,
    pickUp: false,
  });
  const [paymentErrors, setPaymentErrors] = useState({
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
    cardHolder: "",
    addres: "",
  });

  const handlePaymentInfo = (e) => {
    setPaymentInfo((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleReciverChange = (e) => {
    if (e.target.name === "street" && showContent.delivery) {
      setReciverData((state) => ({
        ...state,
        addres: {
          delivery: e.target.value,
        },
      }));
    } else if (e.target.name === "pickUp" && showContent.pickUp) {
      setReciverData((state) => ({
        ...state,
        addres: {
          pickUp: e.target.value,
        },
      }));
    } else {
      setReciverData((state) => ({
        ...state,
        [e.target.name]: e.target.value,
      }));
    }
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
      case "street":
        if (showContent.delivery) {
          setErrors((state) => ({
            ...state,
            addres: e.target.value.length <= 0,
          }));
          break;
        }
      case "pickUp":
        if (showContent.pickUp) {
          setErrors((state) => ({
            ...state,
            addres: e.target.value.length <= 0,
          }));
          break;
        }
      default:
        break;
    }
  };

  const validatePaymentInfo = (e) => {
    switch (e.target.name) {
      case "cardNumber":
        setPaymentErrors((state) => ({
          ...state,
          [e.target.name]: paymentInfo.cardNumber.length === 16 ? false : true,
        }));
        break;
      case "cardHolder":
        setPaymentErrors((state) => ({
          ...state,
          [e.target.name]: paymentInfo.cardHolder.length >= 6 ? false : true,
        }));
        break;
      case "month":
        setPaymentErrors((state) => ({
          ...state,
          [e.target.name]: paymentInfo.month.length === 2 ? false : true,
        }));
        break;
      case "year":
        setPaymentErrors((state) => ({
          ...state,
          [e.target.name]: paymentInfo.year.length === 2 ? false : true,
        }));
        break;
      case "cvv":
        setPaymentErrors((state) => ({
          ...state,
          [e.target.name]: paymentInfo.cvv.length === 3 ? false : true,
        }));
        break;
      default:
        break;
    }
  };
  console.log(paymentErrors);
  return (
    <section className={styles["container"]}>
      <div className={styles["order-cont"]}>
        <div className={styles["title-cont"]}>
          <span className={styles["sub-title"]}>Количка</span>
          <h1 className={styles["restaurant-title"]}>PizzAmerica</h1>
        </div>
        <div className={styles["ship-method"]}>
          <h2 className={styles["title"]}>Детайли</h2>
          <div className={styles["ship-items"]}>
            <div className={styles["ship-item"]}>
              <i className="fa-sharp fa-solid fa-truck"></i>
              <div className={styles["desc-cont"]}>
                <input type="text" defaultValue="Адрес за доставка" disabled />
                <input
                  type="text"
                  placeholder="910 7th Ave New York, NY 10019"
                  name="street"
                  onChange={handleReciverChange}
                  onBlur={(e)=> validate(e)}
                  disabled={!showContent.delivery}
                  required
                />
              </div>
              {showContent.delivery ? (
                <button
                  className={styles["save-btn"]}
                  onClick={() =>
                    setShowContent((state) => ({
                      ...state,
                      delivery: !showContent.delivery,
                    }))
                  }
                >
                  Откажи
                </button>
              ) : (
                <button
                  className={styles["edit-btn"]}
                  disabled={showContent.pickUp}
                  onClick={() =>
                    setShowContent((state) => ({
                      ...state,
                      delivery: !showContent.delivery,
                    }))
                  }
                >
                  Избери
                </button>
              )}
            </div>
            <div className={styles["ship-item"]}>
              <i className="fa-solid fa-shop"></i>
              <div className={styles["desc-cont"]}>
                <input type="text" defaultValue="Взимане от място" disabled />
                <input
                  type="text"
                  name="pickUp"
                  placeholder="Уточнение"
                  disabled={!showContent.pickUp}
                  onChange={handleReciverChange}
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
                  Откажи
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
                  disabled={showContent.delivery}
                >
                  Избери
                </button>
              )}
            </div>
          </div>
        </div>

        <div className={styles["receiver-info"]}>
          <h2 className={styles["title"]}>Контакти</h2>
          <div className={styles["reciver-cont"]}>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">Име *</label>
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                onChange={handleReciverChange}
                onBlur={(e) => validate(e)}
                style={{
                  border: errors.firstName ? "1px solid firebrick" : "",
                }}
              />
            </div>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">Фамилия *</label>
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                onChange={handleReciverChange}
                onBlur={(e) => validate(e)}
                style={{ border: errors.lastName ? "1px solid firebrick" : "" }}
              />
            </div>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">Имейл</label>
              <input
                type="text"
                name="email"
                placeholder="Email address"
                onChange={handleReciverChange}
                onBlur={(e) => validate(e)}
              />
            </div>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">Телефонен номер *</label>
              <input
                type="number"
                name="phone"
                placeholder="Mobile phone number"
                onChange={handleReciverChange}
                onBlur={(e) => validate(e)}
                style={{ border: errors.phone ? "1px solid firebrick" : "" }}
              />
            </div>
          </div>
        </div>

        <div className={styles["payment-cont"]}>
          <h2 className={styles["title"]}>Метод на плащане</h2>
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
              <span className={styles["payment-title"]}>
                Кредитна / Дебитна карта
              </span>
            </label>

            {paymentMethod === "credit-debit" && (
              <article className={styles["card-holder"]}>
                <div className={styles["card-icons"]}>
                  <img src={chip} alt="" />
                  <img src={payPass} alt="" />
                </div>
                <div className={styles["card-number"]}>
                  <label>Номер на картата</label>
                  <input
                    type="number"
                    placeholder="1234 5678 1234 5678"
                    name="cardNumber"
                    onChange={handlePaymentInfo}
                    onBlur={(e) => validatePaymentInfo(e)}
                  />
                </div>
                <div className={styles["date-secret"]}>
                  <div className={styles["card-date"]}>
                    <label>
                      <span>VALID</span>
                      <span>THRU</span>
                    </label>
                    <div>
                      <input
                        type="number"
                        name="month"
                        onChange={handlePaymentInfo}
                        onBlur={(e) => validatePaymentInfo(e)}
                      />
                      <span>/</span>
                      <input
                        type="number"
                        name="year"
                        onChange={handlePaymentInfo}
                        onBlur={(e) => validatePaymentInfo(e)}
                      />
                    </div>
                  </div>

                  <div className={styles["card-cvv"]}>
                    <label>CVV</label>
                    <input
                      type="number"
                      placeholder="123"
                      name="cvv"
                      onChange={handlePaymentInfo}
                      onBlur={(e) => validatePaymentInfo(e)}
                    />
                  </div>
                </div>

                <div className={styles["card-name"]}>
                  <div className={styles["name-input"]}>
                    <label>Име на картодържател</label>
                    <input
                      type="text"
                      name="cardHolder"
                      onChange={handlePaymentInfo}
                      onBlur={(e) => validatePaymentInfo(e)}
                    />
                  </div>
                  <div className={styles["mastercard"]}>
                    <img src={masterCard} alt="" />
                  </div>
                </div>
              </article>
            )}
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
              <span className={styles["payment-title"]}>В брой</span>
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
                <i className="fa-solid fa-money-bill"></i> Код за
                отстъпка/ваучер
              </button>
              {showContent.promo && <input type="text" name="promoCode" />}
            </div>
          </div>
        </div>

        <div className={styles["order-info"]}>
          <h2 className={styles["title"]}>Продукти</h2>
          <ul className={styles["items-cont"]}>
            <li className={styles["order-item"]}>
              <div className={styles["qty-count"]}>1x</div>
              <div className={styles["item-desc"]}>
                <span className={styles["product-name"]}>
                  Chicken & Mushrooms Pizza
                </span>
                <span className={styles["type"]}>12"</span>
                <div className={styles["action-btns"]}>
                  <button className={styles["edit-btnn"]}>Редактиране</button>
                  <button className={styles["remove-btn"]}>Премахване</button>
                </div>
              </div>
              <span className={styles["price"]}>$15.50</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["finish-order"]}>
        <div className={styles["content"]}>
          <button className={styles["finish-btn"]}>Плащане</button>
          <ul className={styles["order-summary"]}>
            <li className={styles["info-item"]}>
              <span>Междинна сума</span>
              <span>$24.00</span>
            </li>
            <li className={styles["info-item"]}>
              <span>Допълнителни разходи</span>
              <span>$2.13</span>
            </li>
            <li className={styles["info-item"]}>
              <span>Размер на бакшиша{"(Няма)"}</span>
              <span>$0.00</span>
            </li>
            <li className={styles["info-item"]}>
              <span>Бакшиша отива 100% при работниците на заведението</span>
              <span>$0.00</span>
            </li>
            <li className={styles["discount-cont"]}>
              <button className={styles["tip-btn"]} name="None">
                Няма
              </button>
              <button className={styles["tip-btn"]} name="5">
                5%
              </button>
              <button className={styles["tip-btn"]} name="10">
                10%
              </button>
              <button className={styles["tip-btn"]} name="15">
                15%
              </button>
              <input
                className={styles["tip-btn"]}
                type="number"
                name="other"
                placeholder="Друга сума"
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
