import styles from "./CheckOut.module.css";

import { useState ,useEffect} from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as checkOutService from '../../services/CheckOutService'
const Data = [
  {
    name: "Маргарита",
    qty: 2,
    size: "12см",
    price: 15.5,
  },
  {
    name: "Пеперони",
    qty: 1,
    size: "30см",
    price: 18.5,
  },
];
const CheckOut = () => {

  // useEffect(()=>{
  //       checkOutService.getOrderData()
  //       .then(result =>{
  //         setOrderData(result)
  //       })
  // },[])

  const [orderData, setOrderData] = useState(Data);

  const [reciverData, setReciverData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [promoCode, setPromoCode] = useState(null);
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
    addres: "",
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

  const [tip, setTip] = useState(0);

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

  const handlePaymentInfo = (e) => {
    setPaymentInfo((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handlePromoCode = (e) => {
    setPromoCode(e.target.value);
  };
  const handleTip = (e) => {
    setTip(Number(e.target.value));
  };

  // Validation on inputs

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
        }
        break;
      case "pickUp":
        if (showContent.pickUp) {
          setErrors((state) => ({
            ...state,
            addres: e.target.value.length <= 0,
          }));
        }
        break;
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
//
  const ConfirmPopup = withReactContent(Swal);
  const removeProduct = (e, i) => {
    let data = [...orderData];
    ConfirmPopup.fire({
      title: "Сигурен ли си, искаш да изтриеш този продукт?",
      text: ` ${data[i].name}`,
      icon: "warning",
      iconColor: "firebrick",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "firebrick",
      confirmButtonText: "Да, изтрий го !",
      cancelButtonText: "Откажи",
      background: "#f9f8f7",
    }).then((result) => {
      if (result.isConfirmed) {
        data.splice(i, 1);
        setOrderData([...data]);
        ConfirmPopup.fire({
          icon: "success",
          iconColor: "#000",
          title: "Успешно",
          text: "Продукта беше изтрит от кошницата !",
          confirmButtonColor: "#000",
        });
      }
    });
  };
  const handleQtyChange = (e, i) => {
    let data = [...orderData];
    if (e.target.textContent === '-' && data[i].qty > 1) {
        data[i].qty -= 1
        setOrderData(data)
    }else if (e.target.textContent === "+") {
      data[i].qty += 1
      setOrderData(data)
    }
  };

  const deliveryTax = 2.99;
  let subTotal = orderData.reduce(function (a, b) {
    return a + b.price * b.qty;
  }, 0);
  let totalSum = subTotal * (1 + tip / 100) - deliveryTax;
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
                  placeholder="Въведи адреса тук ..."
                  name="street"
                  onChange={handleReciverChange}
                  onBlur={(e) => validate(e)}
                  disabled={!showContent.delivery}
                  style={{
                    border: showContent.delivery
                      ? "1px solid rgb(184, 182, 182)"
                      : "",
                  }}
                />
              </div>
              {showContent.delivery ? (
                <button
                  className={styles["save-btn"]}
                  onClick={() => {
                    setShowContent((state) => ({
                      ...state,
                      delivery: !showContent.delivery,
                    }));
                    setReciverData((state) => ({
                      ...state,
                      addres: "",
                    }));
                  }}
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
                  placeholder="Уточнение ..."
                  disabled={!showContent.pickUp}
                  onChange={handleReciverChange}
                  style={{
                    border: showContent.pickUp
                      ? "1px solid rgb(184, 182, 182)"
                      : "",
                  }}
                />
              </div>
              {showContent.pickUp ? (
                <button
                  className={styles["save-btn"]}
                  onClick={() => {
                    setShowContent((state) => ({
                      ...state,
                      pickUp: !showContent.pickUp,
                    }));
                    setReciverData((state) => ({
                      ...state,
                      addres: "",
                    }));
                  }}
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
                {/* PayPass */}
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
                <i className="fa-solid fa-tag"></i> Код за отстъпка/ваучер
              </button>
              {showContent.promo && (
                <input
                  type="text"
                  name="promoCode"
                  onChange={handlePromoCode}
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles["order-info"]}>
          <h2 className={styles["title"]}>Продукти</h2>
          <ul className={styles["items-cont"]}>
            {orderData.map((el, i) => (
              <li className={styles["order-item"]} key={i}>
                <div className={styles["qty-cont"]}>
                  <span
                    className={styles["qty-btn"]}
                    onClick={(e) => handleQtyChange(e, i)}
                  >
                    -
                  </span>
                  <span className={styles["qty-count"]}> {el.qty}x</span>
                  <span
                    className={styles["qty-btn"]}
                    onClick={(e) => handleQtyChange(e, i)}
                  >
                    +
                  </span>
                </div>
                <div className={styles["item-desc"]}>
                  <span className={styles["product-name"]}>{el.name}</span>
                  <span className={styles["type"]}>{el.size}"</span>
                  <div className={styles["action-btns"]}>
                    <button
                      className={styles["remove-btn"]}
                      onClick={(e) => removeProduct(e, i)}
                    >
                      Премахване
                    </button>
                  </div>
                </div>
                <span className={styles["price"]}>
                  {(el.price * el.qty).toFixed(2)} лв
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles["finish-order"]}>
        <div className={styles["content"]}>
          <button className={styles["finish-btn"]}>Плащане</button>
          <ul className={styles["order-summary"]}>
            <li className={styles["info-item"]}>
              <span>Междинна сума</span>
              <span>{subTotal.toFixed(2)} лв</span>
            </li>
            <li className={styles["info-item"]}>
              <span>Куриерски разходи</span>
              <span>2.99 лв</span>
            </li>
            <li className={styles["info-item"]}>
              <span>Размер на бакшиша {tip}%</span>
              <span>{(subTotal * (tip / 100)).toFixed(2)} лв</span>
            </li>
            {promoCode && (
              <li className={styles["info-item"]}>
                <span>{promoCode}</span>
                <span>*** лв</span>
              </li>
            )}
            <li className={styles["info-item"]}>
              <span>Бакшиша отива 100% при работниците на заведението</span>
              <span>{(subTotal * (tip / 100)).toFixed(2)} лв</span>
            </li>
            <li className={styles["discount-cont"]}>
              <button
                className={`${styles["tip-btn"]} ${
                  tip === 0 ? styles["active-btn"] : ""
                }`}
                name="Няма"
                onClick={handleTip}
                value={0}
              >
                Няма
              </button>
              <button
                className={`${styles["tip-btn"]} ${
                  tip === 5 ? styles["active-btn"] : ""
                }`}
                name="5"
                value={5}
                onClick={handleTip}
              >
                5%
              </button>
              <button
                name="10"
                value={10}
                onClick={handleTip}
                className={`${styles["tip-btn"]} ${
                  tip === 10 ? styles["active-btn"] : ""
                }`}
              >
                10%
              </button>
              <button
                className={`${styles["tip-btn"]} ${
                  tip === 15 ? styles["active-btn"] : ""
                }`}
                name="15"
                value={15}
                onClick={handleTip}
              >
                15%
              </button>
              <input
                className={styles["tip-btn"]}
                type="number"
                name="other"
                placeholder="Друга сума"
                onChange={handleTip}
              />
            </li>
            <li className={styles["info-item"]}>
              <span className={styles["total-sum"]}>Обща Сума</span>
              <span className={styles["total-sum"]}>
                {totalSum.toFixed(2)} лв
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
