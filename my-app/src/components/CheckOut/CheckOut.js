import styles from "./CheckOut.module.css";

const CheckOut = () => {
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
                <p className={styles["pick-up"]}>Pick Up * Mon, 03, 09:30</p>
                <span className={styles["place"]}>
                  910 7th Ave New York, NY 10019
                </span>
              </div>
              <button className={styles["edit-btn"]}>Edit</button>
            </div>

            <div className={styles["ship-item"]}>
              <i className="fa-solid fa-shop"></i>
              <div className={styles["desc-cont"]}>
                <p className={styles["pick-up"]}>I'll come inside</p>
                <span className={styles["place"]}>+ Pickup instructions</span>
              </div>
              <button className={styles["edit-btn"]}>Edit</button>
            </div>
          </div>
        </div>

        <div className={styles["receiver-info"]}>
          <h2 className={styles["title"]}>CONTACT</h2>
          <div className={styles["reciver-cont"]}>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">First Name</label>
              <input type="text" placeholder="First name" />
            </div>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">Last name</label>
              <input type="text" placeholder="Last name" />
            </div>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">Email address</label>
              <input type="text" placeholder="Email address" />
            </div>
            <div className={styles["input-cont"]}>
              <label htmlFor="name">Mobile phone number</label>
              <input type="number" placeholder="Mobile phone number" />
            </div>
          </div>
        </div>

        <div className={styles["payment-cont"]}>
          <h2 className={styles["title"]}>PAYMENT</h2>
          <div className={styles["paymet-methods"]}>
            <span className={styles["secure-icon"]}>
              Secure <i class="fa-solid fa-lock"></i>
            </span>
            <div className={styles["payment-item"]}>
              <input type="radio" />
              <i class="fa-solid fa-credit-card"></i>
              <span className={styles["payment-title"]}>Credit/Debit Card</span>
            </div>
            <div className={styles["payment-item"]}>
              <input type="radio" />
              <i class="fa-solid fa-money-bill"></i>
              <span className={styles["payment-title"]}>Cash</span>
            </div>
            <div className={styles["promo-code-cont"]}>
              <button className={styles["promo-code-btn"]}>
                <i class="fa-solid fa-money-bill"></i> Add promo code
              </button>
              <input type="text" />
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
              <button className={styles["tip-btn"]}>None</button>
              <button className={styles["tip-btn"]}>5%</button>
              <button className={styles["tip-btn"]}>10%</button>
              <button className={styles["tip-btn"]}>15</button>
              <button className={styles["tip-btn"]}>Other</button>
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
