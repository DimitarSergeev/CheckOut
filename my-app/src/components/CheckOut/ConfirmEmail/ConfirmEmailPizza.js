export const ConfirmEmailPizza = () => {
  const orderData = [
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

  let totalPrice = 0;
  orderData.map((el) => {
    totalPrice += el.price * el.qty;
    return el
  });
  return (
    <div className="es-wrapper-color">
      <table
        className="es-wrapper"
        width="100%"
        cellSpacing={0}
        cellPadding={0}
      >
        <tbody>
          <tr>
            <td className="esd-email-paddings" valign="top">
              <table
                className="es-content esd-header-popover"
                cellSpacing={0}
                cellPadding={0}
                align="center"
              ></table>
              <table
                className="es-content"
                cellSpacing={0}
                cellPadding={0}
                align="center"
              >
                <tbody>
                  <tr />
                  <tr>
                    <td
                      className="esd-stripe"
                      esd-custom-block-id={7681}
                      align="center"
                    >
                      <table
                        className="es-header-body"
                        style={{ backgroundColor: "#000" }}
                        width={600}
                        cellSpacing={0}
                        cellPadding={0}
                        bgcolor="#044767"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              className="esd-structure es-p35t es-p35b es-p35r es-p35l"
                              align="left"
                            >
                              <table
                                className="es-left"
                                cellSpacing={0}
                                cellPadding={0}
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="es-m-p0r es-m-p20b esd-container-frame"
                                      width={340}
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              className="esd-block-text es-m-txt-c"
                                              align="left"
                                            >
                                              <img
                                                src="https://sstore.siweb.bg/images/logo.png"
                                                alt="EMET"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                cellSpacing={0}
                                cellPadding={0}
                                align="right"
                              >
                                <tbody>
                                  <tr className="es-hidden">
                                    <td
                                      className="es-m-p20b esd-container-frame"
                                      esd-custom-block-id={7704}
                                      width={170}
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              className="esd-block-spacer es-p5b"
                                              style={{ fontSize: 0 }}
                                              align="center"
                                            >
                                              <table
                                                width="100%"
                                                height="100%"
                                                cellSpacing={0}
                                                cellPadding={0}
                                                border={0}
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style={{
                                                        borderBottom:
                                                          "1px solid #044767",
                                                        background:
                                                          "rgba(0, 0, 0, 0) none repeat scroll 0% 0%",
                                                        height: 1,
                                                        width: "100%",
                                                        margin: 0,
                                                      }}
                                                    />
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <table
                                                cellSpacing={0}
                                                cellPadding={0}
                                                align="right"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td align="left">
                                                      <table
                                                        width="100%"
                                                        cellSpacing={0}
                                                        cellPadding={0}
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td
                                                              className="esd-block-text"
                                                              align="right"
                                                            >
                                                              <p>
                                                                <a
                                                                  target="_blank"
                                                                  rel="noreferrer"
                                                                  style={{
                                                                    fontSize: 24,
                                                                    lineHeight:
                                                                      "100%",
                                                                    textDecoration:
                                                                      "none",
                                                                    color:
                                                                      "white",
                                                                    paddingRight:
                                                                      "28px",
                                                                    paddingTop:
                                                                      "48px",
                                                                  }}
                                                                  href="https://sstore.siweb.bg/"
                                                                >
                                                                  Shop
                                                                </a>
                                                              </p>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                className="es-content"
                cellSpacing={0}
                cellPadding={0}
                align="center"
              >
                <tbody>
                  <tr>
                    <td className="esd-stripe" align="center">
                      <table
                        className="es-content-body"
                        width={600}
                        cellSpacing={0}
                        cellPadding={0}
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              className="esd-structure es-p40t es-p35r es-p35l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellSpacing={0}
                                cellPadding={0}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="esd-container-frame"
                                      width={530}
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              className="esd-block-image es-p25t es-p25b es-p35r es-p35l"
                                              style={{ fontSize: 0 }}
                                              align="center"
                                            >
                                              {/* <a
                                                rel="noreferrer"
                                                target="_blank"
                                                href="https://viewstripo.email/"
                                              > */}
                                              <img
                                                src="https://tlr.stripocdn.email/content/guids/CABINET_75694a6fc3c4633b3ee8e3c750851c02/images/67611522142640957.png"
                                                alt=""
                                                style={{
                                                  display: "block",
                                                  marginTop: "48px",
                                                }}
                                                width={120}
                                              />
                                              {/* </a> */}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="esd-block-text es-p10b"
                                              align="center"
                                            >
                                              <h2>
                                                Благодарим за вашата поръчка !
                                              </h2>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                className="es-content"
                cellSpacing={0}
                cellPadding={0}
                align="center"
              >
                <tbody>
                  <tr>
                    <td className="esd-stripe" align="center">
                      <table
                        className="es-content-body"
                        width={600}
                        cellSpacing={0}
                        cellPadding={0}
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              className="esd-structure es-p20t es-p35r es-p35l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellSpacing={0}
                                cellPadding={0}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="esd-container-frame"
                                      width={530}
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              className="esd-block-text es-p10t es-p10b es-p10r es-p10l"
                                              bgcolor="#eeeeee"
                                              align="left"
                                            >
                                              <table
                                                style={{ width: 500 }}
                                                className="cke_show_border"
                                                cellSpacing={1}
                                                cellPadding={1}
                                                border={0}
                                                align="left"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td width="80%">
                                                      <h4>
                                                        Потвърждение на
                                                        поръчката
                                                      </h4>
                                                    </td>
                                                    <td width="20%">
                                                      <h4>2345678</h4>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="esd-structure es-p35r es-p35l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellSpacing={0}
                                cellPadding={0}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="esd-container-frame"
                                      width={530}
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              className="esd-block-text es-p10t es-p10b es-p10r es-p10l"
                                              align="left"
                                            >
                                              <table
                                                style={{ width: 500 }}
                                                className="cke_show_border"
                                                cellSpacing={1}
                                                cellPadding={1}
                                                border={0}
                                                align="left"
                                              >
                                                <tbody>
                                                  {/* Поръчани продукти  */}
                                                  {orderData.map((el, i) => (
                                                    <tr key={i}>
                                                      <td
                                                        style={{
                                                          padding:
                                                            "5px 10px 5px 0",
                                                        }}
                                                        width="80%"
                                                        align="left"
                                                      >
                                                        <p>
                                                          {el.name} ( {el.qty} )
                                                        </p>
                                                      </td>
                                                      <td
                                                        style={{
                                                          padding: "5px 0",
                                                        }}
                                                        width="20%"
                                                        align="left"
                                                      >
                                                        <p>
                                                          {" "}
                                                          {el.qty} x{" "}
                                                          {el.price.toFixed(2)}{" "}
                                                          лв
                                                        </p>
                                                      </td>
                                                    </tr>
                                                  ))}
                                                  {/* Поръчани продукти  */}
                                                  <tr>
                                                    <td
                                                      style={{
                                                        padding:
                                                          "5px 10px 5px 0",
                                                      }}
                                                      width="80%"
                                                      align="left"
                                                    >
                                                      <p>Доставка </p>
                                                    </td>
                                                    <td
                                                      style={{
                                                        padding: "5px 0",
                                                      }}
                                                      width="20%"
                                                      align="left"
                                                    >
                                                      <p>2.99 лв</p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td
                                                      style={{
                                                        padding:
                                                          "5px 10px 5px 0",
                                                      }}
                                                      width="80%"
                                                      align="left"
                                                    >
                                                      <p>
                                                        Допълнителни разходи
                                                      </p>
                                                    </td>
                                                    <td
                                                      style={{
                                                        padding: "5px 0",
                                                      }}
                                                      width="20%"
                                                      align="left"
                                                    >
                                                      <p>$5.00</p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="esd-structure es-p10t es-p35r es-p35l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellSpacing={0}
                                cellPadding={0}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="esd-container-frame"
                                      width={530}
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        style={{
                                          borderTop: "3px solid #eeeeee",
                                          borderBottom: "3px solid #eeeeee",
                                        }}
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              className="esd-block-text es-p15t es-p15b es-p10r es-p10l"
                                              align="left"
                                            >
                                              <table
                                                style={{ width: 500 }}
                                                className="cke_show_border"
                                                cellSpacing={1}
                                                cellPadding={1}
                                                border={0}
                                                align="left"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td width="80%">
                                                      <h4>Обща сума</h4>
                                                    </td>
                                                    <td width="20%">
                                                      <h4>
                                                        {totalPrice.toFixed(2)}{" "}
                                                        лв
                                                      </h4>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="esd-structure es-p40t es-p40b es-p35r es-p35l"
                              esd-custom-block-id={7796}
                              align="left"
                            >
                              {/*[if mso]><table width="530" cellpadding="0" cellspacing="0"><tr><td width="255" valign="top"><![endif]*/}
                              <table
                                className="es-left"
                                cellSpacing={0}
                                cellPadding={0}
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="esd-container-frame es-m-p20b"
                                      width={255}
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              className="esd-block-text es-p15b"
                                              align="left"
                                            >
                                              <h4>Адрес за доставка</h4>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="esd-block-text es-p10b"
                                              align="left"
                                            >
                                              <p>675 Massachusetts Avenue</p>
                                              <p>11th Floor</p>
                                              <p>Cambridge, MA 02139</p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              {/*[if mso]></td><td width="20"></td><td width="255" valign="top"><![endif]*/}
                              <table
                                className="es-right"
                                cellSpacing={0}
                                cellPadding={0}
                                align="right"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="esd-container-frame"
                                      width={255}
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              className="esd-block-text es-p15b"
                                              align="left"
                                            >
                                              <h4>
                                                Дата на доставка
                                                <br />
                                              </h4>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="esd-block-text"
                                              align="left"
                                            >
                                              <p>January 1st, 2016</p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              {/*[if mso]></td></tr></table><![endif]*/}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                className="es-content"
                cellSpacing={0}
                cellPadding={0}
                align="center"
              >
                <tbody>
                  <tr>
                    <td
                      className="esd-stripe"
                      esd-custom-block-id={7797}
                      align="center"
                    >
                      <table
                        className="es-content-body"
                        style={{ backgroundColor: "#1b9ba3" }}
                        width={600}
                        cellSpacing={0}
                        cellPadding={0}
                        bgcolor="#1b9ba3"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              className="esd-structure es-p35t es-p35b es-p35r es-p35l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellSpacing={0}
                                cellPadding={0}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="esd-container-frame"
                                      width={530}
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                      ></table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                className="es-footer"
                cellSpacing={0}
                cellPadding={0}
                align="center"
              >
                <tbody style={{ backgroundColor: "rgb(238, 238, 238)" }}>
                  <tr>
                    <td
                      className="esd-stripe"
                      esd-custom-block-id={7684}
                      align="center"
                    >
                      <table
                        className="es-footer-body"
                        width={600}
                        cellSpacing={0}
                        cellPadding={0}
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              className="esd-structure es-p35t es-p40b es-p35r es-p35l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellSpacing={0}
                                cellPadding={0}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="esd-container-frame"
                                      width={530}
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              className="esd-block-text es-p35b"
                                              align="center"
                                            >
                                              <p>
                                                <strong>
                                                  Адрес: ул. Цар Калоян 50 Стара
                                                  Загора{" "}
                                                </strong>
                                              </p>
                                              <p>
                                                <strong>
                                                  Работно време: Понеделник -
                                                  Събота: 10:30 - 22:30 Неделя:
                                                  11:00 - 22:30
                                                </strong>
                                              </p>
                                              <p
                                                style={{
                                                  display: "flex",
                                                  flexDirection: "column",
                                                }}
                                              >
                                                <strong>
                                                  Телефон 0877474992
                                                </strong>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                className="esd-footer-popover es-content"
                cellSpacing={0}
                cellPadding={0}
                align="center"
              >
                <tbody>
                  <tr>
                    <td className="esd-stripe" align="center">
                      <table
                        className="es-content-body"
                        style={{ backgroundColor: "transparent" }}
                        width={600}
                        cellSpacing={0}
                        cellPadding={0}
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              className="esd-structure es-p30t es-p30b es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellSpacing={0}
                                cellPadding={0}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="esd-container-frame"
                                      width={560}
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                      ></table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
